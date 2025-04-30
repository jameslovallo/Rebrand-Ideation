import styles from "./category-card.module.css";
import categories from "@/data/categories";

export const CategoryCard = ({ category, children }) => {
	const { strong, weak } = categories[category];
	return (
		<div
			className={styles.card}
			style={{ "--category-strong": strong, "--category-weak": weak }}
		>
			{children}
		</div>
	);
};
