import { FC } from 'react'

import { Post } from '../../model/post'

import { merge } from '../../utils/mergeCssClasses'

import { default as PostComponent } from './post/Post'

import styles from './PageContent.module.css'

interface Props {
	posts: Post[]
}

const PageContent: FC<Props> = ({ posts }) => {
	return (
		<div className={merge('columns', styles.columns)}>
			<div className='column'></div>
			<div className='column is-two-thirds'>
				<ul className='column is-three-quarters'>
					{posts.map((p) => {
						return (
							<PostComponent
								key={p.id.toString()}
								title={p.title}
								abstract={p.abstract}
								topic={p.topic}
							/>
						)
					})}
				</ul>
				<div className='column'></div>
			</div>
			<div className='column'></div>
		</div>
	)
}

export default PageContent
