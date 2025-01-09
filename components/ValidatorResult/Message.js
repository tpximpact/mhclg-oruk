import styles from './ValidatorResult.module.css'
import Icon from '@/components/Icon'
import { STATUS } from '@/utilities/status'
import { getColourForStatus } from '@/utilities/getColourForStatus'
import { getIconForStatus } from '@/utilities/getIconForStatus'

export const Message = ({ data }) => (
	<div className={styles.message}>
		<p>
			{data.name}: <strong>{data.description}</strong>
		</p>
		<p>
			<Icon
				colour={getColourForStatus(STATUS.FAIL)}
				weight='4'
				icon={getIconForStatus(STATUS.FAIL)}
				size='18'
			/>
			&nbsp;{data.message} {data.count && data.count > 1 ? `(x${data.count} occurences)` : null}
		</p>
		{data.parameters && (
			<p>
				<code>{data.parameters}</code>
			</p>
		)}
		{data.schemaPath && (
			<p>
				Error in:
				<code> {data.schemaPath}</code>
			</p>
		)}
		{data.path && (
			<p>
				Error at:
				<code> {data.path}</code>
			</p>
		)}
	</div>
)
