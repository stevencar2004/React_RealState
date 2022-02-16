import React from "react";
import ReactDOM from "react-dom";
import { AppRouter } from "./Router";
import { Provider } from "./Shared/Context/Provider";

ReactDOM.render(
	<React.StrictMode>
		<Provider>
			<AppRouter />
		</Provider>
	</React.StrictMode>,
	document.getElementById("root"),
);
