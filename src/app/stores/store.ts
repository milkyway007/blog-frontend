import { createContext, useContext } from 'react'

import PostStore from './post-store'
import StringStore from './string-store'
import TopicsStore from './topic-store'

interface Store {
	stringStore: StringStore
	postStore: PostStore
	topicStore: TopicsStore
}

export const store: Store = {
	stringStore: new StringStore(),
	postStore: new PostStore(),
	topicStore: new TopicsStore()
}

export const StoreContext = createContext(store)

export function useStore() {
	return useContext(StoreContext)
}
