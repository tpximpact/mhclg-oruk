import styles from './Responses.module.css'


export const Responses = ({
    data
}) => {
   return( <div className={styles.Responses}>
       Responses:
        <pre>
    {JSON.stringify(data,null,2)}
            </pre>
    </div>)
}