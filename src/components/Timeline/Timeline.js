import styles from './Timeline.module.css'
import interpolate from 'color-interpolate'
import {parseMarkdown } from '@/utilities/parseMarkdown'

const colormap = interpolate(['orange', 'red', 'purple'])

export const Timeline = ({ rows }) => (
	<div className="scrollingTableWrapper">
	<table className={styles.gantt}>
		<thead>
			<tr>
				<th colSpan='4'>Version: 1.0</th>
				<th className={styles.month} colSpan='12'>
					Month
				</th>
			</tr>
			<tr>
				<th className={styles.tranche}>Tranche</th>
				<th className={styles.deliverable}>Deliverable</th>
				<th className={styles.tasks}>Tasks</th>
				<th className={styles.effort}>Expected effort</th>
				{[...Array(12).keys()].map(n => (
					<th key={n} className={styles.month}>
						{n + 1}
					</th>
				))}
			</tr>
		</thead>
		<tbody>
			{rows.map((r, i) => (
				<Row key={i} {...r} />
			))}
		</tbody>
	</table>
	</div>
)

const Row = ({ tranche, deliverable, tasks, effort, months }) => (
	<tr>
		<th className={styles.tranche}>
			<Content {...tranche} />
		</th>
		<td className={styles.deliverable}>
			<Content {...deliverable} />
		</td>
		<td className={styles.tasks}>
			<Content {...tasks} />
		</td>
		<td className={styles.effort}>
			<Content {...effort} />
		</td>
		{[...Array(12).keys()].map(n => (
			<Month key={n} number={n} shaded={months.includes(n + 1)} colour={colormap((1.0 / 12) * n)} />
		))}
	</tr>
)

const Month = ({ number, shaded, colour }) => (
	<td style={{ '--bg': colour }} className={shaded ? styles.shaded : styles.month}>
		<span className={styles.screenreader}>
			{number + 1}: {shaded ? 'yes' : 'no'}
		</span>
	</td>
)

const Content = ({ content, hide }) => {
	const html = parseMarkdown(content).content
	return (
		<span
			dangerouslySetInnerHTML={{ __html: html }}
			className={hide ? styles.screenreader : undefined}
		/>
	)
}
