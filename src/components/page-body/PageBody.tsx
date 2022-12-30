import React, { FC, useState } from 'react'

import { Post } from '../../model/post'

import { merge } from '../../utils/mergeCssClasses'

import Pagination from './pagination/Pagination'
import { default as PostsElement } from './post/Posts'
import YearFilter from './right-side-bar/year-filter/YearFilter'

import '../../utils/array-extensions'

import styles from './PageBody.module.css'
import { getYearsToFilter } from '../../utils/getYearsToFilter'

interface Props {
	posts: Post[],
}

const PageContent: FC<Props> = ({ posts }) => {
	console.log(posts)
	const [page, setPage] = useState(1)

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
					<PostsElement
						posts={posts} />
					<Pagination
						pageCount={posts.length.pageCount()}
						currentPage={page}
						handlePreviousPage={previousPageHandler}
						handleNextPage={nextPageHandler}
						handleSpecificPage={specificPageHandler} />
				</div>
				<div
					id='right-side-bar'
					className='column'>
					<YearFilter
						years={getYearsToFilter()} />
				</div>
			</div>
			<div className='column'></div>
		</div>
	)
}

export default PageContent
