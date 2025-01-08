import {DocumentationFeatureSection} from '@/components/Documentation'
import styles from './Parameters.module.css'

export const Parameters = ({
    data
}) => {
   return( <DocumentationFeatureSection 
   				title="Parameters"
   			>
       <pre>
    {JSON.stringify(data,null,2)}
            </pre>
    </DocumentationFeatureSection>)
}