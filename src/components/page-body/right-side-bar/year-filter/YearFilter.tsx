import React, { FC } from 'react'

import { merge } from '../../../../utils/mergeCssClasses'
import YearCheckbox from './YearLink'

import styles from './YearFilter.module.css'

interface Props {
	years: number[]
	add: (year: number) => void
	remove: (year: number) => void
}

const YearFilter: FC<Props> = ({ years, add, remove }) => {
	return (
		<ul
			className={merge(
				styles['year-filter'],
				'box is-flex is-flex-direction-row is-flex-wrap-wrap is-justify-content-start is-align-content-start'
			)}>
			{years.map((year) => {
				return (
					<li key={year}>
						<YearCheckbox
							year={year}
							add={add}
							remove={remove} />
					</li>
				)
			})}
		</ul>
	)
}

export default YearFilter
