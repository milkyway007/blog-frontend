interface Props {
	header: string
}
const Topic: React.FC<Props> = ({ header }) => {
	return <a className='navbar-item'>{header}</a>
}

export default Topic
