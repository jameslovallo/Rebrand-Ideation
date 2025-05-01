"use client";

import styles from "./tabs.module.css";
import { useRef, useState } from "react";

export const Tabs = ({ triggers, children }) => {
	const track = useRef(null);
	const [active, setActive] = useState(0);
	return (
		<div>
			<ul className={styles.tabs}>
				{triggers.map((trigger, i) => (
					<li key={`trigger-${i}`}>
						<button
							style={{
								color: i === active ? "var(--high-blue)" : "",
							}}
							onClick={() => {
								setActive(i);
								const childCount = children.length;
								const width = track.current.scrollWidth;
								track.current.scrollTo({
									left: (width / childCount) * i,
									behavior: "smooth",
								});
							}}
						>
							{trigger}
						</button>
					</li>
				))}
			</ul>
			<ul ref={track} className={styles.track}>
				{children.map((child, i) => (
					<li key={`child-${i}`}>{child}</li>
				))}
			</ul>
		</div>
	);
};
