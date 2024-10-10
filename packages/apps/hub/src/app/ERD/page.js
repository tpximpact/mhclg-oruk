import { Mermaid } from '@/components/Mermaid'
import { PageMargin } from '@tpx/PageMargin'

export const metadata = {
	title: 'Open Referral UK: 3.0 API ERD'
}

export default function ERDPage() {
	return <PageMargin><Mermaid data={myChart} /></PageMargin>
}

const myChart = `
erDiagram
    taxonomy  {
        string id PK "UNIQ The identifier of the taxonomy. Each entry must have a unique identifier."
        string name "The name of the taxonomy from which terms are sourced"
        string description "Free text description of the taxonomy"
        string uri "NOT NULL. The URI of the taxonomy"
        string version "NOT NULL. The version of the taxonomy"
    }
 taxonomy_term {
        string id PK "UNIQ The identifier of the taxonomy. Each entry must have a unique identifier."
        string name "The name of the taxonomy from which terms are sourced"
        string description "Free text description of the taxonomy"
        string parent_id "NOT NULL. The URI of the taxonomy"
        string version "NOT NULL. The version of the taxonomy"
    }
taxonomy ||--|{ taxonomy_term : "defines"

    `