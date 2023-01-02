import { makeAutoObservable, runInAction } from 'mobx'

import { Post } from '../model/post'

import agent from '../api/agent'

export default class PostStore {

	postRegistry = new Map<string, Post>()

	constructor() {
		makeAutoObservable(this, {}, { autoBind: true })
	}

	get postsByDate() {
		return Array.from(this.postRegistry.values()).sort((postA, postB) => {
			return Date.parse(postA.created) - Date.parse(postB.created)
		})
	}

	loadPosts = async() => {
		try {
			const posts = await agent.Posts.list()

			runInAction(() => {
				posts.forEach((post) => {
					const {
						created: createdDateTime,
						modified: modifiedDateTime
					} = post

					const [created] = createdDateTime.split('T')
					const [modified] = modifiedDateTime.split('T')

					post.created = created
					post.modified = modified

					this.postRegistry.set(post.id, post)
				})
			})
		}
		catch (error) {
			console.log(error)
		}
	}

}
