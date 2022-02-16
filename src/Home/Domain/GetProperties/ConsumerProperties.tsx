import { APIRealState } from "../../../Shared/Server/CreateAPI";
import { IProperty } from "../Property";
import { IResponseAPIProperty } from "../ResponseAPI.Property";

export const GetDataAPI = async (): Promise<IProperty[]> => {
	const response = await APIRealState.get<IResponseAPIProperty>(
		"/properties/list?locationExternalIDs=5002&hitsPerPage=3",
	);

	const listProperties = response.data.hits;

	return transformProperties(listProperties);
};

const transformProperties = (listProperties: IProperty[]): IProperty[] => {
	const property: IProperty[] = listProperties.map((item) => {
		return {
			agency: item.agency,
			area: item.area,
			baths: item.baths,
			id: item.id,
			price: item.price,
			purpose: item.purpose,
			rentFrequency: item.rentFrequency,
			rooms: item.rooms,
			title: item.title,
			coverPhoto: item.coverPhoto,
		};
	});
	return property;
};
