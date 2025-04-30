import styles from "./home-treatments.module.css";
import products from "@/data/products";
import { Grid } from "@/components";

export const HomeTreatments = () => (
	<Grid scale="200px" gap="1rem">
		{products
			.filter((_, i) => i < 5)
			.map((product) => (
				<a key={product.name} className={styles.card}>
					<img
						src={product.image}
						alt={product.name}
						width="100%"
						height="auto"
					/>
					<div className={styles.price}>${product.price}</div>
					<p className={styles.label}>{product.name}</p>
				</a>
			))}
	</Grid>
);
