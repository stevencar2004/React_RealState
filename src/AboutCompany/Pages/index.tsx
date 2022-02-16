import React, { useContext } from "react";
import { Cookies } from "../../Shared/Components/CookiesBanner/Cookies";
import { Context } from "../../Shared/Context/Context";
import "./index.css";
import { GiReceiveMoney as Money } from "react-icons/gi";
import { IoMdArrowDropdown as ArrowDown } from "react-icons/io";

export const AboutPage = () => {
	const { isCookies } = useContext(Context);

	const handleDropDown = (event: any) => {
		if (event.target.tagName === "DIV" && event.target.parentNode.tagName === "H4") {
			event.target.parentNode.parentNode.classList.toggle("fqa__box--active");
		}
		if (event.target.tagName === "H4") {
			event.target.parentNode.classList.toggle("fqa__box--active");
		}
	};

	return (
		<div>
			{isCookies == "true" ? (
				<section className="about ">
					<div className="about__banner  p-3 p-lg-5 row m-0 gx-5">
						<div className="col-md-4 col-xxl-5">
							<img
								src="./Assets/building.svg"
								loading="lazy"
								alt="notFound-logo"
								className="img-fluid about__img"
							/>
						</div>

						<div className="col-md-8 col-xxl-7">
							<h2 className="about__title mb-3">
								Do you want to buy your house and need help?
							</h2>
							<p className="about__leyend mb-3">C.B Company Limited helps you decide</p>
							<button className="about__btn btn">Ask for help</button>
						</div>
					</div>

					<div className="about__fqas p-3 p-lg-5 ">
						<h2 className="mb-4">Frequent questions</h2>

						<div className="row ge-4">
							<div className="col-md-6 fqa__box p-3" onClick={handleDropDown}>
								<h4 className="d-flex aling-items-center justify-content-between w-100 p-3 fqa__title">
									<div className="d-flex aling-items-center gap-3">
										<Money />
										Financial Advice
									</div>
									<ArrowDown className="fqa__icon" />
								</h4>
								<p className="faq__text">
									Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est veniam
									nulla nam!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est
									veniam nulla nam!
								</p>
							</div>

							<div className="col-md-6 fqa__box p-3" onClick={handleDropDown}>
								<h4 className="d-flex aling-items-center justify-content-between w-100 p-3 fqa__title">
									<div className="d-flex aling-items-center gap-3">
										<Money />
										What is an automatic search can i contact the property owner directly
									</div>
									<ArrowDown className="fqa__icon" />
								</h4>
								<p className="faq__text">
									Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est veniam
									nulla nam!
								</p>
							</div>

							<div className="col-md-6 fqa__box p-3" onClick={handleDropDown}>
								<h4 className="d-flex aling-items-center justify-content-between w-100 p-3 fqa__title">
									<div className="d-flex aling-items-center gap-3">
										<Money />
										What does C.B Company Limited do? C.B Company Limited charges some
									</div>
									<ArrowDown className="fqa__icon" />
								</h4>
								<p className="faq__text">
									Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est veniam
									nulla nam!
								</p>
							</div>

							<div className="col-md-6 fqa__box p-3" onClick={handleDropDown}>
								<h4 className="d-flex aling-items-center justify-content-between w-100 p-3 fqa__title">
									<div className="d-flex aling-items-center gap-3">
										<Money />
										kind of commission Is there an alliance with a bank?
									</div>
									<ArrowDown className="fqa__icon" />
								</h4>
								<p className="faq__text">
									Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est veniam
									nulla nam!
								</p>
							</div>
						</div>
					</div>

					<div className="about__services p-3 p-lg-5 pt-0">
						<h2 className="mb-4">Our Services</h2>
						<div className="row g-2">
							<div className="col-lg-4 service d-flex aling-items-strech">
								<div className="service__wrapper border p-3">
									<div className="service__header mb-4">
										<img
											src="./Assets/building.svg"
											alt="service-1"
											className="service__img"
										/>
									</div>

									<h3 className="service__title mb-3">Service 1</h3>

									<p className="service__text mb-3 text-muted">
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure magni
										unde a architecto, animi repudiandae dolore obcaecati debitis dicta
										nobis!
									</p>
									<button className="service__button btn">Show More</button>
								</div>
							</div>

							<div className="col-lg-4  service d-flex aling-items-strech">
								<div className="service__wrapper border p-3">
									<div className="service__header mb-4">
										<img
											src="./Assets/404.svg"
											alt="service-1"
											className="service__img"
										/>
									</div>

									<h3 className="service__title mb-3">Service 2</h3>

									<p className="service__text mb-3 text-muted">
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure magni
										unde a architecto,
									</p>
									<button className="service__button btn">Show More</button>
								</div>
							</div>

							<div className="col-lg-4 service d-flex aling-items-strech">
								<div className="service__wrapper border p-3">
									<div className="service__header mb-4">
										<img
											src="./Assets/searchHouse.svg"
											alt="service-1"
											className="service__img"
										/>
									</div>

									<h3 className="service__title mb-3">Service 3</h3>

									<p className="service__text mb-3 text-muted">
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure magni
										unde a architecto, animi repudiandae dolore obcaecati debitis dicta
										nobis!
									</p>
									<button className="service__button btn">Show More</button>
								</div>
							</div>
						</div>
						{/* la seccion en la que mostraremos los servicios que ofrecemos en una grilla,
							cada servicio debe tener una imagen, un titulo un texto pequeño y un boton llamando a la accion
						*/}
					</div>
				</section>
			) : (
				<Cookies />
			)}
		</div>
	);
};
