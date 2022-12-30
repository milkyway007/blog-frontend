import React, { FC } from 'react'
import { numToTopic, TopicEnum } from '../../../constants/topic-enum'

import { Post } from '../../../model/post'

import { default as PostComponent } from './Post'

interface Props {
	posts: Post[],
}

const Posts: FC<Props> = ({ posts }) => {
	console.log(posts)
	console.log(posts.length)
	console.log(posts[0])

	if (!Array.isArray(posts) || !posts.length) {
		return (
			<div className='box'>
				<div className='title  mx-6'>No posts found</div>
			</div>
		)
	}

	return (
		<ul>
			{posts.map((post) => {
				return (
					<PostComponent
						key={post.id.toString()}
						title={post.title}
						abstract={post.abstract}
						topic={numToTopic(post.topic)}
					/>
				)
			})}
		</ul>
	)
}

export default Posts
