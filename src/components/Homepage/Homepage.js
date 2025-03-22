import styles from './Homepage.module.css'
import Link from 'next/link'
import Columns from '@/components/Columns'
import { PageMargin } from '@/components/PageMargin'
import { parseMarkdown } from '@/utilities/parseMarkdown'

export const Homepage = ({ data }) => (
	<PageMargin>
		<div className={styles.homepage}>
			<Hero {...data.hero} />
			<Boxes data={data.boxes} />
			<Conclusion {...data.conclusion} />
		</div>
	</PageMargin>
)

const Headline = ({ text }) => (
	<h3>
		<strong>{text}</strong>
	</h3>
)

const Bodycopy = ({ md, pad }) => {
	const parsed = parseMarkdown(md)
	const html = parsed.content
	return (
		<div
			style={{ padding: pad ? '2rem' : 0, fontWeight: '700' }}
			className={styles.content}
			dangerouslySetInnerHTML={{ __html: html }}
		/>
	)
}

const Hyperlink = ({ href, text }) => (
	<div className={styles.link}>
		<Link href={href}>{text}</Link>
	</div>
)

const Hero = ({ headline, content_md }) => (
	<section className={styles.hero}>
		<div>
			<Columns layout={11}>
				<div className={styles.paddedmultiline}>
					<h1>
						<strong>{headline}</strong>
					</h1>
				</div>
			</Columns>
		</div>
		<div>
			<Columns layout={11}>
				<div></div>
				<div style={{ marginRight: '2rem' }}>
					<Bodycopy pad={true} md={content_md} />
				</div>
			</Columns>
		</div>
	</section>
)

/**/

const Boxes = ({ data }) => (
	<section className={styles.boxes}>
		{data.map((box, i) => (
			<Box key={i} {...box} />
		))}
	</section>
)

const Box = ({ headline, content_md, link }) => (
	<div className={styles.box}>
		<Headline text={headline} />
		<Bodycopy md={content_md} />
		<Hyperlink {...link} />
	</div>
)

const Conclusion = ({ headline, content_md, left_col_md, right_col_md }) => (
	<section className={styles.conclusion}>
		<Headline text={headline} />
		<Bodycopy md={content_md} />
		<Columns layout={11}>
			<Bodycopy md={left_col_md} />
			<Bodycopy md={right_col_md} />
		</Columns>
	</section>
)
