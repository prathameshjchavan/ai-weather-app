"use client";

import { Country, City } from "country-state-city";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Select from "react-select";

type option = {
	value: {
		latitude: string;
		longitude: string;
		isoCode: string;
	};
	label: string;
} | null;

type cityOption = {
	value: {
		latitude: string;
		longitude: string;
		countryCode: string;
		name: string;
		stateCode: string;
	};
	label: string;
} | null;

const options = Country.getAllCountries().map((country) => ({
	value: {
		latitude: country.latitude,
		longitude: country.longitude,
		isoCode: country.isoCode,
	},
	label: country.name,
}));

const CityPicker = () => {
	const [selectedCountry, setSelectedCountry] = useState<option>(null);
	const [selectedCity, setSelectedCity] = useState<cityOption>(null);
	const router = useRouter();

	const handleSelectedCountry = (option: option) => {
		setSelectedCountry(option);
		setSelectedCity(null);
	};

	return (
		<div>
			<div>
				<label htmlFor="country">Country</label>
			</div>
			<Select
				className="text-black"
				options={options}
				value={selectedCountry}
				onChange={handleSelectedCountry}
			/>
		</div>
	);
};

export default CityPicker;
