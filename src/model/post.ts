import { Topic } from '../constants/topic-enum'

export interface Post {
	id: Number
	abstract: String
	title: String
	article: String
	timestamp: Date
	topic: Topic
}
