import styles from './DashboardDetails.module.css'
import {
	// STATUS,
	getColourForStatus,
	getIconForStatus
} from '@/util/status'
import Icon from '@tpx/Icon'

export const DashboardDetails = ({ result }) => {
	result = result.result
	return (
		<div className={styles.details}>
			<div className={styles.publisher}>{getDetailsPublisher(result)}</div>
			<h1>{getDetailsTitle(result)}</h1>

			<div className={styles.service}>
				Data feed:{' '}
				<a href={getDetailsURI(result)} target='_blank'>
					{getDetailsURI(result)}
				</a>
				<em>&nbsp;(opens in new window)</em>
			</div>

			{result.payload.map((data, i) => (
				<Section data={data} key={i} />
			))}

			<Validation result={result} status={getDetailsStatus(result)} />
		</div>
	)
}

const getDetailsStatus = result =>
	result.isValid.value ? result.isValid.value.toLowerCase() : null

const Validation = ({ status, result }) => {
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
					value: getDetailsLastTest(result),
					dataType: 'oruk:dataType:dateTime'
				}}
			/>
		</section>
	)
}

const getDetailsTitle = result => result.title?.value
const getDetailsURI = result => result.serviceUrl?.value
const getDetailsPublisher = result => result.publisher?.value

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
	switch (data.dataType) {
		case 'oruk:dataType:string':
			result = <FVString data={data.value} url={data.url} />
			break
		case 'oruk:dataType:dateTime':
			result = <FVDate data={data.value} />
			break
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

const getDetailsLastTest = data => data.lastTested.value
