import styles from './HeaderEnd.module.css'
import PageSearchForm from './PageSearchForm'
import SocialIcons from './SocialIcons'

const HeaderEnd: React.FC = () => {
	return (
		<div className='navbar-end'>
			<div className={styles['header-end__content']}>
				<SocialIcons />
				<PageSearchForm />
			</div>
		</div>
	)
}

export default HeaderEnd
