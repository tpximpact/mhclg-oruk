import { filenameToAtom } from './filenameToAtom'

export const filenameToExtension = (f: string | null | undefined): string | undefined | null =>
  filenameToAtom(f, 1)
