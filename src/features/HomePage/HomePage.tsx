import React, { useEffect } from 'react'
import { toJS } from 'mobx'
import { observer } from 'mobx-react-lite'

import PageFooter from '../../app/components/page-footer/PageFooter'
import PageHeader from '../../app/components/page-header/PageHeader'
import PageBody from '../../components/page-body/PageBody'

import { useStore } from '../../app/stores/store'


const App: React.FC = () => {
	const { stringStore, postStore, topicStore } = useStore()
	const { header } = stringStore
	const { postsByDate } = postStore
	const { topicsSorted } = topicStore

	useEffect(() => {
		postStore.loadPosts()
		topicStore.getTopics()
	}, [postStore, topicStore])

	return (
		<>
			<PageHeader
				header={header}
				topics={toJS(topicsSorted)}></PageHeader>
			<PageBody posts={toJS(postsByDate)} />
			<PageFooter />
		</>
	)
}

export default observer(App)
