import { PageMargin } from '@tpx/PageMargin'
import Columns from '@tpx/Columns'
import { Organisations } from './Organisations'
import styles from './Homepage.module.css'

const Section = ({ children }) => <section className={styles.section}>{children}</section>

const Transcript = () => (
	<div>
		<p>Community services are used by everyone.</p>
		<p>They are there to provide vital support and resources, and to improve our wellbeing.</p>
		<p>People need different kinds of help at different moments in their lives.</p>
		<p>A single organisation can’t help everyone.</p>
		<p>Instead each provides certain kinds of services to certain kinds of people.</p>
		<p>
			People don’t always know where to go for the right kind of help. All too often, people fall
			through the cracks.
		</p>
		<p>
			So councils and other public and voluntary sector organisations keep directories with
			information about what services are available and refer people to the right place.
		</p>
		<p>These referral providers help people work out where to go to get help.</p>
		<p>They give out printed resources, run call centres and websites, and make referrals.</p>
		<p>Keeping track of this information is hard work.</p>
		<p>Today, each referral provider does this themself.</p>
		<p>They constantly collect data about services, and manage it in their own directories.</p>
		<p>There are hundreds of directories in the UK - sometimes as many as 10 in a local area</p>
		<p>
			They’re all trying to collect similar data at the same time in isolation from one another.
		</p>
		<p>That’s a massive duplication of effort and cost.</p>
		<p>
			This is a big problem for service commissioners at a local and national level, who need to
			understand what services already exist and how we might better meet people's needs.
		</p>
		<p>
			And it's also a big problem for people in the NHS who need trustworthy data for social
			prescribing.
		</p>
		<p>The good news is, we already have a solution for this.</p>
		<p>
			With Open Referral UK, we are building a future where it’s easy for anyone to find information
			about the services that are available to people in need in whatever way works best for them.
		</p>
		<p>
			The Open Referral UK data standard defines a language that any service directory can use to
			‘talk’ to any other service directory so they can share data with each other, in real-time.
		</p>
		<p>This is called ‘interoperability’.</p>
		<p>
			That means referral providers can work together to share data about community services
			regardless of which information system they happen to use.
		</p>
		<p>
			This helps people in different contexts, using different tools, to see the same information.
		</p>
		<p>We all benefit when distributed systems share open standards.</p>
		<p>After all, that’s what made the internet into the World Wide Web.</p>
		<p>
			This will make it easier for people to find services that help them live happy, healthy lives.
		</p>
		<p>
			And it will even be easier for researchers, policy makers, funders and others in the public
			sector to understand what’s going on out there, which will help us all make smarter decisions
			that improve the health of our communities.
		</p>
		<p>Open Referral UK is helping communities build this future.</p>
		<p>You can join us.</p>{' '}
	</div>
)

const Hero = () => (
	<Section>
		<h1>Making it easy to publish, find and use community services data</h1>
		<p>
			Open Referral UK is an open data standard. A standard establishes a consistent way of
			publishing and describing information. This means people can get the information they need
			more quickly and easily, and helps to create joined up local communities and services.
		</p>
	</Section>
)

const VideoRow = () => (
	<Section>
		<Columns layout={33}>
			<div>
				<h2>Open data standards for community services</h2>
				<p>
					Local government organisations and services collect large amounts of information and data.
					This is presented in different formats and often collected multiple times and in
					inconsistent ways.
				</p>
				<p>
					Adopting an{' '}
					<a href='https://openreferraluk.org/about-standard#section-2-heading'>
						open data standard
					</a>{' '}
					helps to solve this problem.
				</p>
			</div>
			<div>
				<iframe
					id='videobox'
					height='250'
					src='https://www.youtube.com/embed/dn1ryloOLvk'
					title='YouTube video player'
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
					allowfullscreen='true'
				></iframe>
				<details>
					<summary>View the full video transcript including visual description</summary>
					<Transcript />
				</details>
			</div>
		</Columns>
	</Section>
)

const CaseStudiesSignpost = () => (
	<p id='case-studies' className='card-content'>
		<a href='/community/case-studies'>Read our case studies</a>
	</p>
)

const Quote = () => (
	<section>
		<figure>
			<blockquote>
				The services out there can change people&apos; lives. But if we don&apos;t have accurate and
				reliable information, then we&apos;re working with one hand tied behind our back. We have a
				limited chance of helping them.
			</blockquote>
			<figcaption>– Key worker in Blackburn</figcaption>
		</figure>
	</section>
)

const Benefits = () => (
	<section className='format list-items-boxed benefits'>
		<h3>What are the benefits?</h3>
		<p>
			Adopting the Open Referral UK standard for community services data can enable the following
			benefits for your organisation, area and service users:
		</p>
		<ul>
			<li>Easy to access, accurate and reliable information on services</li>
			<li>
				Partner with and share information and knowledge with other local authorities, organisations
				and stakeholders
			</li>
			<li>
				Avoid duplication of information and &apos;reinventing the wheel for every directory&apos;
			</li>
			<li>
				Give users of the service what they need and not limited to one organisation - more holistic
				approach rather than working in silos
			</li>
			<li>
				Saves money and resources by capturing data once and means frontline workers and advocates
				have the necessary information at their fingertips
			</li>
		</ul>
		<p>
			See how the standard helps you to realise these benefits,
			<a href='/how-it-works/standard-features'>features of the standard</a>
		</p>
	</section>
)

const Trailinglinks = () => (
	<>
		{' '}
		<hr />
		<div>
			<ul className='listnostyle readlinkscard'>
				<li>
					<a href='/how-it-works'>Find out more about how the standard works</a>
				</li>
				<li>
					<a href='https://developers.openreferraluk.org/'>
						Information on data structure and tools for the standard.{' '}
					</a>
				</li>
			</ul>
		</div>
	</>
)

export const Homepage = () => (
	<main>
		<PageMargin>
			<Hero />
			<VideoRow />
			<CaseStudiesSignpost />
			<Quote />
			<Benefits />
			<Organisations />
			<Trailinglinks />
		</PageMargin>
	</main>
)
