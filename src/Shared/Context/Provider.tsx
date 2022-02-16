import React, { useEffect, useState } from "react";
import { IProviderProps } from "../Domain/RealStateContext";
import { Context } from "./Context";

const KEY_COOKIES = "isAcceptCookies";

export const Provider = ({ children }: IProviderProps) => {
	const [isCookies, setIsCookies] = useState(localStorage.getItem(KEY_COOKIES));

	useEffect(() => {
		const res = localStorage.getItem(KEY_COOKIES);
		if (res === null) {
			localStorage.setItem(KEY_COOKIES, "false");
		}
	}, [isCookies]);

	const changeValueCookies = () => {
		localStorage.setItem(KEY_COOKIES, "true");
		setIsCookies(localStorage.getItem(KEY_COOKIES))
	};

	return (
		<Context.Provider
			value={{ isCookies, setIsCookies, KEY_COOKIES, changeValueCookies }}
		>
			{children}
		</Context.Provider>
	);
};
