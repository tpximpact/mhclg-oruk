import { PageMargin } from '@/components/PageMargin'

export const NoWarranty = () => (
	<PageMargin>
		<div
			style={{
				borderColor: 'var(--VersionedDocumentation-legacy-border-color)',
				background: 'var(--VersionedDocumentation-legacy-background)',
				color: 'var(--VersionedDocumentation-legacy-color)',
				padding: '2rem',
				fontWeight: '900'
			}}
		>
			Note: This is pre-release software. While we believe it to be correct to the best of our
			knowledge, we make no warraties about its accuracy or quality. Please use with discretion. If
			you would like to report bugs please do so by adding an issue at
			https://github.com/tpximpact/mhclg-oruk/issues if you have permissions or by emailing us.
			Thanks! - ORUK team
		</div>
	</PageMargin>
)
