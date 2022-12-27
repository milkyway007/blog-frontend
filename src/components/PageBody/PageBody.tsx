import React, { FC } from 'react'

import { Post } from '../../model/post'

import { merge } from '../../utils/mergeCssClasses'

import NoPostBox from './post/NoPostsBox'
import Posts from './post/Posts'

import styles from './PageBody.module.css'
import YearFilter from './SideBar/YearFilter'
import Pagination from './Pagination/Pagination'

interface Props {
	posts: Post[]
}

const PageContent: FC<Props> = ({ posts }) => {
	const postsEl =
		!Array.isArray(posts) || !posts.length
			? (
				<NoPostBox />
			)
			: (
				<Posts posts={posts} />
			)

	return (
		<div className={merge('columns', styles['page-body'])}>
			<div className='column' />
			<div className='columns column is-two-thirds'>
				<div className='column is-three-quarters'>
					{postsEl}
					<Pagination />
				</div>
				<div id='right-side-bar' className='column'>
					<YearFilter />
				</div>
			</div>
			<div className='column'></div>
		</div>
	)
}

export default PageContent