import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { SiInstagram } from "react-icons/si";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>stuyfbla</title>
				<meta name="landing" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>stuyfbla</h1>

				<div className={styles.icons}>
					<Link className={styles.a} href="https://example.com">
						<SiInstagram className={styles.icon} size={42} />
					</Link>
				</div>

				<p className={styles.description}>blah</p>
			</main>
		</div>
	);
}
