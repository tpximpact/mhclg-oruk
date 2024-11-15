import { NamedMarkdownPage } from '@/components/NamedMarkdownPage'
import { PageMargin } from '@tpx/PageMargin'
import { configValueToBoolean } from '@/util/configValueToBoolean'

export const metadata = {
	title: 'Open Referral UK'
}

export default function Home() {
	// special case just for previeding tools to user group
	if (configValueToBoolean(process.env.TOOLS_ONLY)) {
		return <Tools />
	}

	return <NamedMarkdownPage name='home' />
}

const Tools = () => (
	<PageMargin>
		<section>
			<h1
				style={{
					marginBottom: '4rem'
				}}
			>
				Open Referral UK Tools (Preview)
			</h1>
			<p>
				We are developing new versions of our technical tools to accompany the revised 3.0 profile
				of Open Referral.
			</p>
			<p>
				On this demonstration site, you can access work-in-progress beta versions of the tools for
				testing.
			</p>
			<div
				style={{
					margin: '4rem'
				}}
			>
				<ul>
					<li>
						<a href='/developers/validator'>Validator</a>
					</li>
					<li>
						<a href='/developers/dashboard'>Verified feed availability</a>
					</li>
					<li>
						<a href='/community/directory'>Verified feed directory</a>
					</li>
				</ul>
			</div>
		</section>
	</PageMargin>
)
