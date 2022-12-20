import Topic from './Topic'
import styles from './Topics.module.css'

import merge from '../../../utils/mergeCssClasses'

interface Props {
	items: string[]
}

const TopicsNavbar: React.FC<Props> = ({ items }) => {
	return (
		<div
			className={merge(
				styles['topics-navbar'],
				'navbar',
				'is-size-5',
				'has-text-weight-semibold',
				'has-background-grey-lighter'
			)}>
			<div className='navbar-start'>
				{items.map((i) => {
					console.log(items.indexOf(i))
					return (
						<Topic
							header={i}
							key={items.indexOf(i)}></Topic>
					)
				})}
			</div>
		</div>
	)
}

export default TopicsNavbar
