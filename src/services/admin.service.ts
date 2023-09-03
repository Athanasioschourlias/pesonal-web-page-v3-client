import axiosInstance from "../helpers/http-common.helper"


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