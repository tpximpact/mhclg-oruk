import styles from './ValidatorResult.module.css'
import Icon, { ICON_TYPE } from '@tpx/Icon'
import { LiteralResponse } from './LiteralResponse'

const Pass = props => (
	<Validation status='pass' icon={ICON_TYPE.OK} colourClass={styles.pass} {...props} />
)

const Fail = props => (
	<Validation status='fail' icon={ICON_TYPE.WARN} colourClass={styles.fail} {...props} />
)

const NA = props => (
	<Validation
		status='not attempted'
		iconColour='#949494'
		icon={ICON_TYPE.WARN}
		colourClass={styles.na}
		{...props}
	/>
)

const Validation = ({ title, text, icon, colourClass, error, status, iconColour }) => (
	<div className={`${styles.validation} ${colourClass}`}>
		<div className={styles.icon}>
			<Icon colour={iconColour ? iconColour : '#000'} weight='2' icon={icon} size='36' />
		</div>
		<div className={styles.content}>
			<details>
				<summary>
					{title}: <span className={styles.status}>{status}</span>
				</summary>
				<p>{text}</p>
			</details>
			{error && <p className={styles.error}>{error}</p>}
		</div>
	</div>
)

const dummyData = [
	{
		title: 'Level 1 compliance',
		status: 'pass'
	},
	{
		title: 'Level 2 compliance',
		status: 'fail'
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

			<Pass
				title='Check A'
				text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus justo sit amet nisl mattis, nec aliquam risus scelerisque. Vestibulum eget tempor leo. Proin pharetra justo nec tincidunt condimentum. Praesent imperdiet turpis nisi, ac interdum arcu tristique vel. Donec maximus sollicitudin nisi, vel pretium nisl rutrum id. '
			/>
			<Fail
				title='Check B'
				text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus justo sit amet nisl mattis, nec aliquam risus scelerisque. Vestibulum eget tempor leo. Proin pharetra justo nec tincidunt condimentum. Praesent imperdiet turpis nisi, ac interdum arcu tristique vel. Donec maximus sollicitudin nisi, vel pretium nisl rutrum id. '
				error='Ut lobortis venenatis lorem nec commodo. Nullam at arcu metus. Nulla facilisi. Praesent sit amet lacus ante. Sed venenatis quam vel efficitur porttitor. Nunc ultrices massa vulputate euismod sagittis. Vivamus commodo vitae nibh convallis egestas. Proin et efficitur metus.'
			/>
			<NA
				title='Check C'
				text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus justo sit amet nisl mattis, nec aliquam risus scelerisque. Vestibulum eget tempor leo. Proin pharetra justo nec tincidunt condimentum. Praesent imperdiet turpis nisi, ac interdum arcu tristique vel. Donec maximus sollicitudin nisi, vel pretium nisl rutrum id. '
			/>
			<div style={{ margin: '2rem 0' }}>
				<LiteralResponse />
			</div>
		</div>
	)
}

const Section = ({ data }) => (
	<section className={styles.section}>
		<h3 className={styles.sectionTitle}>
			{data.title} <Icon colour={1 ? '#f00' : '#000'} weight='2' icon={ICON_TYPE.CROSS} size='36' />
		</h3>
	</section>
)
