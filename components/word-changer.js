"use client";

import styles from "./word-changer.module.css";
import { useEffect, useRef } from "react";

export const WordChanger = ({ words }) => {
	const wordRef = useRef();

	useEffect(() => {
		const wordWrapper = wordRef.current;
		const interval = setInterval(() => {
			const words = wordWrapper.children;
			wordWrapper.scrollTo({
				top: words[1].offsetTop,
				behavior: "smooth",
			});
			setTimeout(() => {
				wordWrapper.appendChild(words[0]);
			}, 500);
		}, 3000);
		return () => clearInterval(interval);
	}, []);

	return (
		<div ref={wordRef} className={styles.wrapper}>
			{words.map(({ text, color }) => (
				<span key={text} className={styles.word} style={{ color }}>
					{text}
				</span>
			))}
		</div>
	);
};
