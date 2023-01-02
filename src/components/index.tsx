import React from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
	fab,
	faFacebookF,
	faGithub,
	faLinkedinIn
} from '@fortawesome/free-brands-svg-icons'
import { faMagnifyingGlass, fas } from '@fortawesome/free-solid-svg-icons'

import { router } from '../app/router/Routes'
import { store, StoreContext } from '../app/stores/store'

import styles from './index.module.css'

import 'bulma/css/bulma.min.css'

library.add(fab, fas, faFacebookF, faGithub, faLinkedinIn, faMagnifyingGlass)

const container = document.querySelector('#root') as HTMLElement

container.classList.add(styles.root)
const root = createRoot(container)

root.render(
	<StoreContext.Provider value={store}>
		<RouterProvider router={router} />
	</StoreContext.Provider>
)
