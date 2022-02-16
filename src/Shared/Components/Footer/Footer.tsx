import React from "react";
import {
	BsInstagram as Insta,
	BsFacebook as Face,
	BsYoutube,
	BsTwitter,
} from "react-icons/bs";
import "./index.css";

export const Footer = () => {
	return (
		<footer className="footer mt-3">
			<div className="footer__wrapper row p-3 p-md-4 p-lg-5">
				<div className="footer__brand col-12 col-lg-6 mb-5 mb-lg-0">
					<h2>C.B Company Limited</h2>
					<p>
						CBCompanyLimited.com complies with Law 527 of 1999 for all purposes it must be
						understood as INFORMATION SYSTEM <br />
						<strong>© All rights reserved – 2022</strong>
					</p>
					<div className="footer__social d-flex justify-content-evenly align-items-center">
						<BsTwitter />
						<BsYoutube />
						<Insta />
						<Face />
					</div>
				</div>

				<div className="footer__legal col-12 col-md-6 col-lg-3">
					<h2>Legal</h2>
					<ul>
						<li>
							<a href="#" target="_blank" rel="noopener noreferrer">
								Legal warning
							</a>
						</li>
						<li>
							<a href="#" target="_blank" rel="noopener noreferrer">
								Legal terms
							</a>
						</li>
						<li>
							<a href="#" target="_blank" rel="noopener noreferrer">
								Data processing policies
							</a>
						</li>
						<li>
							<a href="#" target="_blank" rel="noopener noreferrer">
								Privacy policies
							</a>
						</li>
					</ul>
				</div>

				<div className="footer__about col-12 col-md-6 col-lg-3">
					<h2>About</h2>
					<ul>
						<li>
							<a href="#" target="_blank" rel="noopener noreferrer">
								Work with us
							</a>
						</li>
						<li>
							<a href="#" target="_blank" rel="noopener noreferrer">
								Publish your property
							</a>
						</li>
						<li>
							<a href="#" target="_blank" rel="noopener noreferrer">
								Receive advice
							</a>
						</li>
						<li>
							<a href="#" target="_blank" rel="noopener noreferrer">
								Frequent questions
							</a>
						</li>
						<li>
							<a href="#" target="_blank" rel="noopener noreferrer">
								Contact us
							</a>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
};
