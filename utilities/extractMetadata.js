import * as matter from 'gray-matter'

const extractMetadata = contents => matter(contents).data

export default extractMetadata
