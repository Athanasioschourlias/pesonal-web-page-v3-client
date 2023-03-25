import axios, { AxiosInstance } from "axios"

//TODO - ADD a config file in order to have settigns like this one, in one place
const instance: AxiosInstance = axios.create({
	baseURL: "http://localhost:3000/api/v1",
	headers: {
		"Content-type": "application/json",
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