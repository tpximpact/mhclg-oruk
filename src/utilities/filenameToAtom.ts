export const filenameToAtom = (
  f: string | null | undefined,
  index: number
): string | undefined | null => (typeof f === 'string' ? f.split('.')[index] : null)
