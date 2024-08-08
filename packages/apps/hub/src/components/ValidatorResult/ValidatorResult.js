import styles from './ValidatorResult.module.css'
import Icon, { ICON_TYPE } from '@tpx/Icon'
import { LiteralResponse } from './LiteralResponse'

const dummyData = [
	{
		title: 'Level 1 compliance',
		status: 'passed',
		blurb:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lorem ante, placerat sit amet ex non, vestibulum commodo lorem. Maecenas vel molestie dolor. Cras vel faucibus arcu, id ullamcorper massa. Proin non ligula pellentesque, suscipit metus in, sollicitudin urna. Ut pulvinar tristique nisi, eget tristique magna finibus vel. Proin dignissim risus ligula, ut porttitor mauris euismod non. Phasellus tempus orci id magna ullamcorper interdum. Maecenas commodo ultrices lacus at pellentesque. Nullam id efficitur nunc. Sed arcu elit, lacinia sit amet ullamcorper id, euismod nec enim. In dignissim dui nunc, ut malesuada quam facilisis molestie.',
		tests: [
			{
				title: 'Test A',
				status: 'passed',
				details: 'Lorem ipsum dolor sit amet si meliora dies'
			},
			{
				title: 'Test B',
				status: 'passed',
				details: 'Lorem ipsum dolor sit amet si meliora dies'
			},
			{
				title: 'Test C',
				status: 'passed',
				details: 'Lorem ipsum dolor sit amet si meliora dies'
			}
		]
	},
	{
		title: 'Level 2 compliance',
		status: 'failed',
		blurb:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lorem ante, placerat sit amet ex non, vestibulum commodo lorem. Maecenas vel molestie dolor. Cras vel faucibus arcu, id ullamcorper massa. Proin non ligula pellentesque, suscipit metus in, sollicitudin urna. Ut pulvinar tristique nisi, eget tristique magna finibus vel. Proin dignissim risus ligula, ut porttitor mauris euismod non. Phasellus tempus orci id magna ullamcorper interdum. Maecenas commodo ultrices lacus at pellentesque. Nullam id efficitur nunc. Sed arcu elit, lacinia sit amet ullamcorper id, euismod nec enim. In dignissim dui nunc, ut malesuada quam facilisis molestie.',
		tests: [
			{
				title: 'Test D',
				status: 'passed',
				details: 'Lorem ipsum dolor sit amet si meliora dies'
			},
			{
				title: 'Test E',
				status: 'failed',
				details: 'Lorem ipsum dolor sit amet si meliora dies'
			},
			{
				title: 'Test F',
				status: 'skipped',
				details: 'Lorem ipsum dolor sit amet si meliora dies'
			}
		]
	}
]

export const ValidatorResult = ({ result }) => {
	return (
		<div>
			<h2 className={styles.service}>
				<span className={styles.light}>for </span>
				{result.queryParams.uri}
			</h2>

			{dummyData.map((sectionData, index) => (
				<Section key={index} data={sectionData} />
			))}
			<div style={{ margin: '5rem 0' }}>
				<LiteralResponse host={result.queryParams.uri} />
			</div>
		</div>
	)
}

const STATUS = {
	PASS: 'passed',
	FAIL: 'failed',
	SKIPPED: 'skipped'
}

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
