import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { SocialIcon } from '../../../model/social-icon'

import { merge } from '../../../utils/mergeCssClasses'

import styles from './SocialIconItem.module.css'

interface Props {
	socialIcon: SocialIcon | undefined
}

const SocialIconsItem: React.FC<Props> = ({ socialIcon }) => {
	let linkEl

	if (socialIcon) {
		const linkStyle = {
			borderRadius: '50%',
			width: '2.5rem',
			height: '2.5rem',
			padding: '0',
			margin: '.5rem',
			color: '#fff',
			backgroundColor: socialIcon.backgroundColor
		}

		linkEl = (
			<a
				className={merge(styles['brand-icon'], 'navbar-item')}
				href={socialIcon.href}
				style={linkStyle}
				target='_blank'
				rel='noreferrer'>
				<FontAwesomeIcon
					className={styles['brand-icon__svg']}
					icon={socialIcon.iconProp}
				/>
			</a>
		)
	}

	return <li>{linkEl}</li>
}

export default SocialIconsItem