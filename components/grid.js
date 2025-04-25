export const Grid = ({ children, scale = "250px", gap = "1rem" }) => (
	<div
		style={{
			display: "grid",
			gridTemplateColumns: `repeat(auto-fill, minmax(${scale}, 1fr))`,
			gap,
		}}
	>
		{children}
	</div>
);
