import { PhotoBlock, Tabs } from "@/components";

export const HomeCategories = () => (
	<Tabs triggers={[<div>Body</div>, <div>Brain</div>, <div>Beauty</div>]}>
		<PhotoBlock img="/photography/home-block-1.jpg">
			<div>
				<h3>Lose weight</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
			</div>
			<div>
				<h3>Build muscle mass</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
			</div>
			<div>
				<h3>Have better sex</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
			</div>
			<div>
				<h3>Proactive care</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
			</div>
		</PhotoBlock>
		<PhotoBlock img="/photography/home-block-2.jpg">
			<div>
				<h3>Sleep better</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
			</div>
			<div>
				<h3>Regulate your hormones</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
			</div>
			<div>
				<h3>Boost cognitive function</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
			</div>
			<div>
				<h3>Have more energy</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
			</div>
			{/* <div>
				<h3>Manage anxiety</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
			</div>
			<div>
				<h3>Tackle depression</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
			</div> */}
		</PhotoBlock>
		<PhotoBlock img="/photography/home-block-3.jpg">
			<div>
				<h3>Regrow your hair</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
			</div>
			<div>
				<h3>Have glowing skin</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
			</div>
			<div>
				<h3>Age well</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
			</div>
		</PhotoBlock>
	</Tabs>
);
