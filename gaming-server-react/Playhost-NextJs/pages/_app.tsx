import '@fortawesome/fontawesome-free/css/all.css';
import 'font-awesome/css/font-awesome.min.css'; 
import 'elegant-icons/style.css';
import 'et-line/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/swiper-bundle.min.css';
import '../styles/animated.css';
import '../styles/aos.css';
import '../styles/coloring.css';
import '../styles/maincolor.css';
import '../styles/style.scss';
import type { AppProps } from 'next/app';
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
	useEffect(() => {
		require("../styles/bootstrap.bundle.min.js");
	}, []);
  return <Component {...pageProps} />
}
