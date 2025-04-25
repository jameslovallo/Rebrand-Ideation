import styles from "./home-hero.module.css";
import { WordChanger } from "@/components/word-changer";

const words = [
	{ text: "performance", color: "oklch(52.7% 0.154 150.069)" },
	{ text: "weight", color: "oklch(45.7% 0.24 277.023)" },
	{ text: "sex life", color: "oklch(50.5% 0.213 27.518)" },
	{ text: "hair", color: "oklch(55.5% 0.163 48.998)" },
];

export const HomeHero = () => (
	<section>
		<h1 className={styles.heading}>
			3 simple steps to improve your <WordChanger words={words} />
		</h1>
	</section>
);
