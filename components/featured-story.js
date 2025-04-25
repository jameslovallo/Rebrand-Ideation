import { BlurButton, PlaceholderBox } from "./";

export const FeaturedStory = () => (
	<div
		style={{
			alignItems: "center",
			display: "grid",
			gridTemplateColumns: "1fr 2fr",
			gap: "1rem",
		}}
	>
		<PlaceholderBox aspectRatio="3/4" />
		<div>
			<h3 style={{ marginTop: "0" }}>Story title</h3>
			<p>Eu dolor laborum ullamco tempor do fugiat mollit.</p>
			<BlurButton variant="filled">Read/watch more</BlurButton>
		</div>
	</div>
);
