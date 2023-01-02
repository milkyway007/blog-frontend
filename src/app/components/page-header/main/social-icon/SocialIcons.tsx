import React from 'react'

import { select } from '../../../../services/social-icon-selector'

import { SocialIconType } from '../../../../constants/social-icon-type-enum'

import SocialIconItem from './SocialIconItem'

import styles from './SocialIcons.module.css'

const SocialIcons: React.FC = () => {
	return (
		<ul className={styles['social-icons']}>
			<SocialIconItem socialIcon={select(SocialIconType.FB)} />
			<SocialIconItem socialIcon={select(SocialIconType.Github)} />
			<SocialIconItem socialIcon={select(SocialIconType.LinkedIn)} />
		</ul>
	)
}

export default SocialIcons
