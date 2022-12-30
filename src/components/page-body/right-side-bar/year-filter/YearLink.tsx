import React, { ChangeEvent, FC, useState } from 'react'

import styles from './YearCheckbox.module.css'

interface Props {
    year: number;
}

const YearLink: FC<Props> = ({ year }) => {
	return (
		<a href={`/${year}`} className='button is-warning is-light is-normal py-1 px-2'>
			{year}
		</a>
	)
}

export default YearLink
