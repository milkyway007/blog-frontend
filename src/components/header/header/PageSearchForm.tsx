import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './PageSearchForm.module.css'

import merge from '../../../utils/mergeCssClasses'

const inputStyle = {
	backgroundColor: '#363636',
	borderBottomColor: '#555555',
	color: '#fff',
}

const PageSearchForm: React.FC = () => {
	return (
		<form>
			<div className={merge(styles['search-field'], 'field')}>
				<div
					className={merge(
						styles['search-field__icon-container'],
						'is-size-5',
						'has-text-weight-bold'
					)}>
					<FontAwesomeIcon icon={['fas', 'magnifying-glass']} />
				</div>
				<div className='control'>
					<input
						className={merge('input', 'is-size-6', 'is-small', 'is-dark')}
						style={inputStyle}
					/>
				</div>
			</div>
		</form>
	)
}

export default PageSearchForm
