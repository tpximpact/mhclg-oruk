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

const Headline = ({ text }) => <h3>{text}</h3>

const Bodycopy = ({ md }) => {
	const parsed = parseMarkdown(md)
	const html = parsed.content
	return <div className={styles.content} dangerouslySetInnerHTML={{ __html: html }} />
}

const Hyperlink = ({ href, text }) => (
	<div className={styles.link}>
		<Link href={href}>{text}</Link>
	</div>
)

const Hero = ({ headline, content_md }) => (
	<section className={styles.hero}>
		<Headline text={headline} />
		<Columns layout={11}>
			<Bodycopy md={content_md} />
			<div className={styles.Logo} />
		</Columns>
	</section>
)

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
