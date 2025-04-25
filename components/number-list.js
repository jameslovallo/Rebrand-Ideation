import styles from "./number-list.module.css";

export const NumberList = ({ children }) => (
	<ol className={styles.list}>{children}</ol>
);
