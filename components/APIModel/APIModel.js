import styles from './APIModel.module.css'
// import Columns from '@/components/Columns'
// import { InPageMenu } from '@/components/InPageMenu'
import {ContentHTML } from '@/components/ContentHTML'

export const APIModel = ({
	allVersionsContent,
	data
}) => 
<>
<div className={styles.allVersionsContent}>
		<ContentHTML html={allVersionsContent} />
		</div>
		<div className={styles.thisVersionContent}>
		<ContentHTML html={data.htmlContent} />
		</div>
<div>
    <h2>TODO: API table here</h2>
    <pre>{
        JSON.stringify(data,null,2)
    }</pre>
    </div>

    </>
