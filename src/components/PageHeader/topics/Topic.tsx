import React from 'react'

interface Props {
	title: string
	href: string
}

const Topic: React.FC<Props> = ({ title, href }) => {
	console.log(title)

	return (
		<a
			className='navbar-item'
			href={href}>
			{title}
		</a>
	)
}

export default Topic
