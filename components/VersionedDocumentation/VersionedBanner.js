import styles from './VersionedDocumentation.module.css'
import Columns from '@/components/Columns'

const Picker = ({
	setVersion,
	isCurrent,
	allVersions,
	version
}) => <div >
<select
			id='picker'
			onChange={({ target: { value } }) => setVersion(value)}
			value={version}
		>
			{allVersions.map(value => (
				<option key={value} value={value}>
					v{value}
				</option>
			))}
		</select>
		<label htmlFor='picker'>{isCurrent ? 'Current' : 'Legacy'} version</label>

</div>

const Message = ({
	setVersion,
	isCurrent,
	currentVersion
}) => <div className={styles.banner}>
{isCurrent ? (
	<>
	<p>You can choose which version of the standard this page describes.</p>

	<p style={{ fontWeight: 900 }}>
		This is the latest version of the standard and is recommended for all users.
	</p>
	</>
) : (
	<>
		<p style={{ fontWeight: 900 }}>
			This is an archived obsolete version of the standard.
		</p>
		<p>
			For new projects, we strongly recommend you to use{' '}
			<a
				href='#'
				onClick={() => {
					setVersion(currentVersion)
				}}
				style={{ fontWeight: 900, }}
			>
				the latest version{' '}
			</a>
			instead
		</p>
	</>
)}
</div>

export const VersionedBanner = ({ 
	allVersions, 
	version, 
	setVersion
}) => {
	const currentVersion = allVersions[0]
	const isCurrent = version === currentVersion

	const colourClass = isCurrent ? styles.current : styles.legacy
	return (
		<div className={`${styles.box} ${colourClass}`}>
			<Columns layout='31'>
			<Message 
			currentVersion={currentVersion}
				setVersion={setVersion} 
				isCurrent={isCurrent}/>			
			<Picker 
				version={version} 
				setVersion={setVersion}  
				isCurrent={isCurrent}
				allVersions={allVersions}/>
			
			
		</Columns>
		
		</div>
	)
}
