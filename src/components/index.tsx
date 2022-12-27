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

import './index.module.css'

library.add(fab, fas, faFacebookF, faGithub, faLinkedinIn, faMagnifyingGlass)

ReactDOM.render(<App />, document.querySelector('body'))
