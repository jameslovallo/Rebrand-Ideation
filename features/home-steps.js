import { BlurButton, NumberList } from "@/components";
import Image from "next/image";

export const HomeSteps = () => (
	<NumberList>
		<li>
			<h3>Get started</h3>
			<p>
				Our wellness team provides personalized guidance to help you make your
				health and fitness goals a reality.
			</p>
			<Image
				src="/photography/wellness-team-no-bg.png"
				alt="wellness team"
				width={400}
				height={300}
			/>
		</li>
		<li>
			<h3>Get tested</h3>
			<p>
				Specialized blood panels help us identify what your body needs to
				thrive, close to home and on your schedule.
			</p>
			<Image
				src="/photography/blood-test-no-bg.png"
				alt="wellness team"
				width={400}
				height={300}
			/>
		</li>
		<li>
			<h3>Get treatment</h3>
			<p>
				Federally licensed doctors and pharmacists determine the safest
				treatment and ship it to your home.
			</p>
			<Image
				src="/photography/doctor-no-bg.png"
				alt="wellness team"
				width={400}
				height={300}
			/>
		</li>
	</NumberList>
);
