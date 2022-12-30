import axios, { AxiosResponse } from 'axios'
import { Post } from '../model/post'

const sleep = (delay: number) => {
	return new Promise((resolve) => {
		setTimeout(resolve, delay)
	})
}

axios.defaults.baseURL = 'http://localhost:5000/api/v1'

axios.interceptors.response.use(async(response) => {
	try {
		await sleep(1000)

		return response
	}
	catch (error) {
		console.log(error)

		return await Promise.reject(error)
	}
})

const responseBody = <T> (response: AxiosResponse<T>) => {
	return response.data
}

const requests = {
	get: async <T> (url: string) => {
		const response = await axios.get<T>(url)

		return responseBody(response)
	},
	post: async <T> (url: string, body: {}) => {
		const response = await axios.post<T>(url)

		return responseBody(response)
	},
	patch: async <T>(url: string, body: {}) => {
		const response = await axios.patch<T>(url)

		return responseBody(response)
	},
	del: async <T> (url: string) => {
		const response = await axios.delete<T>(url)

		return responseBody(response)
	}
}

const Posts = {
	list: () => {
		return requests.get<Post[]>('/posts')
	},
	details: (id: string) => {
		return requests.get<Post>(`/posts/${id}`)
	},
	create: (post: Post) => {
		return requests.post<void>('/posts', post)
	},
	update: (post: Post) => {
		return requests.patch<void>(`/posts/${post.id}`, post)
	},
	delete: (id: string) => {
		return requests.del<void>(`/posts/${id}`)
	}
}

const agent = { Posts }

export default agent
