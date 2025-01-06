'use client'
import dynamic from 'next/dynamic'
const JSONLiteral = dynamic(() => import('../JSONLiteral'))

import styles from './OpenAPIModel.module.css'
// import Columns from '@/components/Columns'
// import { InPageMenu } from '@/components/InPageMenu'
import {ContentHTML } from '@/components/ContentHTML'

export const OpenAPIModel = ({
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

<JSONLiteral data={data.rootSpec.parsed} />
   

    </>
