import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Cookies } from "../Shared/Components/CookiesBanner/Cookies";
import { Context } from "../Shared/Context/Context";
import "./index.css";

export const NotFound = () => {
	const { isCookies } = useContext(Context);

	return (
		<>
			{isCookies === "true" ? (
				<section className="container-fluid p-3 p-md-5 notFound">
					<div className="notFound__wrapper row">
						<div className="col-12 col-lg-6 d-flex justify-content-center">
							<img src="./Assets/404.svg" loading="lazy" alt="notFound-logo" />
						</div>

						<div className="col-12 col-lg-6">
							<h2 className="notFound__title mb-3">NoutFound</h2>
							<p className="notFound__text fs-5">
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint vitae
								laboriosam dolores quibusdam est,
							</p>
							<Link to="/" className="btn notFound__btn mt-3">
								Back To Home
							</Link>
						</div>
					</div>
				</section>
			) : (
				<Cookies />
			)}
		</>
	);
};
