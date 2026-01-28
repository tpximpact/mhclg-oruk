import { filenameToAtom } from './filenameToAtom'

export const filenameToExtension = (f: string | null | undefined): string | null =>
  filenameToAtom(f, 1)
