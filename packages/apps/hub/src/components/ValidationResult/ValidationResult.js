import styles from './ValidationResult.module.css'
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

const Validation = ({ 
	title, 
	text, 
	icon, colourClass, error, status, iconColour }) => (
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
		title: "Level 1 compliance",
		status: "pass"
	},
	{
		title: "Level 2 compliance",
		status: "fail"
	}
]




export const ValidationResult = ({ result }) => {
	return (
		<div>
			<h2 className={styles.service}><span className={styles.light}>for </span>{result.queryParams.uri}</h2>
			
			{
				dummyData.map(
					(sectionData, index) => <Section key={index} data={sectionData} />
				)
			}


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
			{/*
			<div>
				<h2>Results</h2>
				<div role='alert'>
					You have passed level 1 compliance, which means data can be read from your Service
					Directory API in a standard way.
				</div>
				<div role='alert'>
					You have passed level 2 compliance, which means your Service Directory API supports the
					more advanced features of the API standard.
				</div>
				<div>
					<div>
						<h3>Issues</h3>
						<div>
							<div>
								<strong>Unique fields with duplicate content</strong>
							</div>
							<div>
								<ul>
									<li>service_at_location.id</li>
									<li>location.id</li>
									<li>regular_schedule.id</li>
								</ul>
							</div>
						</div>
						<div>
							<div>
								<strong>Invalid format fields</strong>
							</div>
							<div>
								<ul>
									<li>service.id should be in uuid format</li>
									<li>service.url should be in url format</li>
									<li>location.id should be in uuid format</li>
								</ul>
							</div>
						</div>
						<div>
							<div>
								<strong>Warnings</strong>
							</div>
							<div>
								<ul>
									<li>
										The <code>Access-Control-Allow-Origin: *</code> response header is missing this
										limits how the API can be read.
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div>
					<h2>Statistics</h2>
					<div>
						<ul>
							<li>Count of organization: 0</li>
							<li>Count of service: 500</li>
							<li>Count of service_taxonomy: 0</li>
							<li>Count of service_at_location: 518</li>
							<li>Count of location: 518</li>
							<li>Count of phone: 0</li>
							<li>Count of contact: 560</li>
							<li>Count of physical_address: 0</li>
							<li>Count of postal_address: 0</li>
							<li>Count of regular_schedule: 1317</li>
							<li>Count of holiday_schedule: 0</li>
							<li>Count of funding: 0</li>
							<li>Count of eligibility: 0</li>
							<li>Count of service_area: 0</li>
							<li>Count of language: 0</li>
							<li>Count of accessibility_for_disabilities: 0</li>
							<li>Count of taxonomy: 0</li>
							<li>Count of cost_option: 443</li>
							<li>Count of review: 0</li>
							<li>Count of link_taxonomy: 0</li>
						</ul>
					</div>
				</div>
			</div>
			*/}
		</div>
	)
}


const Section = ({data}) => <section className={styles.section}>
		<h3 className={styles.sectionTitle}>{data.title} <Icon colour={1 ? '#f00' : '#000'} weight='2' icon={ICON_TYPE.CROSS} size='36' />
		</h3>
	</section>