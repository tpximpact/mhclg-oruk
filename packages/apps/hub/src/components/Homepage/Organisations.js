import { Section } from '@tpx/Section'
import Link from 'next/link'

const Org = ({ url, name, logo }) => (
	<li>
		<a href={url} target='_new'>
			<img alt={name} src={'/organisations/' + logo} />
		</a>
	</li>
)

export const Organisations = () => {
	let data = require('../../../content/home/organisations.json')
	return (
		<Section>
			<h2>Organisations using Open Referral UK</h2>
			<div>
				<ul className='numbers-container'>
					<li className='numbers'>
						<span>8</span> considering
					</li>
					<li className='numbers'>
						<span>8</span> adopting
					</li>
					<li className='numbers'>
						<span>13</span> adopted
					</li>
				</ul>
				<a href='/register' className='button button-primary'>
					Feature your organisation
				</a>
			</div>
			<ul>
				{data.map(d => (
					<Org key={d.logo} {...d} />
				))}
			</ul>
			<Link href='/community/organisations'>View all of the organisations in our community</Link>
		</Section>
	)
}
