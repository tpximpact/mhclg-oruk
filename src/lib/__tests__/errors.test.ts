import {
  AppError,
  ValidationError,
  DatabaseError,
  NotFoundError,
  DuplicateError,
  ExternalServiceError,
  isAppError,
  getErrorMessage
} from '../errors'

describe('AppError', () => {
  it('should create an AppError with all properties', () => {
    const error = new AppError('Test error', 'TEST_ERROR', 400, { key: 'value' })

    expect(error.message).toBe('Test error')
    expect(error.code).toBe('TEST_ERROR')
    expect(error.statusCode).toBe(400)
    expect(error.meta).toEqual({ key: 'value' })
    expect(error.name).toBe('AppError')
  })

  it('should default to status code 500 if not provided', () => {
    const error = new AppError('Test error', 'TEST_ERROR')

    expect(error.statusCode).toBe(500)
  })

  it('should serialize to JSON correctly', () => {
    const error = new AppError('Test error', 'TEST_ERROR', 400, { key: 'value' })
    const json = error.toJSON()

    expect(json).toEqual({
      name: 'AppError',
      message: 'Test error',
      code: 'TEST_ERROR',
      statusCode: 400,
      meta: { key: 'value' }
    })
  })

  it('should capture stack trace', () => {
    const error = new AppError('Test error', 'TEST_ERROR')
    expect(error.stack).toBeDefined()
  })
})

describe('ValidationError', () => {
  it('should create a ValidationError with validation errors', () => {
    const errors = {
      email: ['Invalid email format'],
      password: ['Password too short', 'Password must contain a number']
    }
    const error = new ValidationError('Validation failed', errors)

    expect(error.message).toBe('Validation failed')
    expect(error.code).toBe('VALIDATION_ERROR')
    expect(error.statusCode).toBe(400)
    expect(error.errors).toEqual(errors)
    expect(error.name).toBe('ValidationError')
    expect(error.meta?.errors).toEqual(errors)
  })
})

describe('DatabaseError', () => {
  it('should create a DatabaseError', () => {
    const error = new DatabaseError('Connection failed', { host: 'localhost' })

    expect(error.message).toBe('Connection failed')
    expect(error.code).toBe('DATABASE_ERROR')
    expect(error.statusCode).toBe(500)
    expect(error.meta).toEqual({ host: 'localhost' })
    expect(error.name).toBe('DatabaseError')
  })

  it('should work without meta', () => {
    const error = new DatabaseError('Connection failed')

    expect(error.meta).toBeUndefined()
  })
})

describe('NotFoundError', () => {
  it('should create a NotFoundError with resource and id', () => {
    const error = new NotFoundError('Service', 'service-123')

    expect(error.message).toBe('Service not found with id: service-123')
    expect(error.code).toBe('NOT_FOUND')
    expect(error.statusCode).toBe(404)
    expect(error.meta).toEqual({ resource: 'Service', id: 'service-123' })
    expect(error.name).toBe('NotFoundError')
  })
})

describe('DuplicateError', () => {
  it('should create a DuplicateError with resource, field, and value', () => {
    const error = new DuplicateError('User', 'email', 'test@example.com')

    expect(error.message).toBe('User with email "test@example.com" already exists')
    expect(error.code).toBe('DUPLICATE_ERROR')
    expect(error.statusCode).toBe(409)
    expect(error.meta).toEqual({
      resource: 'User',
      field: 'email',
      value: 'test@example.com'
    })
    expect(error.name).toBe('DuplicateError')
  })
})

describe('ExternalServiceError', () => {
  it('should create an ExternalServiceError', () => {
    const error = new ExternalServiceError('GitHub', 'API rate limit exceeded', { limit: 5000 })

    expect(error.message).toBe('GitHub error: API rate limit exceeded')
    expect(error.code).toBe('EXTERNAL_SERVICE_ERROR')
    expect(error.statusCode).toBe(502)
    expect(error.meta).toEqual({ service: 'GitHub', limit: 5000 })
    expect(error.name).toBe('ExternalServiceError')
  })

  it('should work without meta', () => {
    const error = new ExternalServiceError('API', 'Service unavailable')

    expect(error.meta).toEqual({ service: 'API' })
  })
})

describe('isAppError', () => {
  it('should return true for AppError instances', () => {
    const error = new AppError('Test', 'TEST')
    expect(isAppError(error)).toBe(true)
  })

  it('should return true for ValidationError instances', () => {
    const error = new ValidationError('Test', {})
    expect(isAppError(error)).toBe(true)
  })

  it('should return true for DatabaseError instances', () => {
    const error = new DatabaseError('Test')
    expect(isAppError(error)).toBe(true)
  })

  it('should return false for regular Error instances', () => {
    const error = new Error('Test')
    expect(isAppError(error)).toBe(false)
  })

  it('should return false for non-error values', () => {
    expect(isAppError('string')).toBe(false)
    expect(isAppError(null)).toBe(false)
    expect(isAppError(undefined)).toBe(false)
    expect(isAppError({})).toBe(false)
  })
})

describe('getErrorMessage', () => {
  it('should extract message from Error instances', () => {
    const error = new Error('Test error message')
    expect(getErrorMessage(error)).toBe('Test error message')
  })

  it('should extract message from AppError instances', () => {
    const error = new AppError('App error message', 'TEST')
    expect(getErrorMessage(error)).toBe('App error message')
  })

  it('should return string errors as-is', () => {
    expect(getErrorMessage('String error')).toBe('String error')
  })

  it('should return default message for unknown error types', () => {
    expect(getErrorMessage(null)).toBe('An unknown error occurred')
    expect(getErrorMessage(undefined)).toBe('An unknown error occurred')
    expect(getErrorMessage(123)).toBe('An unknown error occurred')
    expect(getErrorMessage({})).toBe('An unknown error occurred')
  })
})
