import { TopicEnum } from '../constants/topic-enum'

export interface Post {
	id: number
	abstract: string
	title: string
	article: string
	timestamp: Date
	topic: TopicEnum
}