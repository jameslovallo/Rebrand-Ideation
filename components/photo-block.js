import styles from "./photo-block.module.css";
import Image from "next/image";

export const PhotoBlock = ({
	img = "/photography/home-block-1.jpg",
	children,
}) => (
	<section className={styles.section}>
		<Image src={img} alt="hero" width={400} height={600} />
		{children}
	</section>
);
