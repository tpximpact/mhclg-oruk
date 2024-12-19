import styles from './Timeline.module.css'
import interpolate from 'color-interpolate'

const colormap = interpolate(['orange', 'red', 'purple']);

export const Timeline = ({rows}) =>
<table className={styles.gantt}>
	<thead>
		<tr>
			<th colSpan="4">Version: 1.0</th>
			<th className={styles.month} colSpan="12">Month</th>
		</tr>
		<tr>
			<th className={styles.tranche}>Tranche</th>
			<th className={styles.deliverable}>Deliverable</th>
			<th className={styles.tasks}>Tasks</th>
			<th className={styles.effort}>Expected effort</th>
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
	{
		rows.map(
			(r,i) => <Row key={i} {...r} />
		)
	}
		
	
		
	</tbody>
</table>

const Row = ({
	tranche,
	deliverable,
	tasks,
	effort,
	months
}) => <tr>
<th className = {styles.tranche}><Content {...tranche}/></th>
<td className = {styles.deliverable}><Content {...deliverable}/></td>
<td className = {styles.tasks}><Content {...tasks}/></td>
<td className = {styles.effort}><Content {...effort}/></td>
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
}}className= {shaded ? styles.shaded : styles.month}>
	<span className={styles.screenreader}>
	{ shaded ?
		(number+1) + ": yes" : (number+1) + ": no"
	}</span>
</td>

const Content =({
	content,
	hide
}) => <>
	{
		hide ? <span className={styles.screenreader}>{content}</span>
		: <span>{content}</span>
	}
</>