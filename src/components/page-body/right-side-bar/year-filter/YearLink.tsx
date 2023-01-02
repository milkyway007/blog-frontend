import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'

interface Props {
	year: number
}

const YearLink: FC<Props> = ({ year }) => {
	return (
		<NavLink
			to={`/${year}`}
			className='button is-warning is-light is-normal py-1 px-2'>
			{year}
		</NavLink>
	)
}

export default YearLink
