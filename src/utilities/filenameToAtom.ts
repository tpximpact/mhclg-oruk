export const filenameToAtom = (f: string | null | undefined, index: number): string | null =>
  typeof f === 'string' ? (f.split('.')[index] ?? null) : null
