'use client'

import { v4 as uuidv4 } from 'uuid'
import styles from './ValidatorForm.module.css'
import { Button } from '@/components/Button'
import Columns from '@tpx/Columns'
import Link from 'next/link'

const Heading = ({title }) =>
<h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>{title}</h2>

// TODO: load from markdown
const Samples = () => <div>
		<Heading title="Sample reports"/>
		<p>For a quick preview of the results this tool reports, choose:</p>
		<ol className={styles.samples}>
		<li><Link href="/developers/validator/edcf9d03-47dd-4c46-833b-e9831d505c72?uri=https://oruk-api-2a920f51d6bb.herokuapp.com/api/mock">Pass</Link>
		</li><li>
		<Link href="/developers/validator/edcf9d03-47dd-4c46-833b-e9831d505c72?uri=https://oruk-api-2a920f51d6bb.herokuapp.com/api/mock/warn">Pass - but with warnings</Link> 
		</li>
		<li><Link href="/developers/validator/edcf9d03-47dd-4c46-833b-e9831d505c72?uri=https://oruk-api-2a920f51d6bb.herokuapp.com/api/mock/fail">Fail</Link></li>
		</ol>
		
	

		</div>

export const ValidatorForm = (props) =>
	<Columns layout={42}>
		<Form {...props} />
		<Samples />
	</Columns>

 const Form = ({ 
	title,
	action, 
	defaultValue 
}) => {
	const UUID = uuidv4()
	return (
		<div className={styles.form}>
			{title && <Heading title={title}/>}
			<form action={action}>
				<label className={styles.label}>
					URL
					<input type='URL' defaultValue={defaultValue} name='uri' placeholder="Enter URL to check" />
				</label>
				<span className={styles.example}>
					The <strong>base URL</strong> the ORUK data service e.g. <br/>https://example.com/my-oruk-feed
				</span>
				<input type='hidden' name='id' value={UUID} />
				<Button>Check</Button>
			</form>
		</div>
	)
}
