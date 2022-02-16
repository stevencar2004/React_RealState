import { APIRealState } from "../../../Shared/Server/CreateAPI";
import { IAgency } from "../Agency";
import { IResponseAPIAgency } from "../ResponseAPI.Agency";

export const AgenciesAPI = async (): Promise<IAgency[]> => {
	const response = await APIRealState.get<IResponseAPIAgency>(
		"/agencies/list?query=patriot&hitsPerPage=25",
	);
	const listAgencies = response.data.hits;
	return transformAgencies(listAgencies);
};

const transformAgencies = (listAgencies: IAgency[]): IAgency[] => {
	const agencies: IAgency[] = listAgencies.map((item) => {
		return {
			location: item.location,
			name: item.name,
			product: item.product,
			id: item.id,
			logo: item.logo,
			stats: item.stats,
		};
	});
	return agencies;
};
