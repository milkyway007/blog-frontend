import React from 'react'

import { merge } from '../../../utils/mergeCssClasses'

import MainBrand from './MainBrand'
import MainEnd from './MainEnd'
import MainStart from './MainStart'

import styles from './Main.module.css'

const navbarStyle = { paddingBottom: '3rem' }

interface Props {
	header: string
}

const Main: React.FC<Props> = ({ header }) => {
	return (
		<div
			className={merge(styles.header, 'navbar', 'is-dark', 'is-spaced')}
			style={navbarStyle}>
			<MainBrand />
			<MainStart header={header} />
			<MainEnd />
		</div>
	)
}

export default Main
