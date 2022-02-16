import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Cookies } from "../../Shared/Components/CookiesBanner/Cookies";
import { Context } from "../../Shared/Context/Context";
import { GetTypePurpose } from "../Domain/GetTypePurpose";
import { IParamsURL } from "../Interfaces/IParamsURL";

export const HousesPage = () => {
	const { type } = useParams();
	const { isCookies } = useContext(Context);
	const [isTypePurpose, setIsTypePurpose] = useState<IParamsURL>();

	useEffect(() => {
		const { status, properties, typePurpose } = GetTypePurpose(type!);
		setIsTypePurpose({ status, properties, typePurpose });
	}, []);

	return (
		<section>
			{isCookies === "true" ? (
				<div>
					{!isTypePurpose?.status && (
						<h2>Is Not Found, but there are other properties</h2>
					)}
					HousesPage
				</div>
			) : (
				<Cookies />
			)}
		</section>
	);
};
