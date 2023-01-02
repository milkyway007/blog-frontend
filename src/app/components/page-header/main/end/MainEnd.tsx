import React from 'react'

import PageSearchForm from '../search-form/PageSearchForm'
import SocialIcons from '../social-icon/SocialIcons'

import styles from './MainEnd.module.css'

const MainEnd: React.FC = () => {
	return (
		<div className='navbar-end'>
			<div className={styles['header-end__content']}>
				<SocialIcons />
				<PageSearchForm />
			</div>
		</div>
	)
}

export default MainEnd
