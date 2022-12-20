import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './SocialIconItem.module.css'

import merge from '../../../utils/mergeCssClasses'

interface Props {
	href: string
	backgroundColor: string
	iconProp: IconProp
}

const SocialIconsItem: React.FC<Props> = ({
	href,
	backgroundColor,
	iconProp,
}) => {
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
	)
}

export default SocialIconsItem
