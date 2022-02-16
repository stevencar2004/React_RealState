export type RealStateContext = {
	isCookies: string | null;
	setIsCookies: (value: string) => void;
	changeValueCookies: () => void;
	KEY_COOKIES: string;
};

export interface IProviderProps {
	children: JSX.Element | JSX.Element[];
}
