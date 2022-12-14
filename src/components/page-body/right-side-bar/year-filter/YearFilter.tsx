import React, { FC } from 'react'

import { merge } from '../../../../app/utils/mergeCssClasses'

import YearLink from './YearLink'

import styles from './YearFilter.module.css'

interface Props {
	years: number[]
}

const YearFilter: FC<Props> = ({ years }) => {
	return (
		<ul
			className={merge(
				styles['year-filter'],
				'box is-flex is-flex-direction-row is-flex-wrap-wrap is-justify-content-start is-align-content-start'
			)}>
			{years.map((year) => {
				return (
					<li key={year}>
						<YearLink year={year} />
					</li>
				)
			})}
		</ul>
	)
}

export default YearFilter
