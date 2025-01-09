import {getSubdirectories} from "./getSubdirectories"
import {getContentVersion} from "./getContentVersion"
import { basename} from 'path'

export const getAllContentVersions = ({
	contentFolder,
	specificationFolder
  }) => {
	const versions = getSubdirectories(specificationFolder)
  
	return versions.reduce((result, versionPath) => ({
	  ...result,
	  [basename(versionPath)]: getContentVersion({
		contentFolder,
		specificationFolderPath: versionPath
	  })
	}), {});
  }
