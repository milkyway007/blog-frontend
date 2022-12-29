import React, { ChangeEvent, FC, useState } from 'react'

import styles from './YearCheckbox.module.css'

interface Props {
    year: number;
	add: (year: number) => void
	remove: (year: number) => void
}

const YearCheckbox: FC<Props> = ({ year, add, remove }) => {
	const isYearCheckedHandler =
	(event: ChangeEvent<HTMLInputElement>) => {
		event.persist()

		if (!event.target.checked) {
			remove(year)

			return
		}

		add(year)
	}

	return (
		<a href={`/${year}`} className='button is-warning is-light is-normal py-1 px-2'>
			{year}
		</a>
	)
}

export default YearCheckbox
