"use client";

import { AreaChart, Card, Title } from "@tremor/react";

type Props = {
	results: Root;
};

const HumidityChart = ({ results }: Props) => {
	const hourly = results.hourly.time
		.map((time) =>
			new Date(time).toLocaleString("en-US", {
				hour: "numeric",
				hour12: false,
			})
		)
		.slice(0, 24);

	const data = hourly.map((hour, index) => ({
		time: Number(hour),
		"Humidity (%)": results.hourly.relativehumidity_2m[index],
	}));

	const dateFormatter = (number: number) => `${number}%`;

	return (
		<Card>
			<Title>Humidity Levels</Title>
			<AreaChart
				className="mt-6"
				data={data}
				showLegend
				index="time"
				categories={["Humidity (%)"]}
				colors={["teal"]}
				minValue={0}
				maxValue={100}
				valueFormatter={dateFormatter}
				yAxisWidth={40}
			/>
		</Card>
	);
};

export default HumidityChart;
