import React, { FC } from 'react'

interface Props {
	title: string
	className: string
	isDisabled: boolean
	handlePage: () => void
}

const PaginationButton: FC<Props> = ({
	title,
	className,
	isDisabled,
	handlePage
}) => {
	return (
		<button
			className={className}
			onClick={() => {
				return handlePage()
			}}
			disabled={isDisabled}>
			{title}
		</button>
	)
}

export default PaginationButton
