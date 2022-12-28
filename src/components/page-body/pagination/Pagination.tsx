import React, { FC } from 'react'
import PaginationButton from './PaginationButton';
import PaginationList from './PaginationList'

interface Props {
	currentPage: number;
	pageCount: number;
	handleNextPage: () => void;
	handlePreviousPage: () => void;
	handleSpecificPage: (page: number) => void;
}

const Pagination: FC<Props> = ({
	currentPage,
	pageCount,
	handleNextPage,
	handlePreviousPage,
	handleSpecificPage
}) => {
	return (
		<nav className='pagination my-6'>
			<PaginationButton title='Previous' className={'pagination-previous'} isDisabled={currentPage === 1} handlePage={handlePreviousPage}/>
			<PaginationButton title='Next page' className={'pagination-next'} isDisabled={currentPage === pageCount} handlePage={handleNextPage}/>
			<PaginationList
				currentPage={currentPage}
				pageCount={pageCount}
				handleSpecificPage={handleSpecificPage} />
		</nav>
	)
}

export default Pagination
