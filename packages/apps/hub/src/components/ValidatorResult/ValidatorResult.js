import { Test } from './Test'
import { Title } from './Title'
import dummyData from './dummy.json'
import styles from './ValidatorResult.module.css'

export const ValidatorResult = ({ result }) => {
	result = result.result
	result = dummyData
	return (
		<div>
			<Title result={result} />
			{result.metadata && <Metadata result={result} />}
			{result.testSuites && <Tests result={result} />}
			{result.counts && <Counts result={result} />}
		</div>
	)
}

const Metadata = ({ result }) => (
	<Section title='Metadata'>
		<ol className={styles.metadataList}>
			{result.metadata.map((item, index) => (
				<li key={index}>
					{item.label}: <strong>{item.value}</strong>
				</li>
			))}
		</ol>
	</Section>
)

const Counts = ({ result }) => (
	<Section title={'Counts'}>
		<ol className={styles.countList}>
			{Object.keys(result.counts).map(k => {
				const count = result.counts[k]
				return (
					<li style={{ fontWeight: count > 0 ? '700' : '200' }} key={k}>
						<span className={styles.description}>{k}:</span>
						<span className={styles.count}>{count}</span>
					</li>
				)
			})}
		</ol>
	</Section>
)

const Tests = ({ result }) => (
	<>
		{result.testSuites.map((suite, index) => (
			<TestSuite key={index} data={suite} />
		))}
	</>
)

const TestSuite = ({ data }) => {
	const errorsAreFatal = data.dealbreaker
	return (
		<Section title={'Tests: ' + data.name} className={styles.testsuite}>
			{data.tests.map((t, i) => (
				<Test key={i} data={t} label={data.label} errorsAreFatal={errorsAreFatal} />
			))}
		</Section>
	)
}

const Section = ({ children, title, className }) => (
	<section className={`${styles.section} ${className}`}>
		<h2>{title}</h2>
		{children}
	</section>
)
