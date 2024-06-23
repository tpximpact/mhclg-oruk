import styles from './Menu.module.css'
import Link from 'next/link'
import {  getPath,allFilesOfType } from '@/util/content'
import { FILE_EXTENSION } from '@/util/markdown'


const fileNameToTarget = fileName => fileName.split('.')[0]
    const fileNameToText = fileName => {
       let result =  fileName.split('.')[0]
       const regex = /^[0-9]*/i;
       result = result.replace(regex, '')
       result = result.replace('-', '')
       return result
    }


export const Menu = () => {


let i =  allFilesOfType(getPath('how'),FILE_EXTENSION).filter(f=>f!=="index.md").map(
item =>({
target:fileNameToTarget(item),
text: fileNameToText(item)
    }
    )
)

	const items = [
		{
			target: '01-steps-to-adopting-the-standard',
			text: 'Steps to adopting the standard'
		},
		{
			target: '01-features-of-the-standard',
			text: 'Features of  the standard'
		},
		{
			target: '/tools/dashhboard',
			text: 'Data feed dahboard'
		}
	]
	return (
		<main>
            {
JSON.stringify(i)
            }
			{items.map(item => (
				<MenuItem key={item.target} text={item.text} target={item.target} />
			))}
		</main>
	)
}

const MenuItem = props => (
	<Link className={styles.menuItem} href={props.target}>
{props.text}
	</Link>
)
