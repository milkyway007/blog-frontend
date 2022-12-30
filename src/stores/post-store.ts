import { action, makeAutoObservable, observable } from 'mobx'
import agent from '../api/agent'
import { Post } from '../model/post'

export class PostStore {

	posts: Post[] = []

	constructor() {
		makeAutoObservable(this)
	}

	loadPosts = async() => {
		try {
			const posts = await agent.Posts.list()

			posts.forEach((post) => {
				post.created = post.created.split('T')[0]
				post.modified = post.modified.split('T')[0]
				this.posts.push(post)
			})
		}
		catch (error) {
			console.log(error)
		}
	}

}
