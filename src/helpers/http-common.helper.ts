import axios, { AxiosInstance } from "axios"


function getToken() {
	const jwtToken = localStorage.getItem("token")

	// Check if the item exists in localStorage
	if(jwtToken !== null)
		// The item exists, you can use it
		return JSON.parse(jwtToken).token
	else
		return ""

}

//TODO - ADD a config file in order to have settigns like this one, in one place
const instance: AxiosInstance = axios.create({
	baseURL: "/api/v1",
	headers: {
		"Content-type": "application/json",
		"Authorization": `Bearer ${getToken()}`,
	}
})

instance.interceptors.response.use(
	response => response.data,
	error => {
		console.error(error)
		throw error
	}
)

export default instance