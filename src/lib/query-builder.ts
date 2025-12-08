// MongoDB query builder with type-safe filter and options

import { Filter, Sort, Document } from 'mongodb'

export interface QueryOptions<T> {
  sort?: Sort | Record<string, 1 | -1>
  limit?: number
  skip?: number
  projection?: Partial<Record<keyof T, 1 | 0>>
}

export class QueryBuilder<T extends Document> {
  private filter: Filter<T>
  private options: QueryOptions<T>

  constructor() {
    this.filter = {}
    this.options = {}
  }

  // Filter operations
  where(field: keyof T, value: any): this {
    this.filter = { ...this.filter, [field]: value }
    return this
  }

  whereIn(field: keyof T, values: any[]): this {
    this.filter = { ...this.filter, [field]: { $in: values } }
    return this
  }

  whereLike(field: keyof T, pattern: string): this {
    this.filter = { ...this.filter, [field]: { $regex: pattern, $options: 'i' } }
    return this
  }

  whereGreaterThan(field: keyof T, value: any): this {
    this.filter = { ...this.filter, [field]: { $gt: value } }
    return this
  }

  whereLessThan(field: keyof T, value: any): this {
    this.filter = { ...this.filter, [field]: { $lt: value } }
    return this
  }

  // Sorting
  orderBy(field: keyof T, direction: 'asc' | 'desc' = 'asc'): this {
    // Create new sort object preserving existing sort
    const sort: Record<string, 1 | -1> = {}
    if (this.options.sort) {
      Object.assign(sort, this.options.sort)
    }
    sort[field as string] = direction === 'asc' ? 1 : -1
    this.options.sort = sort
    return this
  }

  // Pagination
  take(limit: number): this {
    this.options.limit = limit
    return this
  }

  skip(offset: number): this {
    this.options.skip = offset
    return this
  }

  // Field selection
  select(fields: Array<keyof T>): this {
    this.options.projection = fields.reduce(
      (acc, field) => ({ ...acc, [field]: 1 }),
      {}
    )
    return this
  }

  // Build the query
  build(): { filter: Filter<T>; options: QueryOptions<T> } {
    return {
      filter: this.filter,
      options: this.options,
    }
  }
}