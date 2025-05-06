"use client";

import styles from "./tabs.module.css";
import { useEffect, useRef, useState } from "react";

export const Tabs = ({ triggers, children, activeTab = 0 }) => {
	const track = useRef(null);
	const childCount = children.length;
	const [active, setActive] = useState(activeTab);

	useEffect(() => {
		const width = track.current.scrollWidth;
		track.current.scrollTo({
			left: (width / childCount) * active,
			behavior: "smooth",
		});
	}, [active]);

	return (
		<div>
			<ul className={styles.tabs}>
				{triggers.map((trigger, i) => (
					<li key={`trigger-${i}`}>
						<button
							style={{
								color: i === active ? "var(--blue-chip)" : "",
							}}
							onClick={() => {
								setActive(i);
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
					<li key={`child-${i}`} inert={i !== active}>
						{child}
					</li>
				))}
			</ul>
		</div>
	);
};
