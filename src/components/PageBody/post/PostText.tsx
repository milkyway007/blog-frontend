import React, { FC } from 'react'

interface Props {
	title: string
	abstract: string
}

const PostText: FC<Props> = ({ title, abstract }) => {
	return (
		<div className='media-content column is-three-quarters'>
			<div className='title'>{title}</div>
			<div>{abstract}</div>
		</div>
	)
}

export default PostText
