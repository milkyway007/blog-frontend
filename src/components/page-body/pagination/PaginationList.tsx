import React, { FC } from 'react'

import PaginationListButton from './PaginationListButton'

interface Props {
	currentPage: number
	pageCount: number
	handleSpecificPage: (page: number) => void
}

const PaginationList: FC<Props> = ({
	currentPage,
	pageCount,
	handleSpecificPage
}) => {
	const createPaginationLinks = () => {
		const links = []

		for (let index = 1; index <= pageCount; index++) {
			links.push(
				<PaginationListButton
					key={index}
					page={index}
					isCurrent={index === currentPage}
					handleSpecificPage={handleSpecificPage}
				/>
			)
		}

		return links
	}

	return <ul className='pagination-list'>{createPaginationLinks()}</ul>
}

export default PaginationList
