// MongoDB client utility with global caching for Next.js (Node runtime only)
// - Uses a single shared MongoClient across hot reloads in dev
// - Exposes helpers to fetch DB and typed collections
// - Validates env configuration at first use, not at import time

import { MongoClient, Db, Collection, Document } from 'mongodb'
import { logger } from './logger'

const MONGODB_URI = process.env.MONGODB_URI
const MONGODB_DB = process.env.MONGODB_DB

type GlobalWithMongo = typeof globalThis & {
  _mongoClient?: MongoClient
  _mongoPromise?: Promise<MongoClient>
}

const globalForMongo = globalThis as GlobalWithMongo

/**
 * Lazily create or reuse a singleton MongoClient.
 * Note: MongoDB Node driver is not compatible with the Edge runtime.
 */
export async function getMongoClient(): Promise<MongoClient> {
  if (globalForMongo._mongoClient) return globalForMongo._mongoClient
  if (globalForMongo._mongoPromise) return globalForMongo._mongoPromise

  if (!MONGODB_URI) {
    throw new Error('MONGODB_URI is not set. Define it in .env or your deployment environment.')
  }

  logger.info('Creating new MongoClient connection...')

  const client = new MongoClient(MONGODB_URI, {
    serverSelectionTimeoutMS: 5000,
    maxPoolSize: 10
  })

  const promise = client.connect().then(c => {
    // Cache the connected client
    globalForMongo._mongoClient = c
    return c
  })

  globalForMongo._mongoPromise = promise
  return promise
}

/**
 * Get a database handle. If no name is provided, uses MONGODB_DB.
 */
export async function getDb(dbName?: string): Promise<Db> {
  const client = await getMongoClient()
  const name = dbName ?? MONGODB_DB
  if (!name) {
    throw new Error('No database name provided. Set MONGODB_DB or pass dbName.')
  }
  return client.db(name)
}

/**
 * Get a typed collection helper.
 */
export async function getCollection<TSchema extends Document = Document>(
  name: string,
  dbName?: string
): Promise<Collection<TSchema>> {
  const db = await getDb(dbName)
  return db.collection<TSchema>(name)
}
