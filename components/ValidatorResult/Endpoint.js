import styles from './ValidatorResult.module.css'
import {Group} from './Group'

export const Endpoint = ({ path, data }) => (
	<section className={styles.section}>
		<h2>
			<span className={styles.light}>Endpoint:</span>
			<span className={styles.endpoint}>{path}</span>
		</h2>
        {Object.keys(data.groups).map(
            (k,i) => <Group key={i} path={k} data={data.groups[k]} />
        )}
		
	</section>
)