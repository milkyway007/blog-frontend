import React, { FC } from 'react'
import { getYearsToFilter } from '../../../utils/getYearsToFilter'
import { merge } from '../../../utils/mergeCssClasses'

import styles from './YearFilter.module.css'

const YearFilter: FC = () => {
	const yearsToFilter = getYearsToFilter()

	return (
		<ul className={merge(styles['year-filter'], 'box is-flex is-flex-direction-row is-flex-wrap-wrap is-justify-content-start is-align-content-start')}>
			{yearsToFilter.map((year) => {
				return <li key={year}>
					<span className='has-text-info py-1 px-2'>
						<button className='button is-link is-inverted is-normal is-rounded'>{year}</button>
					</span>
				</li>
			}
			)}
		</ul>
	)
}

export default YearFilter