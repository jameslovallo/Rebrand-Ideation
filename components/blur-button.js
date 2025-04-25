import styles from "./blur-button.module.css";

export const BlurButton = ({ children, variant = "text" }) => (
	<button className={styles[variant]}>{children}</button>
);
