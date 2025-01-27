'use server'

import { read } from '@/utilities/read'
import { parseMarkdown } from '@/utilities/parseMarkdown'
import {ContentHTML} from '@/components/ContentHTML'
import { Logo } from '@/components/Logo'
import styles from './Maintenance.module.css'

export const Maintenance = async () => {
	const contentFilePath = 'maintenance.md'
	const contentRaw = read(contentFilePath)
	const html = parseMarkdown(contentRaw).content
	
	return (
		<div className={styles.Maintenance}>
		<div>
			< Logo />
			<h1>Sorry</h1>
			<p>This site is presently <strong>offline for scheduled maintenance</strong>.</p>
			<ContentHTML html={html}/>
		</div></div>
	)
}
