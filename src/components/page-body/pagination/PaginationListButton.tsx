import React, { FC } from 'react'

interface Props {
	page: number
	isCurrent: boolean
	handleSpecificPage: (page: number) => void
}

const PaginationLink: FC<Props> = ({ page, isCurrent, handleSpecificPage }) => {
	return (
		<li>
			<button
				className={`pagination-link ${isCurrent
					? 'is-current'
					: ''}`}
				onClick={() => {
					return handleSpecificPage(page)
				}}>
				{page}
			</button>
		</li>
	)
}

export default PaginationLink
