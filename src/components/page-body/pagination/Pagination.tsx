import React, { FC } from 'react'

const Pagination: FC = () => {
	return (
		<nav className='pagination my-6'>
			<a className='pagination-previous'>Previous</a>
			<a className='pagination-next'>Next page</a>
			<ul className='pagination-list'>
				<li>
					<a className='pagination-link  is-current'>1</a>
				</li>
				<li>
					<a className='pagination-link'>2</a>
				</li>
				<li>
					<a className='pagination-link'>3</a>
				</li>
			</ul>
		</nav>
	)
}

export default Pagination
