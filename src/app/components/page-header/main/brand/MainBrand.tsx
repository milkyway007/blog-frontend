import React from 'react'
import { NavLink } from 'react-router-dom'

import { merge } from '../../../../utils/mergeCssClasses'

import { MiaLogo } from '../../../../images/images'

import styles from './MainBrand.module.css'

const brandStyle = { alignItems: 'center' }
const miaLogoStyle = { width: '9rem' }

const MainBrand: React.FC = () => {
	return (
		<div
			className={merge(styles['header-brand'], 'navbar-brand')}
			style={brandStyle}>
			<NavLink
				className='card'
				to='/'>
				<div className='card-image'>
					<figure className='image'>
						<img
							src={MiaLogo}
							alt='Mia Logo'
							style={miaLogoStyle}
						/>
					</figure>
				</div>
			</NavLink>
		</div>
	)
}

export default MainBrand
