import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SocialIcon } from '../../../model/social-icon'

import { merge } from '../../../utils/mergeCssClasses'

import styles from './SocialIconItem.module.css'

interface Props {
	socialIcon: SocialIcon
}

const SocialIconsItem: React.FC<Props> = ({ socialIcon: {
	href,
	backgroundColor,
	iconProp,
}}) => {
	const itemStyle = {
		borderRadius: '50%',
		width: '2.5rem',
		height: '2.5rem',
		padding: '0',
		margin: '.5rem',
		color: '#fff',
		backgroundColor: backgroundColor,
	}

	return (
		<li>
			<a
				className={merge(styles['brand-icon'], 'navbar-item')}
				href={href}
				style={itemStyle}
				target='_blank'
				rel='noreferrer'>
				<FontAwesomeIcon
					className={styles['brand-icon__svg']}
					icon={iconProp}
				/>
			</a>
		</li>
	)
}

export default SocialIconsItem
