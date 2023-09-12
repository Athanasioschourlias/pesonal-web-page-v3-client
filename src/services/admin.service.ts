import axiosInstance from "../helpers/http-common.helper"
import {article} from "../types/article.types"


export function post_article(cat: string, art_title: string, story: string): Promise<any> {

	const options = {
		data: {
			category: cat,
			title: art_title,
			image: "",
			article_text: story
		}
	}

	return axiosInstance
		.post("/admin/articles/category",options)
		.then(response => response.data)
		.catch(error => {
			console.error(error)
			throw error
		})
}

export function delete_article(article_id: string, article_category:string): Promise<string> {

	return axiosInstance
		.delete(`/admin/articles/id?id=${article_id}&category=${article_category}`)
		.then(response => response.data)
		.catch(error => {
			console.error(error)
			throw error
		})
}

export function get_article(): Promise<article []> {

	return axiosInstance
		.get("/blog/articles/all")
		.then(response => response.data as article [])
		.catch(error => {
			console.error(error)
			throw error
		})
}

export function create_user(username: string, role: string, password: string): Promise<any> {

	const options = {
		data: {
			username: username,
			role: role,
			password: password,
		}
	}

	return axiosInstance
		.post("/admin/register",options)
		.then(response => response.data)
		.catch(error => {
			console.error(error)
			throw error
		})
}

export function register_member(username: string, password: string): Promise<string> {

	const options = {
		data: {
			username: username,
			role: "member",
			password: password,
		}
	}

	return axiosInstance
		.post("/admin/register",options)
		.then(response => response.data)
		.catch(error => {
			console.error(error)
			return error
		})
}