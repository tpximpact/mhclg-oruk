import styles from './Changelog.module.css'
import Columns from '@tpx/Columns'

export const Changelog = ({ versions }) => (
	<>
		{versions.map((v, i) => (
			<Version key={i} data={v} />
		))}
	</>
)

export const Version = ({ data }) => (
	<section className={styles.version}>
		<h2 className={styles.versionTitle}>
			Changes in version <strong>v{data.versionNumber}</strong>
		</h2>
		{data.fields.map((f, i) => (
			<Field key={i} data={f} />
		))}
	</section>
)

export const Field = ({ data }) => (
	<div className={styles.field}>
		<h3 className={styles.fieldTitle}>{data.title}</h3>
		<Columns layout='111'>
			<Column title='added' data={data.added} />
			<Column title='removed' data={data.removed} />

			{data.replaced ? (
				<Column title='replaced' data={data.replaced} />
			) : (
				<Column title='renamed' data={data.renamed} />
			)}
		</Columns>
	</div>
)

export const Column = ({ title, data }) => (
	<div className={styles.column}>
		{data && data.length > 0 && (
			<>
				<h4 className={styles.columnTitle}>{title}</h4>
				<ol>
					{data.map((keyword, i) => (
						<Keyword
							{...keyword}
							key={i}
							danger={title === 'removed' || title === 'renamed' || title === 'replaced'}
						/>
					))}
				</ol>
			</>
		)}
	</div>
)

export const Keyword = ({ name, isCollection, renamed, replacedWith, danger, attrs }) => (
	<li className={styles.keyword}>
		<code className={danger ? styles.danger : null}>{name}</code>{' '}
		{replacedWith && (
			<>
				<span className={styles.to}>replaced by</span> <code>{replacedWith}</code>
			</>
		)}
		{renamed && (
			<>
				<span className={styles.to}>to</span> <code>{renamed}</code>
			</>
		)}{' '}
		{isCollection && <span className={styles.collection}>(collection)</span>}
		{attrs && (
			<ol className={styles.attributes}>
				{attrs.map((attr, i) => (
					<Keyword key={i} {...attr} />
				))}
			</ol>
		)}
	</li>
)
