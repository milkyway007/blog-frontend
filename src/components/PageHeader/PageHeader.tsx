import React from 'react'

import { TopicLink } from '../../model/topic-link'

import Header from './Main/Main'
import TopicsNavbar from './topics/Topics'

import styles from './PageHeader.module.css'

const navbarStyle = { paddingBottom: '3rem' }

interface Props {
	header: string
	topics: TopicLink[]
}

const PageHeader: React.FC<Props> = ({ header, topics }) => {
	return (
		<div
			className={styles['page-header']}
			style={navbarStyle}>
			<Header header={header} />
			<TopicsNavbar items={topics} />
		</div>
	)
}

export default PageHeader
