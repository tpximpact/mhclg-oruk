import { getAllContentVersions } from '@/utilities/getAllContentVersions'

export function Page({ url }: { url: string }) {
  const apiData = getAllContentVersions({
    contentFolder: '/developers/api',
    specificationFolder: './src/specifications'
  })
  return <div>Validator Page for {url}</div>
}

export const metadata = {
  title: 'ORUK service validator',
  description: 'The tool to validate your feed'
}
