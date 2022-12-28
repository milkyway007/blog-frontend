import React, { FC } from 'react'

import { getYearsToFilter } from '../../../../utils/getYearsToFilter'
import { merge } from '../../../../utils/mergeCssClasses'

import styles from './YearFilter.module.css'

const YearFilter: FC = () => {
	return (
		<ul
			className={merge(
				styles['year-filter'],
				'box is-flex is-flex-direction-row is-flex-wrap-wrap is-justify-content-start is-align-content-start'
			)}>
			{getYearsToFilter().map((year) => {
				return (
					<li key={year}>
						<label className='button is-link is-inverted is-normal is-rounded has-text-info py-1 px-2'>
							<input type='checkbox' className={styles['year-filter__checkbox']} />
							{year}
						</label>
					</li>
				)
			})}
		</ul>
	)
}

export default YearFilter
