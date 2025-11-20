// Deprecated Mongo helper shim
// This project now uses Prisma. Import and use `src/lib/prisma.ts` instead.

function deprecationError() {
  throw new Error('Legacy Mongo helper is deprecated. Use the Prisma client from `src/lib/prisma.ts`.')
}

export async function getMongoClient(): Promise<void> { deprecationError() }
export async function getDb(): Promise<void> { deprecationError() }
export async function getCollection(): Promise<void> { deprecationError() }
export async function closeMongoClient(): Promise<void> { deprecationError() }
