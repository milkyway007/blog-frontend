import { FC } from 'react'

import { merge } from '../../../utils/mergeCssClasses'

import { Topic } from '../../../constants/topic-enum'

import PostImage from './PostImage'
import PostText from './PostText'

interface Props {
	title: String
	abstract: String
	topic: Topic
}

const Post: FC<Props> = ({ title, abstract, topic }) => {
	return (
		<li className='box'>
			<div className={merge('media', 'columns')}>
				<PostImage topic={topic} />
				<PostText
					title={title}
					abstract={abstract}
				/>
			</div>
		</li>
	)
}

export default Post
