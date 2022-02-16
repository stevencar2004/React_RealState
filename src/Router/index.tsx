import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import { AboutPage } from "../AboutCompany/Pages";
import { HomePage } from "../Home/Pages";
import { HousesPage } from "../HousesApp/Pages";
import { Menu } from "../Shared/Components/NavBar/Menu";
import { Footer } from "../Shared/Components/Footer/Footer";
import { NotFound } from "../NotFound/404";

export const AppRouter = () => {
	return (
		<BrowserRouter>
			<Menu />
			<Routes>
				<Route path="search/type=:type" element={<HousesPage />} />
				<Route path="aboutCompany" element={<AboutPage />} />
				<Route path="/" element={<HomePage />} />
				<Route path="*" element={<Navigate to="/404" />} />
				<Route path="404" element={<NotFound />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
};
