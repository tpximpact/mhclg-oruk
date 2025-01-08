import styles from './Badge.module.css'


// 200 tints from tailwind
const COLOURS = {
	REQUIRED: {
		colour:'black',
		background:'#fecdd3'
	},
		UNIQUE: {
		colour:'black',
		background:'#e9d5ff'
	},
	IN_PATH : {
		colour:'black',
		background:'#bfdbfe'
	}
}

export const BadgeInPath = () => <Badge
label="in path"
{...COLOURS.IN_PATH}
	/>

export const BadgeRequired = () => <Badge
label="required"
{...COLOURS.REQUIRED}
	/>

export const BadgeUnique = () => <Badge
label="unique"
{...COLOURS.UNIQUE}
	/>
	
export const Badge = ({ label, colour, background }) => (
	<div
		style={{
			color: colour,
			background: background
		}}
		className={styles.Badge}
	>
		{label}
	</div>
)
