import styles from "./carousel.module.css";

export const Carousel = ({ children }) => (
	<div className={styles.carousel}>
		<div className={styles.track}>{children}</div>
		<div className={styles.controls}>
			<button>
				<svg viewBox="0 0 24 24">
					<path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
				</svg>
			</button>
			<span>
				{children.length} / {children.length}
			</span>
			<button>
				<svg viewBox="0 0 24 24">
					<path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
				</svg>
			</button>
		</div>
	</div>
);
