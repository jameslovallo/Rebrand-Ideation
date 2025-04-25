import { AccordionItem, BlurButton } from "@/components";

export const HomeFaq = () => (
	<>
		<AccordionItem title="I signed up, what happens next?">
			<p>
				After completing the intake form, our team will review your information
				and contact you to schedule a consultation with one of our wellness
				specialists. During the consultation, we will discuss your health goals,
				medical history, and tailor options specifically to you and your
				objectives.
			</p>
		</AccordionItem>
		<AccordionItem title="Are your services covered by insurance?">
			<p>
				Transcend does not work with health insurers, but we do accept HSA and
				FSA as a method of payment. We can provide invoices and lab
				requisitions, but we don't offer procedure or diagnostic codes as we
				operate on a direct pay basis.
			</p>
		</AccordionItem>
		<AccordionItem title="Do I need to undergo bloodwork for all medications?">
			<p>
				Bloodwork is required to be considered for certain treatments such as
				hormone replacement therapy (HRT). Our team of medical providers will
				determine the necessity of bloodwork based on your individual needs.
			</p>
		</AccordionItem>
		<AccordionItem title="How long does it typically take to receive lab results?">
			<p>
				The turnaround time for lab results can vary depending on the laboratory
				processing times. Typically, results are available 7-10 business days
				and our team will notify you as soon as they become available.
			</p>
		</AccordionItem>
		<AccordionItem title="Does Transcend offer international shipping or service?">
			<p>
				Currently, we only serve within the 50 United States and the District of
				Columbia.
			</p>
		</AccordionItem>
		<AccordionItem title="I recently underwent lab work elsewhere; will Transcend accept those results?">
			<p>
				At Transcend, our assessments require a unique and comprehensive blood
				panel to ensure accurate and personalized health insights. Therefore, we
				typically request that tests be ordered through us. We understand you
				may have recent results from elsewhere and invite you to share them with
				our team. We'll review them to see if they can complement our analysis
				or if additional specific tests are required.
			</p>
			<p>
				For personalized assistance or further questions, please contact our
				support team. We're here to ensure your health evaluation is thorough
				and tailored to you.
			</p>
		</AccordionItem>
		<AccordionItem title="Are there any age restrictions for your services?">
			<p>
				Our services are only accessible to individuals aged 18 or over, or in
				some cases aged 21 or over. Our team of medical providers will assess
				your eligibility for treatment based on your age and objectives.
			</p>
		</AccordionItem>
		<br />
		<BlurButton variant="filled">Get Started</BlurButton>
	</>
);
