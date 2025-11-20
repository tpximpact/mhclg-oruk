// Prisma client wrapper with global caching for Next.js
// Ensure the MongoDB URI includes a database name. Prisma's Mongo connector
// will fail with `Invalid namespace specified: .Service` if the connection
// string doesn't contain a database segment.
function ensureMongoUriHasDb(uri?: string, db?: string) {
  if (!uri) return uri
  // If URI already contains a path segment (e.g. /mydb before ?), assume OK
  // Match a slash followed by non-slash (db name) before optional ?
  const hasDb = /\/[^\/\?]+/.test(uri)
  if (hasDb) return uri
  if (!db) {
    throw new Error(
      'MONGODB_URI does not include a database name and MONGODB_DB is not set. Set one or include the DB in MONGODB_URI (e.g. mongodb+srv://host/mydb).'
    )
  }
  // Insert the db name before query string if present
  const idx = uri.indexOf('?')
  if (idx === -1) return uri.replace(/\/*$/, '/') + encodeURIComponent(db)
  return uri.slice(0, idx).replace(/\/*$/, '/') + encodeURIComponent(db) + uri.slice(idx)
}

const rawUri = process.env.MONGODB_URI
const dbName = process.env.MONGODB_DB

// If the URI lacks a DB but MONGODB_DB is set, patch the URI so Prisma connects
// to the intended database. If neither is present, throw a helpful error.
let finalUri: string | undefined
try {
  finalUri = ensureMongoUriHasDb(rawUri, dbName)
} catch (err) {
  // If no DB in URI and no MONGODB_DB, throw a clear error
  throw err
}

if (finalUri && finalUri !== rawUri) {
  // eslint-disable-next-line no-console
  console.warn('Prisma: patched MONGODB_URI using MONGODB_DB')
  process.env.MONGODB_URI = finalUri
}

// Fallback: some connection strings use `...net/?...` (no DB segment).
// If `finalUri` wasn't patched above but `MONGODB_DB` is present and the
// URI contains '/?', insert the DB name before the query string.
if ((!finalUri || finalUri === rawUri) && dbName && rawUri && rawUri.includes('/?')) {
  const patched = rawUri.replace('/?', `/${encodeURIComponent(dbName)}?`)
  // eslint-disable-next-line no-console
  console.warn('Prisma: applied fallback patch to MONGODB_URI using MONGODB_DB')
  process.env.MONGODB_URI = patched
}

// Diagnostic logging to help debug runtime namespace issues
try {
  const dbMatch = finalUri ? finalUri.match(/\/([^\/\?]+)(\?|$)/) : null
  // eslint-disable-next-line no-console
  console.error('Prisma debug: MONGODB_URI=', finalUri)
  // eslint-disable-next-line no-console
  console.error('Prisma debug: extracted DB from URI=', dbMatch ? dbMatch[1] : null, 'MONGODB_DB=', dbName)
} catch (e) {
  // ignore
}

const { PrismaClient } = require('@prisma/client')

declare global {
  var __prisma: any
}

let prisma: any

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient()
} else {
  if (!global.__prisma) {
    global.__prisma = new PrismaClient()
  }
  prisma = global.__prisma
}

export { prisma }
export default prisma
