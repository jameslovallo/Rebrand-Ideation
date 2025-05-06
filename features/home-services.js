"use client";

import { ServiceBlock, Tabs } from "@/components";
import { useEffect } from "react";

export const HomeServices = () => {
	useEffect(() => {
		const params = new URLSearchParams(location.search);
		const campaign = params.get("utm_campaign");
	}, []);

	return (
		<Tabs
			triggers={[
				<div>Body</div>,
				<div>Mind</div>,
				<div>Beauty</div>,
				<div>Sexual Health</div>,
			]}
		>
			<ServiceBlock img="/photography/home-block-1.jpg">
				<div>
					<h3>Lose weight</h3>
					<p>
						Wherever you are in your weight loss journey, our team can help you
						feel better in your body.
					</p>
				</div>
				<div>
					<h3>Build muscle mass</h3>
					<p>
						We have the tools to help you grow, maintain, and recover, for
						professionals and newcomers alike.
					</p>
				</div>
				<div>
					<h3>Sleep better</h3>
					<p>
						Do you feel energized, confident, and ready to tackle your day. You
						deserve to! Sleep therapy can help.
					</p>
				</div>
				<div>
					<h3>Proactive care</h3>
					<p>
						We provide therapies to improve and maintain your health and
						wellness, before problems begin.
					</p>
				</div>
			</ServiceBlock>
			<ServiceBlock img="/photography/home-block-2.jpg">
				<div>
					<h3>Regulate your hormones</h3>
					<p>
						Our team will dive into your medical history and order lab work to
						help diagnose any imbalances.
					</p>
				</div>
				<div>
					<h3>Manage your anxiety</h3>
					<p>
						Hormones, genetics, and lifestyle all contribute to anxiety. Get the
						expert help you need to find balance.
					</p>
				</div>
				<div>
					<h3>Boost cognitive function</h3>
					<p>
						Do you have brain fog, memory issues, or difficulty concentrating?
						You're not alone! Don't wait, contact us.
					</p>
				</div>
				<div>
					<h3>Have more energy</h3>
					<p>
						Make it through the work day and have the energy to play with your
						kids, without the energy drinks.
					</p>
				</div>
			</ServiceBlock>
			<ServiceBlock img="/photography/home-block-3.jpg">
				<div>
					<h3>Get thick, healthy hair</h3>
					<p>
						We have solutions for hair loss, breakage, and thinning, for men,
						women, and all hair types.
					</p>
				</div>
				<div>
					<h3>Have glowing skin</h3>
					<p>
						Get personalized care to help you look and feel your best,
						regardless of your age or skin type.
					</p>
				</div>
				<div>
					<h3>Look and feel younger</h3>
					<p>
						It's not magic, it's science. Access the same care the top
						celebrities use, at a fraction of the cost.
					</p>
				</div>
				<div>
					<h3>Age gracefully</h3>
					<p>
						Age catches up with us all, but with the right care, your body
						doesn't have to slow down.
					</p>
				</div>
			</ServiceBlock>
			<ServiceBlock img="/photography/home-block-4.jpg">
				<div>
					<h3>Get it up</h3>
					<p>
						Laborum aliqua ex ad proident ea aliquip laborum. Deserunt deserunt
						pariatur pariatur nisi.
					</p>
				</div>
				<div>
					<h3>Last longer</h3>
					<p>
						Laborum aliqua ex ad proident ea aliquip laborum. Deserunt deserunt
						pariatur pariatur nisi.
					</p>
				</div>
				<div>
					<h3>Get in the mood</h3>
					<p>
						Laborum aliqua ex ad proident ea aliquip laborum. Deserunt deserunt
						pariatur pariatur nisi.
					</p>
				</div>
				<div>
					<h3>Play safe</h3>
					<p>
						Laborum aliqua ex ad proident ea aliquip laborum. Deserunt deserunt
						pariatur pariatur nisi.
					</p>
				</div>
			</ServiceBlock>
		</Tabs>
	);
};
