// Custom error classes for MongoDB operations

export class MongoDBError extends Error {
  constructor(message: string, public _cause?: Error) {
    super(message)
    this.name = 'MongoDBError'
  }
}

export class DocumentNotFoundError extends MongoDBError {
  constructor(id: string, collection: string) {
    super(`Document not found in ${collection} with id: ${id}`)
    this.name = 'DocumentNotFoundError'
  }
}

export class ValidationError extends MongoDBError {
  constructor(message: string, public _errors: Record<string, string[]>) {
    super(message)
    this.name = 'ValidationError'
  }
}

export class DuplicateKeyError extends MongoDBError {
  constructor(key: string, value: string, collection: string) {
    super(`Duplicate ${key} value: ${value} in collection ${collection}`)
    this.name = 'DuplicateKeyError'
  }
}

// Error handling utilities
export function isMongoDBError(error: unknown): error is MongoDBError {
  return error instanceof MongoDBError
}

export function handleMongoDBError(error: unknown): never {
  if (error instanceof Error) {
    // Handle specific MongoDB driver errors
    if (error.name === 'MongoServerError') {
      if ((error as any).code === 11000) {
        throw new DuplicateKeyError(
          Object.keys((error as any).keyPattern)[0],
          Object.values((error as any).keyValue)[0] as string,
          (error as any).namespace
        )
      }
    }
    
    throw new MongoDBError(error.message, error)
  }
  
  throw new MongoDBError('Unknown error occurred')
}