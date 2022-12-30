import React, { useEffect } from 'react'

import { TopicLink } from '../model/topic-link'

import { TopicEnum } from '../constants/topic-enum'

import PageBody from './page-body/PageBody'
import PageFooter from './page-footer/PageFooter'
import PageHeader from './page-header/PageHeader'

import styles from './App.module.css'

import '../utils/num-extensions'
import { useStore } from '../stores/store'
import { observer } from 'mobx-react-lite'

const HEADER = 'Liidia Laada Blog'
const TOPICS: TopicLink[] = []

const App: React.FC = () => {
	let id = 0

	const { postStore } = useStore()

	useEffect(() => {
		postStore.loadPosts()
		console.log(postStore.posts)
	}, [postStore])

	for (const [key, value] of Object.entries(TopicEnum)) {
		TOPICS.push({
			id: ++id,
			topic: value,
			link: `/${key}`
		} as TopicLink)
	}

	console.log(postStore.posts)

	return (
		<div className={styles.App}>
			<PageHeader
				header={HEADER}
				topics={TOPICS}></PageHeader>
			<PageBody posts={postStore.posts} />
			<PageFooter />
		</div>
	)
}

export default observer(App)
