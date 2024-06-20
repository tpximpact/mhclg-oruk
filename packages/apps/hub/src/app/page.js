import styles from "./page.module.css";
import Link from 'next/link'
import {LoremIpsum} from "@tpx/LoremIpsum"

export default function Home() {
  return (
    <main>
		<h1>Open Referral UK</h1>
		<LoremIpsum/>
		<Link href="/dashboard">Dashboard</Link>
		<Link href="/validator">Validator</Link>
    </main>
  );
}
