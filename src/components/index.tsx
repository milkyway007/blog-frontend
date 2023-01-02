import React from 'react'
import { createRoot } from 'react-dom/client'

import 'bulma/css/bulma.min.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
	fab,
	faFacebookF,
	faGithub,
	faLinkedinIn
} from '@fortawesome/free-brands-svg-icons'
import { faMagnifyingGlass, fas } from '@fortawesome/free-solid-svg-icons'

import { store, StoreContext } from '../stores/store'
import App from './App'

import styles from './index.module.css'

library.add(fab, fas, faFacebookF, faGithub, faLinkedinIn, faMagnifyingGlass)

const container = document.querySelector('#root') as HTMLElement

container.classList.add(styles.root)
const root = createRoot(container)

root.render(
	<StoreContext.Provider value={store}>
		<App />
	</StoreContext.Provider>
)
