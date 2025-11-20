// Deprecated base repository shim
// This project now uses Prisma-backed repositories. Keep this file only as
// a compatibility shim to avoid breaking imports; calling any method will
// throw a clear error directing you to use the Prisma client instead.

export abstract class BaseRepository {
  protected _deprecatedMessage =
    'BaseRepository (Mongo) is deprecated. Use Prisma-backed repositories in `src/repositories`.'

  protected throwDeprecated(): never {
    throw new Error(this._deprecatedMessage)
  }
}
