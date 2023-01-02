import React from 'react'
import { Outlet } from 'react-router-dom'
import { observer } from 'mobx-react-lite'

import styles from './App.module.css'

const App: React.FC = () => {
	return (
		<div className={styles.App}>
			<Outlet />
		</div>
	)
}

export default observer(App)
