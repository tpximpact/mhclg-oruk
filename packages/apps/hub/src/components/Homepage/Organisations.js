import { Noto_Sans_Meetei_Mayek } from 'next/font/google'

const data = [
	{
		name: 'Buckinghamshire Council',
		url: 'https://www.buckinghamshire.gov.uk/',
		logo: 'bc.png'
	},
	{
		name: 'TPXImpact',
		url: 'https://tpximpact.com/',
		logo: 'tpx.png'
	}
]

const Org = ({ url, name, logo }) => (
	<li>
		<a href={url} target='_new'>
			<img alt={name} src={'/organisations/' + logo} />
		</a>
	</li>
)

export const Organisations = () => (
	<div className='who who--homepage'>
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
		{/*<div>
			<ul className='home-card-content'>
				<li className='img'>
					<a
						href='https://www.buckinghamshire.gov.uk/'
						className='link-with-image'
						aria-label='Buckinghamshire Council'
					>
						<div className=''>
							<div className='CompanyLogo' title=''></div>
						</div>
					</a>
				</li>
				<li className='img'>
					<a href='https://tpximpact.com/' className='link-with-image' aria-label='TPXimpact'>
						<div className=''>
							<div className='CompanyLogo' title=''></div>
						</div>
					</a>
				</li>
				<li className='img'>
					<a
						href='https://www.blackburn.gov.uk/'
						className='link-with-image'
						aria-label='Blackburn with Darwen Borough Council'
					>
						<div className=''>
							<div className='CompanyLogo' title=''></div>
						</div>
					</a>
				</li>
				<li className='img'>
					<a
						href='https://www.elmbridge.gov.uk/'
						className='link-with-image'
						aria-label='Elmbridge Borough Council'
					>
						<div className=''>
							<div className='CompanyLogo' title=''></div>
						</div>
					</a>
				</li>
				<li className='img'>
					<a href='https://www.placecube.com/' className='link-with-image' aria-label='Placecube'>
						<div className=''>
							<div className='CompanyLogo' title=''></div>
						</div>
					</a>
				</li>
				<li className='img'>
					<a
						href='http://www.peopleplaceslives.co.uk/'
						className='link-with-image'
						aria-label='People Places Lives'
					>
						<div className=''>
							<div className='CompanyLogo' title=''></div>
						</div>
					</a>
				</li>
				<li className='img'>
					<a
						href='https://www.local.gov.uk/'
						className='link-with-image'
						aria-label='Local Government Association'
					>
						<div className=''>
							<div className='CompanyLogo' title=''></div>
						</div>
					</a>
				</li>
				<li className='img'>
					<a
						href='https://localdigital.gov.uk/'
						className='link-with-image'
						aria-label='Department for Levelling Up, Housing and Communities'
					>
						<div className=''>
							<div className='CompanyLogo' title=''></div>
						</div>
					</a>
				</li>
				<li className='img'>
					<a
						href='https://www.wellaware.org.uk'
						className='link-with-image'
						aria-label='Well Aware'
					>
						<div className=''>
							<div className='CompanyLogo' title=''></div>
						</div>
					</a>
				</li>
				<li className='img'>
					<a href='https://www.vidavia.com/' className='link-with-image' aria-label='VidaVia'>
						<div className=''>
							<div className='CompanyLogo' title=''></div>
						</div>
					</a>
				</li>
				<li className='img'>
					<a
						href='http://www.hull.gov.uk/'
						className='link-with-image'
						aria-label='Hull City Council'
					>
						<div className=''>
							<div className='CompanyLogo' title=''></div>
						</div>
					</a>
				</li>

				<li className='img'>
					<a
						href='https://www.healthierlsc.co.uk/'
						className='link-with-image'
						aria-label='Healthier Lancashire and South Cumbria'
					>
						<div className=''>
							<div className='CompanyLogo' title=''></div>
						</div>
					</a>
				</li>
				<li className='img'>
					<a href='https://www.docandtee.com/' className='link-with-image' aria-label='Doc and Tee'>
						<div className=''>
							<div className='CompanyLogo' title=''></div>
						</div>
					</a>
				</li>
				<li className='img'>
					<a
						href='https://www.bristol.gov.uk/'
						className='link-with-image'
						aria-label='Bristol City Council'
					>
						<div className=''>
							<div className='CompanyLogo' title=''></div>
						</div>
					</a>
				</li>
				<li className='img'>
					<a
						href='https://digitalcoproduction.co.uk'
						className='link-with-image'
						aria-label='Digital CoProduction'
					>
						<div className=''>
							<div className='CompanyLogo' title=''></div>
						</div>
					</a>
				</li>
				<li className='img'>
					<a href='https://www.northlincs.gov.uk/' className='link-with-image' aria-label=''>
						<div className=''>
							<div className='CompanyLogo' title=''></div>
						</div>
					</a>
				</li>
			</ul>
		</div>*/}
		<a className='nav-link' href='/community/standard-community'>
			View all of the organisations in our community
		</a>
	</div>
)
