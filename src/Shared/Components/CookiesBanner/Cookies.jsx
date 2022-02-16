import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../Context/Context";
import "./index.css";

export const Cookies = () => {
	const { changeValueCookies } = useContext(Context);

	return (
		<div className="cookies">
			<div className="cookies__wrapper">
				<h2 className="cookies__title mb-3">Cookies</h2>
				<p className="cookies__text mb-3 fs-6">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus dolorem
					cumque provident, inventore nemo molestias itaque ex excepturi consequatur,
					perspiciatis totam nisi perferendis expedita veniam dolor ea quod et
					reprehenderit?
					<Link to="/">Data processing policies</Link>
				</p>
				<button className="btn btn__cookies" onClick={changeValueCookies}>
					Aceptar
				</button>
			</div>
		</div>
	);
};
