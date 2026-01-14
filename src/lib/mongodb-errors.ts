// Custom error classes for MongoDB operations

export class ValidationError extends Error {
  constructor(message: string, public _errors: Record<string, string[]>) {
    super(message)
    this.name = 'ValidationError'
  }
}