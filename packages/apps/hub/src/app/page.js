import styles from "./page.module.css";
import Link from 'next/link'
import {LoremIpsum} from "@tpx/LoremIpsum"

export default function Home() {
  return (
    <main className={styles.main}>
   homepage
   <LoremIpsum/>
   <Link href="/dash">Dashboard</Link>
   <Link href="/validator">Validator</Link>
    </main>
  );
}
