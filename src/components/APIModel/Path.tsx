//import styles from './Path.module.css'
import { Parameters } from './Parameters'
import { Responses } from './Responses'
import { DocumentationFeature } from '@/components/Documentation'

interface PathProps {
  twirledOpen: any
  hidePathTitle: any
  data: any
  path: any
  parametersReferences: any
  allData: any
}

export const Path = ({
  twirledOpen,
  hidePathTitle,
  data,
  path,
  parametersReferences,
  allData
}: PathProps) => {
  // for oruk we have only GET calls, so we can make this simplifying assumption
  if (data.get) {
    const paramaters = data.parameters
    data = Object.assign({}, data.get)
    if (paramaters) {
      data.parameters = paramaters
    }
  }
  return (
    <DocumentationFeature
      twirledOpen={twirledOpen}
      name={hidePathTitle ? null : path}
      description={data.summary}
    >
      {data.parameters && (
        <Parameters parametersReferences={parametersReferences} data={data.parameters} />
      )}
      <Responses allData={allData} data={data.responses} />
    </DocumentationFeature>
  )
}
