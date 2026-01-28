import fs from 'fs'
import { join } from 'path'

export const getAllFilesInFolder = (contentFolder: string): string[] => {
  const dir = join(process.cwd(), contentFolder)
  return fs.readdirSync(dir)
}
