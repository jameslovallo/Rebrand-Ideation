import { BlurButton, CategoryCard, Grid } from "@/components";

export const HomeCategories = () => (
	<>
		<Grid>
			<CategoryCard category="performance">
				<p>
					Level up your{" "}
					<span style={{ color: "var(--category-strong)" }}>performance</span>
				</p>
			</CategoryCard>
			<CategoryCard category="weight">
				<p>
					Lower your{" "}
					<span style={{ color: "var(--category-strong)" }}>weight</span>
				</p>
			</CategoryCard>
			<CategoryCard category="sex">
				<p>
					Have better, longer{" "}
					<span style={{ color: "var(--category-strong)" }}>sex</span>
				</p>
			</CategoryCard>
			<CategoryCard category="hair">
				<p>
					Grow thicker{" "}
					<span style={{ color: "var(--category-strong)" }}>hair</span>
				</p>
			</CategoryCard>
			<CategoryCard category="hormones">
				<p>
					Regulate your{" "}
					<span style={{ color: "var(--category-strong)" }}>hormones</span>
				</p>
			</CategoryCard>
			<CategoryCard category="sleep">
				<p>
					Develop deeper{" "}
					<span style={{ color: "var(--category-strong)" }}>sleep</span>
				</p>
			</CategoryCard>
			<CategoryCard category="skin">
				<p>
					Get healthy, clear{" "}
					<span style={{ color: "var(--category-strong)" }}>skin</span>
				</p>
			</CategoryCard>
			<CategoryCard category="longevity">
				<p>
					Live better, and{" "}
					<span style={{ color: "var(--category-strong)" }}>longer</span>
				</p>
			</CategoryCard>
		</Grid>
		<br />
		<BlurButton variant="filled">Get Started</BlurButton>
	</>
);
