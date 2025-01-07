import styles from './Method.module.css'


export const Method = ({
    data
}) => {
   return( <div className={styles.Methos}>
       GET:
        <pre>
    {JSON.stringify(data,null,2)}
            </pre>
    </div>)
}