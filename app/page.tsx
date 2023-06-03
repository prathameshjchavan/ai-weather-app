"use client";

import { Card, Text, Subtitle } from "@tremor/react";

export default function Home() {
	return (
		<main>
			<Card>
				<Text>Weather AI</Text>
				<Subtitle>
					Powered by OpenAI, Next.js 13.3, Tailwind CSS, Tremor 2.0 + More!
				</Subtitle>
			</Card>
		</main>
	);
}
