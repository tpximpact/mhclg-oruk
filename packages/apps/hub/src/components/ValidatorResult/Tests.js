import styles from './Tests.module.css'
import Icon /*, { ICON_TYPE }*/ from '@tpx/Icon'
import { STATUS, getColourForStatus, getIconForStatus, resultToStatus } from '@/util/status'

/*
const getCSSClassForStatus = status => {
	let klass
	switch (status) {
		case STATUS.PASS:
			klass = styles.passStatus
			break
		case STATUS.FAIL:
			klass = styles.failStatus
			break
		default:
			klass = styles.skipStatus
	}
	return klass
}

const Section = ({ data }) => {
	const title = data.title
	const status = data.status
	const tests = data.tests
	const blurb = data.blurb

	return (
		<section className={styles.section}>
			<header>
				<h3 className={styles.sectionTitle}>
					<Icon
						colour={getColourForStatus(status)}
						weight='4'
						icon={getIconForStatus(status)}
						size='26'
					/>
					<span className={styles.title}>{title}</span>
					<span
						style={{
							color: getColourForStatus(status),
							display: 'inline-block',
							marginLeft: '0.25rem'
						}}
					>
						({status})
					</span>
				</h3>
			</header>
			<div className={styles.payload} style={{ borderColor: getColourForStatus(status) }}>
				<p style={{ margin: '0 0 1rem' }}>{blurb}</p>
				{tests.map((test, index) => (
					<Test key={index} data={test} />
				))}
			</div>
		</section>
	)
}

const Test = ({ data }) => {
	const status = data.status
	return (
		<div className={`${styles.test} ${getCSSClassForStatus(status)}`}>
			<div className={styles.testIcon}>
				<Icon colour='#fff' weight='4' icon={getIconForStatus(status)} size='48' />
			</div>
			<div className={styles.testText}>
				<h4>
					{data.title}{' '}
					<span style={{ display: 'inline-block', marginLeft: '0.25rem' }}>({status})</span>
				</h4>

				<details>
					<summary>more details</summary>
					<p>{data.details}</p>
				</details>
				</div>
		</div>
	)
}

*/

export const Tests = ({ result }) => {
	const nTests = result.tests.length
	const nPasses = result.tests.filter(t => t.success === true).length
	return (
		<section className={styles.tests}>
			<h2 className={styles.title}>
				<span className={styles.light}>Tests:</span> {nPasses}/{nTests} passed
			</h2>
			{result.tests.map((t, i) => (
				<Test key={i} data={t} />
			))}
		</section>
	)
}

const Test = ({ data }) => {
	const status = resultToStatus(data)
	return (
		<>
			<div
				className={styles.test}
				style={{
					borderColor: getColourForStatus(status)
				}}
			>
				<div
					className={styles.status}
					style={{
						background: getColourForStatus(status)
					}}
				>
					<div className={styles.testIcon}>
						<Icon colour='#fff' weight='4' icon={getIconForStatus(status)} size='48' />
					</div>
					<div className={styles.testText}>
						<span>{status === STATUS.PASS ? 'PASS' : 'FAIL'}</span>
					</div>
				</div>
				<div className={styles.payload}>
					<h3>{data.name}</h3>
					<p>{data.description}?</p>
					<p>
						Endpoint: <strong>{data.endpoint}</strong>
					</p>
					{data.issues.length > 0 ? <Issues data={data.issues} /> : null}
				</div>
			</div>
		</>
	)
}

const Issues = ({ data }) => (
	<ul className={styles.issues}>
		{data.map((issue, k) => (
			<Issue issue={issue} key={k} />
		))}
	</ul>
)

const Issue = ({ issue }) => (
	<li className={styles.issue}>
		<span className={styles.issueDescription}>{issue.description} :</span>
		<span className={styles.issueMessage}>{issue.message}</span>
	</li>
)
