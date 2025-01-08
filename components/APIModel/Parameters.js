import styles from './Parameters.module.css'

export const Parameters = ({
    data
}) => {
   return( <div className={styles.Parameters}>
       Parameters:
        <pre>
    {JSON.stringify(data,null,2)}
            </pre>
    </div>)
}