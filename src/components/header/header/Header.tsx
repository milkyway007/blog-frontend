import styles from './Header.module.css'
import HeaderBrand from './HeaderBrand'
import HeaderEnd from './HeaderEnd'
import HeaderStart from './HeaderStart'

import merge from '../../../utils/mergeCssClasses'

const navbarStyle = {
	paddingBottom: '3rem',
}

interface Props {
	header: string
}

const Header: React.FC<Props> = ({ header }) => {
	return (
		<div
			className={merge(styles['header'], 'navbar', 'is-dark', 'is-spaced')}
			style={navbarStyle}>
			<HeaderBrand />
			<HeaderStart header={header} />
			<HeaderEnd />
		</div>
	)
}

export default Header
