import styles from './Endpoint.module.css'
import {Parameters} from './Parameters'
import {Method} from './Method'

export const Endpoint = ({
    data,
    path
}) => {
   return( <div className={styles.Endpoint}>
        <div className={styles.path}>{path}</div>
        {
            data.parameters && <Parameters data={data.parameters} />
}
{
            data.get && <Method data={data.get} />
}
    </div>)
}