import styles from "./page.module.css";
import { HomeHero } from "@/features/home-hero";
import { HomeCategories } from "@/features/home-categories";
import { HomeSteps } from "@/features/home-steps";
import { HomePodcast } from "@/features/home-podcast";
import { HomeFaq } from "@/features/home-faq";
import { BlurButton, Grid, PlaceholderBox } from "@/components";

export default function Home() {
	return (
		<main className={styles.main}>
			<HomeHero />

			<section>
				<h2>Are you ready to change your life?</h2>
				<HomeCategories />
			</section>

			<section>
				<h2>Here's how it works.</h2>
				<HomeSteps />
			</section>

			<section>
				<h2>Interactive content based on referral source</h2>
				<p>
					Fugiat consequat aute sint excepteur aliquip tempor occaecat.
					Consequat veniam non cupidatat eiusmod qui nostrud do nisi ea deserunt
					laborum. Consequat eu cupidatat nostrud non cillum ad irure consequat
					aute ullamco. Voluptate nostrud pariatur cillum exercitation laborum
					quis.
				</p>
			</section>

			<section>
				<h2>Featured treatments</h2>
				<Grid scale="200px" gap="1rem">
					<PlaceholderBox />
					<PlaceholderBox />
					<PlaceholderBox />
					<PlaceholderBox />
				</Grid>
			</section>

			<section>
				<Grid scale="400px" gap="2rem">
					<div>
						<h2>Subscribe and save</h2>
						<p>
							Fugiat consequat aute sint excepteur aliquip tempor occaecat.
							Consequat veniam non cupidatat eiusmod qui nostrud do nisi ea
							deserunt laborum. Consequat eu cupidatat nostrud non cillum ad
							irure consequat aute ullamco. Voluptate nostrud pariatur cillum
							exercitation laborum quis.
						</p>
						<BlurButton variant="filled">Subscribe</BlurButton>
					</div>
					<div>
						<h2>Concierge service</h2>
						<p>
							Fugiat consequat aute sint excepteur aliquip tempor occaecat.
							Consequat veniam non cupidatat eiusmod qui nostrud do nisi ea
							deserunt laborum. Consequat eu cupidatat nostrud non cillum ad
							irure consequat aute ullamco. Voluptate nostrud pariatur cillum
							exercitation laborum quis.
						</p>
						<BlurButton variant="filled">Subscribe</BlurButton>
					</div>
				</Grid>
			</section>

			<section>
				<h2>Check out our podcast</h2>
				<HomePodcast />
			</section>

			<section>
				<h2>Frequently asked questions</h2>
				<HomeFaq />
			</section>
		</main>
	);
}
