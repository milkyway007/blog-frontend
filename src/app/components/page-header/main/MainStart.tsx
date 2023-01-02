import React from 'react'
import { NavLink } from 'react-router-dom'

const containerStyle = { margin: '0' }
const linkStyle = { backgroundColor: 'hsl(0, 0%, 21%)' }

interface Props {
	header: string
}

const MainStart: React.FC<Props> = ({ header }) => {
	return (
		<div
			className='navbar-start is-size-1 has-text-weight-bold'
			style={containerStyle}>
			<NavLink
				className={'navbar-item'}
				to='/'
				style={linkStyle}>
				<div>{header}</div>
			</NavLink>
		</div>
	)
}

export default MainStart
