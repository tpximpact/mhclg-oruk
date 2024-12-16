import styles from './ValidatorResult.module.css'
import {Test} from './Test'

export const Group = ({data }) => <div className={styles.group}>{data.map((test, i) => (
    <Test key={i} data={test} />
))}</div>
