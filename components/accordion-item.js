import styles from "./accordion-item.module.css";

export const AccordionItem = ({ title, children }) => (
	<details className={styles.accordion}>
		<summary>{title}</summary>
		<div className="accordion-content">{children}</div>
	</details>
);
