import { PageMargin } from '@/components/PageMargin'
import styles from './gantt.module.css'
import interpolate from 'color-interpolate'


export default function Page() {
	return (
		<PageMargin>
		<h1>Implementation Plan timeline</h1>
{/*<section><p>This table outlines the recommended timescales, suggesting the proof of concept should be completed within 12 months to maintain the potential partners/beneficiaries interest. It focuses on deliverables and tasks, which will need full consideration by the council.</p></section>*/}
			<Gantt />
		</PageMargin>
	)
}

export const metadata = {
	title: 'News from ORUK'
}

const colormap = interpolate(['orange', 'red', 'purple']);

const Gantt = () =>
<table className={styles.gantt}>
	<thead>
		<tr>
			<th colSpan="4">
			Version: 1.0
			</th>
			<th colSpan="12">Month</th>
		</tr>
		<tr>
			<th className = {styles.tranche}>Tranche</th>
			<th className = {styles.deliverable}>Deliverable</th>
			<th className = {styles.tasks}>Tasks</th>
			<th className = {styles.effort}>Expected effort</th>
		{/* */}
		<th className={styles.month}>1</th>
			<th className={styles.month}>2</th>
			<th className={styles.month}>3</th>
			<th className={styles.month}>4</th>
			<th className={styles.month}>5</th>
			<th className={styles.month}>6</th>
			<th className={styles.month}>7</th>
			<th className={styles.month}>8</th>
			<th className={styles.month}>9</th>
			<th className={styles.month}>10</th>
			<th className={styles.month}>11</th>
			<th className={styles.month}>12</th>
		</tr>
	</thead>
	<tbody>
		<Row 
			tranche="Leadership"
			trancheSpan = "2"
			deliverable="Discovery landscape"
	tasks="Interviews/workshops with stakeholders to understand current processes, software and resources."
	effort="PM plus a facilitator if required will spend up to 20 days finding out and mapping current efforts"
	months={[1]}
		/>
		<Row 
			deliverable="Agree the scope"
	tasks="Agree who & which software will be involved in collection, aggregation and consumption."
	effort="PM will make recommendation to project board to make a decision"
	months={[1]}
		/>
		
			<Row 
			tranche="Collect & manage data"
			deliverable="Process of collecting data"
	tasks="Map out the process to be used for collecting data into a single repository"
	effort="Service provider/collector will submit their data in 1 day.
Collectors will continue to work in the scope"
	months={[2,3,4,5,6,7,8,9,10,11,12]}
		/>
	</tbody>
</table>

const Row = ({
	tranche,
	trancheSpan,
	deliverable,
	tasks,
	effort,
	months
}) => <tr>
{tranche && <th rowSpan={trancheSpan} className = {styles.tranche}>{tranche}</th>}
<td className = {styles.deliverable}>{deliverable}</td>
<td className = {styles.tasks}>{tasks}</td>
<td className = {styles.effort}>{effort}</td>
{
	[...Array(12).keys()].map(
		n => <Month colour={colormap((1.0/12)*n)}
		key={n} number={n} shaded={months.includes(n+1)}/>
	)
}
</tr>

const Month = ({
	number,
	shaded,
	colour
}) => <td style={{
	"--bg": colour
}}className= {shaded ? styles.shaded : null}>
	<span className={styles.screenreader}>
	{ shaded ?
		(number+1) + ": yes" : (number+1) + ": no"
	}</span>
</td>
