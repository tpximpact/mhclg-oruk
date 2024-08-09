import styles from './ValidatorResult.module.css'
import Icon, { ICON_TYPE } from '@tpx/Icon'
import { dummyData } from './dummyData'
import { STATUS } from './status'

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

const getColourForStatus = status => {
	let colour
	switch (status) {
		case STATUS.PASS:
			colour = '#00AC1B'
			break
		case STATUS.FAIL:
			colour = '#FF3300'
			break
		default:
			colour = '#999'
	}
	return colour
}

const getIconForStatus = status => {
	let icon
	switch (status) {
		case STATUS.PASS:
			icon = ICON_TYPE.OK
			break
		case STATUS.FAIL:
			icon = ICON_TYPE.X
			break
		default:
			icon = ICON_TYPE.X
	}
	return icon
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
				{/*error && <p className={styles.error}>{error}</p>*/}
			</div>
		</div>
	)
}

export const Tests = ({ result }) => (
	<>
		{result}
		{dummyData.map((sectionData, index) => (
			<Section key={index} data={sectionData} />
		))}
	</>
)
