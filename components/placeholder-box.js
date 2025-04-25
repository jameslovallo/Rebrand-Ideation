import styles from "./placeholder-box.module.css";

export const PlaceholderBox = ({ children, aspectRatio = "16/9" }) => (
	<div className={styles.box} style={{ aspectRatio }}>
		{children}
	</div>
);
