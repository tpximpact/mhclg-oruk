import styles from './ValidatorResult.module.css'
import { Group } from './Group'

export const Endpoint = ({ rootPath, path, data, linkToEndpoint = false }) => (
	<section className={styles.section}>
		<div className={styles.endpointContainer}>
			<h2>
				<span className={styles.light}>Endpoint</span>
				<span className={styles.endpoint}>{path}</span>
			</h2>
			<div className={styles.endpointRight}>
				{linkToEndpoint && (
					<a href={rootPath + path} target='_blank'>
						open
					</a>
				)}
			</div>
		</div>
		{Object.keys(data.groups).map((k, i) => (
			<Group key={i} path={k} data={data.groups[k]} />
		))}
	</section>
)