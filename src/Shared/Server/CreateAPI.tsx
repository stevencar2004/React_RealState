import axios from "axios";

export const APIRealState = axios.create({
	baseURL: "https://bayut.p.rapidapi.com",
	headers: {
		"x-rapidapi-host": "bayut.p.rapidapi.com",
		"x-rapidapi-key": "47db8c98a0msh252d0d76f43cacep1be86cjsn61a5230c6a0e",
	},
});
