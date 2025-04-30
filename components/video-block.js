import styles from "./video-block.module.css";
import { Grid } from "@/components";

export const VideoBlock = ({ children, src }) => (
	<div className={styles.videoBlock}>
		<Grid scale="500px" gap="0">
			<video src={src} autoPlay loop muted></video>
			<div className={styles.content}>{children}</div>
		</Grid>
	</div>
);
