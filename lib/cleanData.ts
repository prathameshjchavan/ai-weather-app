const cleanData = (data: Root, city: String) => {
	const {
		current_weather: {
			temperature,
			windspeed,
			winddirection,
			weathercode,
			time,
		},
		timezone,
		hourly: {
			temperature_2m,
			snowfall,
			rain,
			relativehumidity_2m,
			precipitation_probability,
			uv_index,
		},
		hourly_units,
		timezone_abbreviation,
	} = data;

	return {
		current_weather: {
			temperature,
			windspeed,
			winddirection,
			weathercode,
			time,
		},
		hourly: {
			temperature_2m: temperature_2m.slice(0, 24),
			snowfall: snowfall.slice(0, 24),
			rain: rain.slice(0, 24),
			relativehumidity_2m: relativehumidity_2m.slice(0, 24),
			precipitation_probability: precipitation_probability.slice(0, 24),
			uv_index: uv_index.slice(0, 24),
		},
		timezone,
		timezone_abbreviation,
		hourly_units,
		city,
	};
};

export default cleanData;
