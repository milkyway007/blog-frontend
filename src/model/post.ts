import { TopicEnum } from '../constants/topic-enum'

export interface Post {
	id: string
	abstract: string
	title: string
	article: string
	topic: number
	created: string
	modified: string
}
