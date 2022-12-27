import React from 'react'

import { merge } from '../../../utils/mergeCssClasses'

import { MiaLogo } from '../../../images/images'

import styles from './MainBrand.module.css'

const brandStyle = { alignItems: 'center' }
const miaLogoStyle = { width: '9rem' }

const MainBrand: React.FC = () => {
	return (
		<div
			className={merge(styles['header-brand'], 'navbar-brand')}
			style={brandStyle}>
			<a
				className='card'
				href='/'>
				<div className='card-image'>
					<figure className='image'>
						<img
							src={MiaLogo}
							alt='Mia Logo'
							style={miaLogoStyle}
						/>
					</figure>
				</div>
			</a>
		</div>
	)
}

export default MainBrand
