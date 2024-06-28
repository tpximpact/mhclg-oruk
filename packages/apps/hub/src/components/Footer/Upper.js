import styles from './Footer.module.css'
import { PageMargin } from '@tpx/PageMargin'
import { Section } from '@tpx/Section'
import Columns from '@tpx/Columns'
import { Logo } from '@/components/Logo'
import Link from 'next/link'

const Stakeholder = ({ url, name, logo }) => (
	<li>
		<a href={url} target='_new'>
			<img alt={name} src={'/organisations/' + logo} />
		</a>
	</li>
)

export const Upper = () => {
	let stakeholders = require('../../../content/home/stakeholders.json')
	return (
		<Section className={styles.upper}>
			<PageMargin>
				<div>
					<Link href='/'>
						<Logo />
					</Link>
				</div>
				<Columns layout='222'>
					<div>
						<h3>Our Stakeholders</h3>
						<ul>
							{stakeholders.map(d => (
								<Stakeholder key={d.logo} {...d} />
							))}
						</ul>
					</div>
					<div>
						<h3>Get Involved</h3>
						<p>
							<Link href='/community/join'>Join our community</Link>
						</p>
					</div>
					<div>
						<h3>Contact us</h3>
						<p>
							<Link href='/contact'>Support on adopting the standard</Link>
						</p>
						<h3>Technical feedback and support</h3>
						<p>
							<a href='https://github.com/OpenReferralUK/human-services'>Github</a>
						</p>
					</div>
				</Columns>
			</PageMargin>
		</Section>
	)
}
