import axiosInstance from "../helpers/http-common.helper"
import {login_resp} from "../types/auth.types"

export function logInUser(
	username: string,
	user_pass: string): Promise<login_resp> {


	// Define the data you want to send in the request body (username and password)
	const loginData = {
		username: username,
		password: user_pass,
	}

	return axiosInstance
		.post("/auth/login", loginData)
		.then(response => response.data)
		.catch(error => {
			console.error(`There was an error while trying to log-in ${error}`)
		})
}