import React from 'react'
import Columns from '@/components/Columns'
import { PageMargin } from '@/components/PageMargin'

export const metadata = {
	title: 'Repurpose one feed for different users'
}

export default function PrototypePage() {
	return (
		<PageMargin>
			<Columns layout='11' className={undefined} debug={false} supressTrailingSpace={undefined}>
				{/* Left column content */}
				<div className='space-y-8'>
					{/* Description section */}
					<div>
						<h2 className='text-3xl font-bold mb-4'>Description</h2>
						<p className='text-gray-700'>
							The same data is used in many places. Consume a single API feed of services and apply
							filters to create audience-specific views.
						</p>
						<p className='text-gray-700 mt-4'>
							This means audiences see the services relevant to them, in a format they can use,
							while the data comes from one source.
						</p>
					</div>
					{/* Examples section */}
					<div>
						<h2 className='text-3xl font-bold mb-4'>Examples</h2>
						<p className='text-gray-700'>
							SEND, Local Offer and Family Information Services directories
						</p>
						<p className='text-gray-700'>Directories maintained for:</p>
						<ul className='list-disc list-inside text-gray-700 ml-4'>
							<li>Adult Social Care</li>
							<li>Car parks</li>
							<li>Children&apos;s services</li>
							<li>Community engagement</li>
							<li>Community transport</li>
							<li>Countryside, coasts and parks</li>
							<li>Libraries, history and culture</li>
							<li>Public health</li>
							<li>Public toilets</li>
							<li>Schools and learning centres</li>
							<li>Sport and leisure</li>
							<li>Waste and recycling</li>
						</ul>
					</div>
				</div>

				{/* Right column content */}
				<div className='space-y-8'>
					{/* Benefits section */}
					<div>
						<h2 className='text-3xl font-bold mb-4'>Benefits</h2>
						<ul className='list-disc list-inside text-gray-700'>
							<li>Reduce your costs maintaining data</li>
							<li>
								Reused data is checked more often, improving it&apos;s accuracy and reliability
							</li>
							<li>Easier for service providers to update details in one place</li>
							<li>Directs people to better tools</li>
						</ul>
					</div>
					{/* Outcomes section */}
					<div>
						<h2 className='text-3xl font-bold mb-4'>Outcomes</h2>
						<ul className='list-disc list-inside text-gray-700'>
							<li>Lower data maintenance costs</li>
							<li>Better quality data</li>
							<li>Better targeting of services</li>
						</ul>
					</div>
				</div>
			</Columns>
		</PageMargin>
	)
}

