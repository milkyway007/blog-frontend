import React from 'react'

import { merge } from '../../utils/mergeCssClasses'

import Copyright from './Copyright'

import styles from './Footer.module.css'

const footerStyle = { padding: '1.5rem' }
const Footer: React.FC = () => {
	return (
		<footer
			className={merge(styles.footer, 'has-background-dark', 'has-text-white')}
			style={footerStyle}>
			<Copyright />
		</footer>
	)
}

export default Footer