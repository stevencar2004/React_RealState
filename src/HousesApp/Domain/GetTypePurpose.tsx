export const GetTypePurpose = (type: string) => {
	const validsTypes = ["allProperties", "saling", "renting"];

	if (!validsTypes.includes(type)) {
		return {
			status: false,
		};
	}
	return {
		status: true,
		typePurpose: type,
		// Falta devolver las propiedades de acuerdo al tipo "purpose"
		properties: [],
	};
};
