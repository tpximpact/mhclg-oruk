import styles from './VersionedDocumentation.module.css'

export const VersionedBanner = ({ allVersions, version, setVersion }) => {
	const currentVersion = allVersions[0]
	const isCurrent = version === currentVersion

	const colourClass = isCurrent ? styles.current : styles.legacy
	return (
		<div className={`${styles.box} ${colourClass}`}>
			<div className={styles.tab}>
				<div className={styles.version}>
					<select
						id='picker'
						onChange={({ target: { value } }) => setVersion(value)}
						value={version}
					>
						{allVersions.map(value => (
							<option key={value} value={value}>
								{value}
							</option>
						))}
					</select>
				</div>
				<div>
					<label htmlFor='picker'>{isCurrent ? 'Current' : 'Legacy'} version</label>
				</div>
			</div>
			<div className={styles.banner}>
				<p>You can choose which version of the standard this page describes.</p>
				{isCurrent ? (
					<p style={{ fontWeight: 900 }}>
						This is the latest version of the standard and is recommended for all users.
					</p>
				) : (
					<>
						<p style={{ fontWeight: 900, color: 'white' }}>
							This is an archived obsolete version of the standard.
						</p>
						<p>
							For new projects, we strongly recommend you to use{' '}
							<a
								href='#'
								onClick={() => {
									setVersion(currentVersion)
								}}
								style={{ fontWeight: 900, color: 'white' }}
							>
								the latest version{' '}
							</a>
							instead
						</p>
					</>
				)}
			</div>
		</div>
	)
}
