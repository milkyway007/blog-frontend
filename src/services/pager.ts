import { RECORDS_PER_PAGE } from '../constants/constants'
import { Post } from '../model/post'

export const numPages = (postCount: number) => {
	return Math.ceil(postCount / RECORDS_PER_PAGE)
}

export const takePagePosts = (
	posts: Post[],
	currentPage: number) => {
	const start = currentPage * RECORDS_PER_PAGE - 1
	const end = currentPage * RECORDS_PER_PAGE - 1 + RECORDS_PER_PAGE

	return posts.slice(
		start,
		end
	)
}
