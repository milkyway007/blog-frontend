import { makeAutoObservable } from 'mobx'

import { TopicLink } from '../model/topic-link'

import { TopicEnum } from '../constants/topic-enum'

export default class TopicsStore {

	topics: TopicLink[] = []

	constructor() {
		makeAutoObservable(this, {}, { autoBind: true })
	}

	get topicsSorted() {
		return Array.from(this.topics).sort()
	}

	getTopics = () => {
		let id = 0

		for (const [key, value] of Object.entries(TopicEnum)) {
			this.topics.push({
				id: ++id,
				topic: value,
				link: `/${key}`
			} as TopicLink)
		}
	}

}
