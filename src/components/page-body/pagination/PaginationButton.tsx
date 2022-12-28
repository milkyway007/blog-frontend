import React, { FC } from 'react'

interface Props {
    title: string;
	isDisabled: boolean;
	handlePage: () => void;
}

const PaginationButton: FC<Props> = ({
	title,
	isDisabled,
	handlePage
}) => {
	return (
		<button
			className='pagination-previous'
			onClick={() => {
				return handlePage()
			}}
			disabled={isDisabled}>{title}</button>
	)
}

export default PaginationButton
