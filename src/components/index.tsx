import React from 'react'
import ReactDOM from 'react-dom'

import 'bulma/css/bulma.min.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
	fab,
	faFacebookF,
	faGithub,
	faLinkedinIn
} from '@fortawesome/free-brands-svg-icons'
import { faMagnifyingGlass, fas } from '@fortawesome/free-solid-svg-icons'

import App from './App'
import styles from './index.module.css'
import { store, StoreContext } from '../stores/store'

library.add(fab, fas, faFacebookF, faGithub, faLinkedinIn, faMagnifyingGlass)

const root = document.querySelector('#root') as HTMLElement

root.classList.add(styles.root)

ReactDOM.render(
	<StoreContext.Provider value={store}>
		<App />
	</StoreContext.Provider>,
	root
)
