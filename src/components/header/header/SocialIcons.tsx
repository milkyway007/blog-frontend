
import { SocialIconType } from '../../../constants/social-icon-type-enum'
import { select } from '../../../services/social-icon-selector'

import SocialIconItem from './SocialIconItem'

import styles from './SocialIcons.module.css'

const SocialIcons: React.FC = () => {
	return (
		<ul className={styles['social-icons']}>
			<SocialIconItem
				socialIcon={select(SocialIconType.FB)}></SocialIconItem>
			<SocialIconItem
				socialIcon={select(SocialIconType.Github)}></SocialIconItem>
			<SocialIconItem
				socialIcon={select(SocialIconType.LinkedIn)}></SocialIconItem>
		</ul>
	)
}

export default SocialIcons
