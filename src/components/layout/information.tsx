import styled from '@emotion/styled'

interface Props {
	title: string
	description: string
	image: string
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${({ theme }) => theme.variables[10]};
	width: 100%;
	height: 100%;
	justify-content: center;
	align-items: center;

	img {
		width: 200px;
		height: 200px;
		border: 12px solid ${({ theme }) => theme.colors.white};
		box-shadow: ${({ theme }) => theme.shadows.small};
		border-radius: 50%;
	}

	h1 {
		font-size: 24px;
		font-weight: 500;
		color: ${({ theme }) => theme.colors.textStrong};
	}

	p {
		font-size: 16px;
		color: ${({ theme }) => theme.colors.textPlaceholder};
	}
`

function InformationComponent({title, description, image}: Props) {
	return (
		<Container>
			<img src={image} alt={title} draggable={false} />
			<h1>{title}</h1>
			<p>{description}</p>
		</Container>
	)
}

export default InformationComponent
