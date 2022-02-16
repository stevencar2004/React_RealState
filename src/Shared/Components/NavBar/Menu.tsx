import { NavLink } from "react-router-dom";
import "./menu.css";

export const Menu = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark  p-3" id="navbar">
			<div className="container-fluid navbar__wrapper">
				<NavLink className="navbar-brand" to="/">
					C.B Company Limited
				</NavLink>

				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarScroll"
					aria-controls="navbarScroll"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>

				<div
					className="collapse navbar-collapse d-flex justify-content-end"
					id="navbarScroll"
				>
					<ul className="navbar-nav ">
						<li className="nav-item">
							<NavLink className="nav-link " to="search/type=renting">
								Renting
							</NavLink>
						</li>

						<li className="nav-item">
							<NavLink className="nav-link" to="search/type=saling">
								Saling
							</NavLink>
						</li>

						<li className="nav-item">
							<NavLink className="nav-link" to="/aboutCompany">
								About Company
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
