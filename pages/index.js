import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { Inter } from "@next/font/google";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import i1 from "../public/images/i1.png";
import i2 from "../public/images/i2.png";
import i3 from "../public/images/i3.png";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>stuyfbla</title>
				<meta name="landing" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<div className={styles.banner}>
					<h1 className={styles.title}>stuyfbla</h1>
				</div>

				<Lightbox
					open={open}
					close={() => setOpen(false)}
					slides={[i1, i2, i3]}
					render={{
						slide: (image, offset, rect) => {
							const width = Math.round(
								Math.min(
									rect.width,
									(rect.height / image.height) * image.width
								)
							);
							const height = Math.round(
								Math.min(
									rect.height,
									(rect.width / image.width) * image.height
								)
							);

							return (
								<div
									style={{
										position: "relative",
										width,
										height,
									}}
								>
									<Image
										fill
										src={image}
										loading="eager"
										placeholder="blur"
										alt={"alt" in image ? image.alt : ""}
										sizes={
											typeof window !== "undefined"
												? `${Math.ceil(
														(width /
															window.innerWidth) *
															100
												  )}vw`
												: `${width}px`
										}
									/>
								</div>
							);
						},
					}}
				/>
			</main>
		</div>
	);
}
