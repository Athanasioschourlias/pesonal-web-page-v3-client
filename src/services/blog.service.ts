import axiosInstance from "../helpers/http-common.helper"

export function fetch_categories(): Promise<any> {

	return axiosInstance
		.get("/blog/available_categories")
		.then(response => response.data)
		.catch(error => {
			console.error(error)
			throw error
		})
}

export function fetch_articles_by_category(articles_category: string): Promise<any> {

	const options = {
		params: {
			category: articles_category
		}
	}

	return axiosInstance
		.get("/blog/articles/category",options)
		.then(response => response.data)
		.catch(error => {
			console.error(error)
			throw error
		})
}

export function fetch_all_articles(): Promise<any> {

	return axiosInstance
		.get("blog/articles/all")
		.then(response => response.data)
		.catch(error => {
			console.error(error)
			throw error
		})
}