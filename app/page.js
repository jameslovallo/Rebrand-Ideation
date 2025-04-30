import styles from "./page.module.css";
import { HomeHero } from "@/features/home-hero";
import { HomeCategories } from "@/features/home-categories";
import { HomeSteps } from "@/features/home-steps";
import { HomeTreatments } from "@/features/home-treatments";
import { HomeFaq } from "@/features/home-faq";
import { HomeReviews } from "@/features/home-reviews";
import { BlurButton, FeaturedStory, Grid } from "@/components";

export default function Home() {
	return (
		<main className={styles.main}>
			<HomeHero>
				<h2>Better health starts here.</h2>
				<p>
					Board-certified doctors. Licensed in all 50 states. Shipped to your
					door.
				</p>
			</HomeHero>

			<section>
				<h2>How can we help you feel better?</h2>
				<p>
					At Transcend, we offer world-class therapies for a wide range of
					health and fitness needs.
				</p>
				<HomeCategories />
			</section>

			{/* <section>
				<h2>Interactive content</h2>
				<p>
					This would be customized based on the referral source, or past
					behavior, and feature interactive components aligned with a specific
					treatment (see Hims or Hers). Interacting with these elements would
					lead users to the intake form.
				</p>
				<PlaceholderBox aspectRatio="21/9">Interactive content</PlaceholderBox>
			</section> */}

			<section>
				<h2>Recommended for you</h2>
				<HomeTreatments />
				<br />
				<BlurButton variant="filled">View all</BlurButton>
			</section>

			<section>
				<h2>Here's how it works.</h2>
				<HomeSteps />
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
							Tailored to you and at your pace. Fully customized to your unique
							health and fitness needs. Our wellness team provides personalized
							guidance to help you make your health and fitness goals a reality.
						</p>
						<BlurButton variant="filled">Subscribe</BlurButton>
					</div>
				</Grid>
			</section>

			{/* <section>
				<h2>Check out our podcast</h2>
				<HomePodcast />
			</section> */}

			<section>
				<h2>See what our customers are saying</h2>
				<HomeReviews />
			</section>

			<section>
				<h2>Featured stories</h2>
				<Grid scale="400px" gap="2rem">
					<FeaturedStory />
					<FeaturedStory />
				</Grid>
			</section>

			<section>
				<h2>Frequently asked questions</h2>
				<HomeFaq />
			</section>
		</main>
	);
}
