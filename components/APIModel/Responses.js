import {DocumentationFeatureSection} from '@/components/Documentation'
import styles from './Responses.module.css'

export const Responses = ({
    data
}) => {
   return( <DocumentationFeatureSection 
   				title="Responses"
   			>
       <pre>
    {JSON.stringify(data,null,2)}
            </pre>
    </DocumentationFeatureSection>)
}