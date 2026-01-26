import styles from './samples.module.css'
import Link from 'next/link'

const Samples = () => (
  <>
    <p>For a quick preview of the results this tool reports, choose an example:</p>
    <ol className={styles.samplesList}>
      <li>
        <Link href='/developers/validator/edcf9d03-47dd-4c46-833b-e9831d505c72?uri=https://oruk-api-2a920f51d6bb.herokuapp.com/api/mock'>
          Pass
        </Link>
      </li>
      <li>
        <Link href='/developers/validator/edcf9d03-47dd-4c46-833b-e9831d505c72?uri=https://oruk-api-2a920f51d6bb.herokuapp.com/api/mock/warn'>
          Pass (with warnings)
        </Link>
      </li>
      <li>
        <Link href='/developers/validator/edcf9d03-47dd-4c46-833b-e9831d505c72?uri=https://oruk-api-2a920f51d6bb.herokuapp.com/api/mock/fail'>
          Fail
        </Link>
      </li>
    </ol>
  </>
)

export default Samples
