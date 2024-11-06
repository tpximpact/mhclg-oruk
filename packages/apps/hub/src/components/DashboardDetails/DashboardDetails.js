import styles from './DashboardDetails.module.css'
import dummyData from '../../../content/developers/dashboard/sampleResult.json'
import { STATUS, getColourForStatus, getIconForStatus } from '@/util/status'
import Icon from '@tpx/Icon'

export const DashboardDetails = () => (
	/*{ 
	// result 
}*/ <div className={styles.details}>
		<div className={styles.publisher}>
			{/*<span className={styles.label}>{getDetailsPublisherLabel()}:</span>*/}{' '}
			{getDetailsPublisher()}
		</div>
		<h1>{getDetailsTitle()}</h1>

		<div className={styles.service}>
			{/*<span className={styles.label}>Endpoint:</span>*/}
			<a href={getDetailsURI()} target='_blank'>
				{getDetailsURI()}
			</a>{' '}
			<em>(opens in new window)</em>
		</div>

		{dummyData.payload.map((data, i) => (
			<Section data={data} key={i} />
		))}

		<Validation status={getDetailsStatus()} />
	</div>
)

const getDetailsStatus = () => STATUS.FAIL

const Validation = ({ status }) => {
	const colour = getColourForStatus(status, true)
	return (
		<section>
			<SectionHeading>
				Validation status:{' '}
				<Icon colour={colour} weight='4' icon={getIconForStatus(status, true)} size='48' />{' '}
				<span style={{ color: colour }}>{status}</span>
			</SectionHeading>

			<Field
				data={{
					label: 'Last checked',
					value: getDetailsLastTest(),
					datatype: 'xsd:dateTime'
				}}
			/>
		</section>
	)
}

const getDetailsTitle = () => dummyData.title.value
const getDetailsURI = () => dummyData.serviceUrl.value
const getDetailsPublisher = () => dummyData.publisher.value
// const getDetailsPublisherLabel = () => dummyData.publisher.label

const Section = ({ data }) => (
	<section className={styles.section}>
		<SectionHeading>{data.label}</SectionHeading>
		{data.fields.map((field, i) => (
			<Field data={field} key={i} />
		))}
	</section>
)

const SectionHeading = ({ children }) => <h2>{children}</h2>

const Field = ({ data }) => {
	return (
		<div className={styles.field}>
			<span className={styles.label}>{data.label}</span>
			<FieldValue data={data} />
		</div>
	)
}

const FieldValue = ({ data }) => {
	let result
	switch (data.datatype) {
		case 'xsd:string':
			result = <FVString data={data.value} url={data.url} />
			break
		case 'xsd:dateTime':
			result = <FVDate data={data.value} />
			break
		default:
			console.log(`Sorry, we are out of `)
	}
	return result
}

const FVString = ({ data, url }) => {
	if (url) {
		return (
			<a className={styles.fv} href={url}>
				{data} ({url})
			</a>
		)
	}
	return <span className={styles.fv}>{data}</span>
}

const stringifyDateString = s => {
	let result = Date.parse(s)
	result = new Date(result)
	result = result.toLocaleDateString('en-UK') + ', ' + result.toLocaleTimeString('en-UK')
	return result
}

const FVDate = ({ data }) => <FVString data={stringifyDateString(data)} />

const getDetailsLastTest = () => dummyData.lastTested.value
