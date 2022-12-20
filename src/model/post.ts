import { Topic } from '../constants/topicEnum'

export interface Post {
	id: Number
	abstract: String
	title: String
	article: String
	timestamp: Date
	topic: Topic
}
