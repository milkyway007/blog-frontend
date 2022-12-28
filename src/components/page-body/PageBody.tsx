import React, { FC, useState } from 'react'

import { Post } from '../../model/post'

import { merge } from '../../utils/mergeCssClasses'

import Pagination from './pagination/Pagination'
import Posts from './post/Posts'
import YearFilter from './right-side-bar/year-filter/YearFilter'

import styles from './PageBody.module.css'
import { takePagePosts } from '../../services/pager'
import { getYearsToFilter } from '../../utils/getYearsToFilter'

interface Props {
	posts: Post[],
	pageCount: number
}

const PageContent: FC<Props> = ({ posts, pageCount }) => {
	const [page, setPage] = useState(1)
	const [yearsToFilterBy, setYearsToFilterBy] = useState(getYearsToFilter())

	const previousPageHandler = () => {
		setPage((previousState) => {
			return --previousState
		})
	}

	const nextPageHandler = () => {
		setPage((previousState) => {
			return ++previousState
		})
	}

	const specificPageHandler = (specificPage: number) => {
		setPage((previousState) => {
			previousState = specificPage

			return previousState
		})
	}

	return (
		<div className={merge('columns', styles['page-body'])}>
			<div className='column' />
			<div className='columns column is-two-thirds'>
				<div className='column is-three-quarters'>
					<Posts posts={takePagePosts(posts, page)} />
					<Pagination
						pageCount={pageCount}
						currentPage={page}
						handlePreviousPage={previousPageHandler}
						handleNextPage={nextPageHandler}
						handleSpecificPage={specificPageHandler} />
				</div>
				<div
					id='right-side-bar'
					className='column'>
					<YearFilter />
				</div>
			</div>
			<div className='column'></div>
		</div>
	)
}

export default PageContent
