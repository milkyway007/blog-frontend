import React, { FC } from 'react'

import { Post } from '../../../model/post'

import { default as PostComponent } from './Post'

interface Props {
	posts: Post[]
}

const Posts: FC<Props> = ({ posts }) => {
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