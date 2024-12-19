import styles from './ValidatorResult.module.css'
import { Group } from './Group'

const canLink = p => !p.includes('{id}')


export const Endpoint = ({ rootPath, path, data, linkToEndpoint = true }) => (
	<section className={styles.section}>
		<div className={styles.endpointContainer}>
			<h2>
				<span className={styles.light}>Endpoint</span>
				<span className={styles.endpoint}>{path}</span>
			</h2>
			<div className={styles.endpointRight}>
				{linkToEndpoint && canLink(path) &&
					(
					<a href={rootPath + path + '?&page=1'} target='_blank'>
						View (JSON)
					</a>
				)}
			</div>
		</div>
		{Object.keys(data.groups).map((k, i) => (
			<Group key={i} path={k} data={data.groups[k]} />
		))}
	</section>
)
