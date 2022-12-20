import { FC } from 'react'

import PostImage from './PostImage'
import PostText from './PostText'

import merge from '../../../utils/mergeCssClasses'

import { Topic } from '../../../constants/topicEnum'

interface Props {
	title: String
	abstract: String
	topic: Topic
}

const Post: FC<Props> = ({ title, abstract, topic }) => {
	return (
		<div className='box'>
			<div className={merge('media', 'columns')}>
				<PostImage topic={topic} />
				<PostText
					title={title}
					abstract={abstract}
				/>
			</div>
		</div>
	)
}

export default Post
