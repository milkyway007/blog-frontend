import React, { FC } from 'react'

import { Post } from '../../model/post'

import { merge } from '../../utils/mergeCssClasses'

import Pagination from './pagination/Pagination'
import Posts from './post/Posts'
import YearFilter from './right-side-bar/year-filter/YearFilter'

import styles from './PageBody.module.css'

interface Props {
	posts: Post[]
}

const PageContent: FC<Props> = ({ posts }) => {
	return (
		<div className={merge('columns', styles['page-body'])}>
			<div className='column' />
			<div className='columns column is-two-thirds'>
				<div className='column is-three-quarters'>
					<Posts posts={posts} />
					<Pagination />
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
