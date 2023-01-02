import React, { FC, useState } from 'react'

import { Post } from '../../app/model/post'

import '../../app/utils/array-extensions'
import '../../app/utils/num-extensions.ts'
import { getYears } from '../../app/utils/getYearsToFilter'
import { merge } from '../../app/utils/mergeCssClasses'

import Pagination from './pagination/Pagination'
import { default as PostsElement } from './post/Posts'
import YearFilter from './right-side-bar/year-filter/YearFilter'

import styles from './PageBody.module.css'

interface Props {
	posts: Post[]
}

const PageContent: FC<Props> = ({ posts }) => {
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
					<PostsElement posts={posts} />
					<Pagination
						pageCount={posts.length.pageCount()}
						currentPage={page}
						handlePreviousPage={previousPageHandler}
						handleNextPage={nextPageHandler}
						handleSpecificPage={specificPageHandler}
					/>
				</div>
				<div
					id='right-side-bar'
					className='column'>
					<YearFilter years={getYears()} />
				</div>
			</div>
			<div className='column'></div>
		</div>
	)
}

export default PageContent
