import { toJS } from 'mobx'
import { observer } from 'mobx-react-lite'
import React, { useEffect } from 'react'

import { TopicLink } from '../model/topic-link'

import { TopicEnum } from '../constants/topic-enum'

import { useStore } from '../stores/store'
import PageBody from './page-body/PageBody'
import PageFooter from './page-footer/PageFooter'
import PageHeader from './page-header/PageHeader'

import styles from './App.module.css'

const HEADER = 'Liidia Laada Blog'
const TOPICS: TopicLink[] = []

const App: React.FC = () => {
	let id = 0

	const { postStore } = useStore()
	const { postsByDate } = postStore

	useEffect(() => {
		postStore.loadPosts()
	}, [postStore])

	for (const [key, value] of Object.entries(TopicEnum)) {
		TOPICS.push({
			id: ++id,
			topic: value,
			link: `/${key}`
		} as TopicLink)
	}

	return (
		<div className={styles.App}>
			<PageHeader
				header={HEADER}
				topics={TOPICS}></PageHeader>
			<PageBody posts={toJS(postsByDate)} />
			<PageFooter />
		</div>
	)
}

export default observer(App)
