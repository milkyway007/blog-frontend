import React from 'react'
import { NavLink } from 'react-router-dom'

interface Props {
	title: string
	href: string
}

const Topic: React.FC<Props> = ({ title, href }) => {
	return (
		<NavLink
			className='navbar-item'
			to={href}>
			{title}
		</NavLink>
	)
}

export default Topic
