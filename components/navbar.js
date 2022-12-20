import styles from "../styles/Home.module.css";
import { SiInstagram, SiApple } from "react-icons/si";
import Link from "next/link";

export default function navbar() {
	return (
		<div className={styles.container}>
			<nav className={styles.nav}>
				<ul className={styles.navul_first}>
					<li className={styles.navli}>
						<SiApple className={styles.icon} size={42} />
					</li>
				</ul>

				<ul className={styles.navul_second}>
					<li className={styles.navli}>
						<Link href="/" className={styles.a}>
							Home
						</Link>
					</li>
					<li className={styles.navli}>
						<Link href="/about" className={styles.a}>
							About
						</Link>
					</li>
					<li className={styles.navli}>
						<Link href="/photos" className={styles.a}>
							Photos
						</Link>
					</li>
					<li className={styles.navli}>
						<Link href="/meet" className={styles.a}>
							Meeting Information
						</Link>
					</li>
				</ul>

				<ul className={styles.navul_third}>
					<div className={styles.icons}>
						<Link className={styles.a} href="https://example.com">
							<SiInstagram className={styles.icon} size={42} />
						</Link>
					</div>
				</ul>
			</nav>
		</div>
	);
}
