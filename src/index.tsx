import { library } from '@fortawesome/fontawesome-svg-core'
import {
	faFacebookF,
	faGithub,
	faLinkedinIn,
	fab,
} from '@fortawesome/free-brands-svg-icons'
import { faMagnifyingGlass, fas } from '@fortawesome/free-solid-svg-icons'
import 'bulma/css/bulma.min.css'
import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import './index.css'

library.add(fab, fas, faFacebookF, faGithub, faLinkedinIn, faMagnifyingGlass)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)
