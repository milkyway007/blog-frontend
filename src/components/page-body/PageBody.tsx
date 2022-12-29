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
	const [updatedPosts, setPosts] = useState(posts)
	const [updatedPageCount, setPageCount] = useState(
		posts.length.pageCount())
	const [page, setPage] = useState(1)
	const [years, setYears] = useState<number[]>(getYearsToFilter())

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

	const addYear = (year: number) => {
		setYears((previousState) => {
			const updated = [year, ...previousState]

			filterPosts(updated)

			return updated
		})
	}

	const removeYear = (year: number) => {
		setYears((previousState) => {
			const updated = previousState.remove(year)

			filterPosts(updated)

			return updated
		})
	}

	const filterPosts = (updatedYears: number[]) => {
		const updated = posts.filter((post) => {
			return updatedYears.includes(post.timestamp.getFullYear())
		})

		updatePosts(updated)
	}

	const updatePosts = (posts: Post[]) => {
		setPosts(() => {
			return [...posts]
		})

		setPageCount(() => {
			return posts.length.pageCount()
		})
	}


	return (
		<div className={merge('columns', styles['page-body'])}>
			<div className='column' />
			<div className='columns column is-two-thirds'>
				<div className='column is-three-quarters'>
					<PostsElement
						posts={
							updatedPosts
								.slice(page.beginIndex(), page.endIndex())} />
					<Pagination
						pageCount={updatedPageCount}
						currentPage={page}
						handlePreviousPage={previousPageHandler}
						handleNextPage={nextPageHandler}
						handleSpecificPage={specificPageHandler} />
				</div>
				<div
					id='right-side-bar'
					className='column'>
					<YearFilter
						years={years}
						add={addYear}
						remove={removeYear} />
				</div>
			</div>
			<div className='column'></div>
		</div>
	)
}

export default PageContent
