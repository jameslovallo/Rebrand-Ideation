import styles from "./home-hero.module.css";
import { BlurButton, WordChanger } from "@/components";
import Image from "next/image";
import categories from "@/data/categories";

const words = Object.entries(categories).map((entry) => ({
	color: entry[1].strong,
	text: entry[1].displayName.toLowerCase(),
}));

export const HomeHero = ({ children }) => (
	<section className={styles.hero}>
		<Image
			src="/photography/home-hero.jpg"
			alt="hero"
			width={1200}
			height={800}
		/>
		<div>
			<h1 className={styles.heading}>
				3 simple steps to <br /> improve your <WordChanger words={words} />
			</h1>
			{children}
			<BlurButton variant="filled">Schedule a consult</BlurButton>
		</div>
	</section>
);
