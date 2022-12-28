import React, { FC } from 'react'

import { Post } from '../../../model/post'

import { default as PostComponent } from './Post'

interface Props {
	posts: Post[],
}

const Posts: FC<Props> = ({ posts }) => {
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
						topic={post.topic}
					/>
				)
			})}
		</ul>
	)
}

export default Posts
