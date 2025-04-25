import styles from "./placeholder-box.module.css";

export const PlaceholderBox = ({ children }) => (
	<div className={styles.box}>{children}</div>
);
