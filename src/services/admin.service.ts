import axiosInstance from "../helpers/http-common.helper"
import {article} from "../types/article.types"
import {User} from "../types/auth.types"
import {res} from "../types/general.types";


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

export function fetch_all_users(): Promise<User []> {

	return axiosInstance
		.get("/admin/users/all")
		.then(response => response.data as User [])
		.catch(error => {
			console.error(error)
			throw error
		})
}

export function deleteUserById(user_id: string): Promise<res> {

	return axiosInstance
		.delete(`/admin/users/id?id=${user_id}`)
		.then(response => response as res)
		.catch(error => {
			console.error(error)
			throw error
		})
}

export function
modifyUserRole(user_name: string, user_role: string, user_id: string):
	Promise<res> {

	const options = {
		data: {
			username: user_name,
			role: user_role
		}
	}

	return axiosInstance
		.put(`/admin/users/id?id=${user_id}`, options)
		.then(response => response as res)
		.catch(error => {
			console.error(error)
			throw error
		})
}