import { filenameToAtom } from './filenameToAtom'

export const filenameToName = (f: string | null | undefined): string | undefined | null =>
  filenameToAtom(f, 0)
