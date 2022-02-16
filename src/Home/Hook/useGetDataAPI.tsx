import React, { useEffect, useState } from "react";
import { IAgency } from "../Domain/Agency";
import { IProperty } from "../Domain/Property";
import { AgenciesAPI } from "../Domain/GetAgencies/ConsumerAgencies";
import { GetDataAPI } from "../Domain/GetProperties/ConsumerProperties";

export const useGetDataAPI = () => {
	const [isLoading, setisLoading] = useState({
		properties: false,
		agencies: false,
	});
	const [listProperties, setListProperties] = useState<IProperty[] | string | null>([]);
	const [listAgencies, setListAgencies] = useState<IAgency[] | string | null>([]);

	useEffect(() => {
		if (!localStorage.getItem("propertiesHome")) {
			GetDataAPI().then((properties) => {
				localStorage.setItem("propertiesHome", JSON.stringify(properties));
			});
		} else {
			let properties = localStorage.getItem("propertiesHome");
			setListProperties(properties);
			setisLoading({
				properties: true,
				agencies: false,
			});
		}

		if (!localStorage.getItem("AgenciesHome")) {
			AgenciesAPI().then((agency) => {
				localStorage.setItem("agenciesHome", JSON.stringify(agency));
			});
		} else {
			let agencies = localStorage.getItem("agenciesHome");
			setListAgencies(agencies);
			setisLoading({
				properties: true,
				agencies: true,
			});
		}
	}, []);

	return {
		isLoading,
		listProperties,
		listAgencies,
	};
};
