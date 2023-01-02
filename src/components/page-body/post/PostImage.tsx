import React, { FC } from 'react'

import { select } from '../../../app/services/topic-image-selector'

import { TopicEnum } from '../../../app/constants/topic-enum'

interface Props {
	topic: TopicEnum | undefined
}

const PostImage: FC<Props> = ({ topic }) => {
	return (
		<div className='media-left column'>
			<figure className='image is-square'>
				<img
					src={select(topic)}
					alt=''
				/>
			</figure>
		</div>
	)
}

export default PostImage
