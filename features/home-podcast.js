import styles from "./home-podcast.module.css";
import Image from "next/image";
import { BlurButton } from "@/components";

export const HomePodcast = () => (
	<div className={styles.podcast}>
		<Image
			src="/photography/podcast.png"
			alt="podcast"
			width={400}
			height={400}
		/>
		<div>
			<h3>A sweet podcast episode title</h3>
			<p>An equally good episode description</p>
			<div className={styles.buttons}>
				<BlurButton variant="media">
					<svg viewBox="0 0 24 24">
						<path d="M8,5.14V19.14L19,12.14L8,5.14Z" />
					</svg>
				</BlurButton>
				<BlurButton variant="text">Listen on Spotify</BlurButton>
				<BlurButton variant="text">Listen on Apple Podcasts</BlurButton>
			</div>
		</div>
	</div>
);
