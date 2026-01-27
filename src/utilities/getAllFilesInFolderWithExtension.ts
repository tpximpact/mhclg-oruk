import { getAllFilesInFolder } from './getAllFilesInFolder'
import { filenameToExtension } from './filenameToExtension'

export const getAllFilesInFolderWithExtension = (folder: string, extension: string): string[] =>
  getAllFilesInFolder(folder).filter(f => filenameToExtension(f) === extension)
