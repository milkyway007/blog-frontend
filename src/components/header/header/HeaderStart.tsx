import merge from '../../../utils/mergeCssClasses'

const containerStyle = {
	margin: '0',
}

const linkStyle = {
	backgroundColor: 'hsl(0, 0%, 21%)',
}

interface Props {
	header: string
}

const HeaderStart: React.FC<Props> = ({ header }) => {
	return (
		<div
			className={merge('navbar-start', 'is-size-1', 'has-text-weight-bold')}
			style={containerStyle}>
			<a
				className={'navbar-item'}
				href='/'
				style={linkStyle}>
				<div>{header}</div>
			</a>
		</div>
	)
}

export default HeaderStart