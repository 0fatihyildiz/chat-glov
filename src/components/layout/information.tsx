import { Container } from '../../styles/components/layout/information'

interface Props {
	title: string
	description: string
	image: string
    children?: React.ReactNode
}

function InformationComponent({title, description, image, children}: Props) {
	return (
		<Container>
			<img src={image} alt={title} draggable={false} />
			<h1>{title}</h1>
			<p>{description}</p>

            {children}
		</Container>
	)
}

export default InformationComponent
