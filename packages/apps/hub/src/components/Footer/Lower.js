import styles from './Footer.module.css'
import { PageMargin } from '@tpx/PageMargin'
import { Section } from '@tpx/Section'
import Columns from '@tpx/Columns'
import Link from 'next/link'

export const Column = ({ offsite, heading, items }) => (
	<div>
		<h3>{heading}</h3>
		<ul>
			{items.map(item => (
				<li key={item.path}>
					{offsite ? (
						<a href={item.path}>{item.title}</a>
					) : (
						<Link href={item.path}>{item.title}</Link>
					)}
				</li>
			))}
		</ul>
	</div>
)

export const Lower = () => (
	<Section className={styles.lower}>
		<PageMargin>
			<Columns layout='222'>
				<Column
					heading='About the standard'
					items={[
						{
							path: '/',
							title: 'Open Referral UK'
						},
						{
							path: '/about',
							title: 'Open data standards'
						},
						{
							path: '/about#why',
							title: 'Why use the standard'
						}
					]}
				/>
				<Column
					heading='How it works'
					items={[
						{
							path: '/how/01-steps-to-adopting-the-standard',
							title: 'Steps to adopting the standard'
						},
						{
							path: '/how/02-features-of-the-standard',
							title: 'Features of the standard'
						}
					]}
				/>
				<Column
					heading='Community'
					items={[
						{
							path: '/how/01-steps-to-adopting-the-standard',
							title: 'Organisations adopting the standard'
						},
						{
							path: 'https://forum.openreferral.org/',
							title: 'Community forum',
							offsite: true
						},
						{
							path: '/how/01-steps-to-adopting-the-standard',
							title: 'Case studies'
						},
						{
							path: 'http://eepurl.com/hshx-n',
							title: 'Sign up to our newsletter',
							offsite: true
						}
					]}
				/>
			</Columns>

			<Columns layout='411'>
				<div>Copyright © 2019–2024 Open Referral UK</div>
				<div>
					<ul>
						<li>
							<a href='https://lookerstudio.google.com/u/0/reporting/42d2977d-50c8-4ef0-b35d-b1e8f531c4a8/page/uASQC?s=o3Lxx3np8YE'>
								Website analytics
							</a>
						</li>
						<li>
							<Link href='/info/terms'>Terms &amp; conditions</Link>
						</li>
					</ul>
				</div>
				<div>
					<ul>
						<li>
							<Link href='/info/accessibility'>Accessibility statement</Link>
						</li>
						<li>
							<Link href='/info/privacy'>Privacy policy</Link>
						</li>
					</ul>
				</div>
			</Columns>
		</PageMargin>
	</Section>
)
