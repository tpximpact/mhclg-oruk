import styles from './Test.module.css'

import Icon from '@/components/Icon'
import { STATUS, getColourForStatus, getIconForStatus } from '@/utilities/status'

export const Test = ({ data, label, errorsAreFatal }) => {
	const status = data.success ? STATUS.PASS : errorsAreFatal ? STATUS.FAIL : STATUS.OTHER
	return (
		<>
			<div
				className={styles.test}
				style={{
					borderColor: getColourForStatus(status, errorsAreFatal)
				}}
			>
				<div
					className={styles.status}
					style={{
						background: getColourForStatus(status, errorsAreFatal)
					}}
				>
					<div className={styles.testIcon}>
						<Icon
							colour='#fff'
							weight='4'
							icon={getIconForStatus(status, errorsAreFatal)}
							size='48'
						/>
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
					{data.messages && data.messages.length > 0 ? (
						<Results label={label} data={data.messages} />
					) : null}
				</div>
			</div>
		</>
	)
}

const Results = ({ data, ...props }) => (
	<ul className={styles.results}>
		{data.map((result, k) => (
			<Result result={result} key={k} {...props} />
		))}
	</ul>
)

const Result = ({
	result
	/*label*/
}) => (
	<li className={styles.result}>
		{/*<span className={styles.resultDescription}>
			{capitalizeFirstLetter(label)}: {result.description} :
		</span>*/}
		<span className={styles.resultMessage}>
			<Icon
				colour={getColourForStatus(STATUS.FAIL)}
				weight='4'
				icon={getIconForStatus(STATUS.FAIL)}
				size='18'
			/>
			&nbsp;
			{result.message}
		</span>
	</li>
)

// const capitalizeFirstLetter = string => string.charAt(0).toUpperCase() + string.slice(1)
