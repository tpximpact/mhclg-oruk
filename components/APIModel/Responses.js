import {DocumentationFeatureSection} from '@/components/Documentation'
import styles from './Responses.module.css'

export const Responses = ({
    data
}) => {
	 data = data["200"]
   return( <DocumentationFeatureSection 
   				title="Response "
   			>
       <pre>
    {JSON.stringify(data,null,2)}
            </pre>
    </DocumentationFeatureSection>)
}