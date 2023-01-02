import React from 'react'

import { TopicLink } from '../../../model/topic-link'

import { merge } from '../../../utils/mergeCssClasses'

import Topic from './Topic'

import styles from './Topics.module.css'

interface Props {
	items: TopicLink[]
}

const TopicsNavbar: React.FC<Props> = ({ items }) => {
	console.log(items)

	return (
		<div
			className={merge(
				styles['topics-navbar'],
				'navbar',
				'is-size-5',
				'has-text-weight-semibold',
				'has-background-grey-lighter'
			)}>
			<div className='navbar-start'>
				{items.map((item) => {
					return (
						<Topic
							title={item.topic}
							href={item.link}
							key={items.indexOf(item)}
						/>
					)
				})}
			</div>
		</div>
	)
}

export default TopicsNavbar
