import { filenameToAtom } from './filenameToAtom'

export const filenameToName = (f: string | null | undefined): string | null => filenameToAtom(f, 0)
