import axiosInstance from "../helpers/http-common.helper"

export function fetch_cv(): Promise<any> {

	return axiosInstance
		.get("/utilities/cv")
		.then((response) => {
			const fileURL = window.URL.createObjectURL(new Blob([response.data]))
			const fileLink = document.createElement("a")

			fileLink.href = fileURL
			fileLink.setAttribute("download", "cv_22-05-2023.pdf")
			document.body.appendChild(fileLink)

			fileLink.click()
		})
		.catch(error => {
			console.error(error)
			throw error
		})
}

export function send_contact_details(
	user_name: string,
	user_main: string,
	user_phone: string | null,
	input: string): Promise<any> {

	const config = {
		data: {
			name:  user_name,
			mail:  user_main,
			phone: user_phone,
			text:  input
		}
	}

	return axiosInstance
		.post("/utilities/form", config)
		.then(response => response.data)
		.catch(error => {
			console.error(error)
			throw error
		})
}