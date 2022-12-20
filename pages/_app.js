import "../styles/globals.css";
import { Inter } from "@next/font/google";
import Layout from "../components/layout";

const inter = Inter({ subsets: ["latin"] });

function MyApp({ Component, pageProps }) {
	return (
		<main className={inter.className}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</main>
	);
}

export default MyApp;
