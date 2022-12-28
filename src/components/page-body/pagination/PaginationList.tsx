import React, { FC } from 'react'
import PaginationLink from './PaginationLink'

interface Props {
	currentPage: number;
    pageCount: number;
	handleSpecificPage: (page: number) => void;
}

const PaginationList: FC<Props> = ({
	currentPage,
	pageCount,
	handleSpecificPage
}) => {
	const createPaginationLinks = () => {
		const links = []

		for (let index = 1; index <= pageCount; index++) {
			console.log(index)
			links.push(
				<PaginationLink
					key={index}
					page={index}
					isCurrent={index === currentPage}
					handleSpecificPage={handleSpecificPage} />
			)
		}

		return links
	}

	return (
		<ul className='pagination-list'>
			{createPaginationLinks()}
		</ul>
	)
}

export default PaginationList
