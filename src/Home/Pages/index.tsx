import { useContext } from "react";
import { Link } from "react-router-dom";
import { useGetDataAPI } from "../Hook/useGetDataAPI";
//
import { BsSearch } from "react-icons/bs";
import { MdKingBed } from "react-icons/md";
import { FaBath } from "react-icons/fa";
import { RiLayoutMasonryFill } from "react-icons/ri";
//
import "./../index.css";
import { Cookies } from "../../Shared/Components/CookiesBanner/Cookies";
import { Context } from "../../Shared/Context/Context";

const isLoading = {
	properties: true,
	agencies: true,
};
export const HomePage = () => {
	const { isCookies } = useContext(Context);

	// const { isLoading, listProperties, listAgencies } = useGetDataAPI();

	return (
		<div>
			{isCookies === "true" ? (
				<>
					<div className="banner">
						<div className="d-flex flex-column justify-content-center align-items-center banner__wrapper gap-3">
							<h2 className="text-center text-light banner__title">
								Search for your dream house
							</h2>

							<form className="form p-4">
								<div className="row">
									<div className="col-12 col-md-5 mb-3 mb-md-0">
										<select name="" id="" className="form-select form-select-lg">
											<option value="for-rent">Renting</option>
											<option value="for-sale">Saling</option>
										</select>
									</div>

									<div className="col-12 col-md-5 mb-3 mb-md-0">
										<select name="" id="" className="form-select form-select-lg">
											<option>Type Of Property</option>
											<option value="16">House</option>
											<option value="4">Apartment</option>
											<option value="3">Villa</option>
											<option value="5">Offices</option>
											<option value="8">Factory</option>
										</select>
									</div>

									<div className="col-12 col-md-2 d-flex aling-items-center justify-content-center">
										<button className="btn" id="banner__btn" type="submit">
											<BsSearch className="btn-search" />
										</button>
									</div>
								</div>
							</form>
						</div>
					</div>

					<section className="mt-3">
						<article className="marketing p-3 p-md-5">
							<div className="marketing__wrapper d-flex flex-column align-items-center flex-lg-row justify-content-center gap-3">
								<div className="marketing__img">
									<img
										src="./Assets/searchHouse.svg"
										className="img-fluid"
										alt="img-marketing"
									/>
								</div>
								<div className="marketing__info">
									<h2 className="marketing__title fs-1 mb-3">
										We help you find the dream house
									</h2>
									<p className="marketing__text">
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ea
										vitae ipsa. Atque, quam. Ex.
									</p>
									<button className="btn marketing__btn text-light">Search</button>
								</div>
							</div>
						</article>

						<div className="projects d-flex justify-content-center align-items-center">
							{!isLoading.properties ? (
								<div className="projects__wrapper row  m-0 p-3 p-md-5 ">
									<div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0 projects__propery p-0 d-flex justify-content-center">
										<div className="card placeholder ">
											<img className="card-img-top " id="img-property" />

											<div className="card-body  ">
												<h5 className="card-title mb-3 "></h5>
												<h5 className="text-purpose mb-3 "></h5>

												<p className="card-text "></p>

												<div className="d-flex justify-content-between align-items-center">
													<h3 className="fs-2 price "></h3>
													<img className="avatar-agency " />
												</div>
											</div>
										</div>
									</div>

									<div className="col-12 col-md-6 col-lg-4  mb-4 mb-lg-0 projects__propery p-0 d-flex justify-content-center">
										<div className="card placeholder ">
											<img className="card-img-top " id="img-property" />

											<div className="card-body  ">
												<h5 className="card-title mb-3 "></h5>
												<h5 className="text-purpose mb-3 "></h5>

												<p className="card-text "></p>

												<div className="d-flex justify-content-between align-items-center">
													<h3 className="fs-2 price "></h3>
													<img className="avatar-agency " />
												</div>
											</div>
										</div>
									</div>

									<div className="col-12 col-md-6 col-lg-4  mb-4 mb-lg-0 projects__propery p-0 d-flex justify-content-center">
										<div className="card placeholder ">
											<img className="card-img-top " id="img-property" />

											<div className="card-body  ">
												<h5 className="card-title mb-3 "></h5>
												<h5 className="text-purpose mb-3 "></h5>

												<p className="card-text "></p>

												<div className="d-flex justify-content-between align-items-center">
													<h3 className="fs-2 price "></h3>
													<img className="avatar-agency " />
												</div>
											</div>
										</div>
									</div>
								</div>
							) : (
								<div className="projects__wrapper row m-0 p-3 p-md-5">
									<div className="col-12 col-md-6 col-lg-4  mb-4 mb-lg-0 projects__propery p-0 d-flex justify-content-center ">
										<div className="card ">
											<img
												src="./Assets/luxuryHouse.jpg"
												className="card-img-top "
												alt="img-property"
												id="img-property"
											/>

											<div className="card-body">
												<h5 className="card-title mb-3">
													CasaFinca en el lago calima con habitaciones de lujo y muc...
												</h5>

												<h5 className="text-purpose mb-3">Purpose: For-Rent</h5>

												<p className="card-text">
													<MdKingBed />4 <span> | </span>
													<FaBath /> 3 <span> | </span>
													<RiLayoutMasonryFill /> 125sqft
												</p>

												<div className="d-flex justify-content-between align-items-center">
													<h3 className="fs-2">$ 3.200.000</h3>
													<img src="" className="avatar-agency" />
												</div>
												<button className="btn">Show More</button>
											</div>
										</div>
									</div>

									<div className="col-12 col-md-6 col-lg-4  mb-4 mb-lg-0 projects__propery p-0 d-flex justify-content-center">
										<div className="card">
											<img
												src="./Assets/luxuryHouse.jpg"
												className="card-img-top "
												alt="img-property"
												id="img-property"
											/>

											<div className="card-body">
												<h5 className="card-title mb-3">
													Apartamento en el sector del poblado cerca al centro comer...
												</h5>
												<h5 className="text-purpose mb-3">Purpose: For-Rent</h5>

												<p className="card-text">
													<MdKingBed /> 3 <span> | </span>
													<FaBath /> 2 <span> | </span>
													<RiLayoutMasonryFill /> 85sqft
												</p>

												<div className="d-flex justify-content-between align-items-center">
													<h3 className="fs-2">$ 1.900.000</h3>
													<img src="" className="avatar-agency" />
												</div>
												<button className="btn">Show More</button>
											</div>
										</div>
									</div>

									<div className="col-12 col-md-6 col-lg-4  mb-4 mb-lg-0 projects__propery p-0 d-flex justify-content-center">
										<div className="card">
											<img
												src="./Assets/luxuryHouse.jpg"
												className="card-img-top "
												alt="img-property"
												id="img-property"
											/>

											<div className="card-body">
												<h5 className="card-title mb-3">
													Lujosa casa en el sector de jamundi, cerca al parque y a
													otros...
												</h5>
												<h5 className="text-purpose mb-3">Purpose: For-Rent</h5>

												<p className="card-text">
													<MdKingBed /> 5 <span> | </span>
													<FaBath /> 3 <span> | </span>
													<RiLayoutMasonryFill /> 105sqft
												</p>

												<div className="d-flex justify-content-between align-items-center">
													<h3 className="fs-2">$ 2.850.000</h3>
													<img src="" className="avatar-agency" />
												</div>
												<button className="btn">Show More</button>
											</div>
										</div>
									</div>
								</div>
							)}
							{/*	{listProperties.map((property) => (
							<div className="col-12 col-md-6  col-lg-4 gap-2 mb-4 mb-lg-0">
								<div className="card" key={property.id}>
									
								</div>
							</div>
						))}*/}
						</div>

						<article className="services">
							<div className="services__wrapper row">
								<div className="col-12 col-md-6 services__advice ">
									<h2 className="mb-3">Advice</h2>
									<p className="mb-4">
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero et
										impedit ut similique sequi nostrum voluptatibus ratione. Labore,
										debitis dignissimos.
									</p>
									<button className="btn btn-lg">Request Advice</button>
								</div>

								<div className="col-12 col-md-6">
									<div className="row services__more">
										<div className="col-12">
											<h3 className="mb-3 fs-2">Lorem Ipsu</h3>
											<p>
												Lorem ipsum dolor sit amet consectetur adipisicing elit.
												Consequuntur doloribus nulla, est deleniti inventore modi.
											</p>
											<button className="btn btn-secondary ">Advice</button>
										</div>

										<div className="col-12">
											<h3 className="mb-3 fs-2">Lorem Ipsu</h3>
											<p>
												Lorem ipsum dolor sit amet consectetur adipisicing elit.
												Consequuntur doloribus nulla, est deleniti inventore modi.
											</p>
											<button className="btn btn-success ">Request</button>
										</div>
									</div>
								</div>
							</div>
						</article>

						<div className="builders p-3 p-md-5 mb-4">
							<h2 className="text-center mb-3 builders__title">Builders</h2>
							<p className="text-muted text-center fs-5">
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente beatae
								similique minima voluptas vel, accusantium reiciendis porro nam provident
								consequatur.
							</p>

							<div className="mt-5 builders__logos row row-cols-auto justify-content-center gap-4">
								{!isLoading.agencies ? (
									<>
										<div className="logo col-12 col-md-6 col-lg-4">
											<img className="placeholder" />
										</div>

										<div className="logo col-12 col-md-6 col-lg-4">
											<img className="placeholder" />
										</div>

										<div className="logo col-12 col-md-6 col-lg-4">
											<img className="placeholder" />
										</div>

										<div className="logo col-12 col-md-6 col-lg-4">
											<img className="placeholder" />
										</div>

										<div className="logo col-12 col-md-6 col-lg-4">
											<img className="placeholder" />
										</div>
									</>
								) : (
									<>
										<div className="logo col-12 col-md-6 col-lg-4">
											<img src="./Assets/luxuryHouse.jpg" alt="builder__logo" />
											<h2 className="builder__info text-muted fs-4 text-center mt-3">
												Lorem Ipsu
											</h2>
										</div>

										<div className="logo col-12 col-md-6 col-lg-4">
											<img src="./Assets/luxuryHouse.jpg" alt="builder__logo" />
											<h2 className="builder__info text-muted fs-4 text-center mt-3">
												Lorem Ipsu
											</h2>
										</div>

										<div className="logo col-12 col-md-6 col-lg-4">
											<img src="./Assets/luxuryHouse.jpg" alt="builder__logo" />
											<h2 className="builder__info text-muted fs-4 text-center mt-3">
												Lorem Ipsu
											</h2>
										</div>

										<div className="logo col-12 col-md-6 col-lg-4">
											<img src="./Assets/luxuryHouse.jpg" alt="builder__logo" />
											<h2 className="builder__info text-muted fs-4 text-center mt-3">
												Lorem Ipsu
											</h2>
										</div>

										<div className="logo col-12 col-md-6 col-lg-4">
											<img src="./Assets/luxuryHouse.jpg" alt="builder__logo" />
											<h2 className="builder__info text-muted fs-4 text-center mt-3">
												Lorem Ipsu
											</h2>
										</div>
									</>
								)}
							</div>
						</div>
					</section>
				</>
			) : (
				<Cookies />
			)}
		</div>
	);
};
