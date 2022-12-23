import React from 'react'

import { merge } from '../../../utils/mergeCssClasses'

import Topic from './Topic'

import styles from './Topics.module.css'

interface Props {
	items: string[]
}

const TopicsNavbar: React.FC<Props> = ({ items }) => {
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
							header={item}
							key={items.indexOf(item)}
						/>
					)
				})}
			</div>
		</div>
	)
}

export default TopicsNavbar