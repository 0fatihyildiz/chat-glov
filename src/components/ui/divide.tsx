import { Divide } from "../../styles/components/ui/divide"

export interface DivideProps {
	height?: string
	width?: string
}

function DivideComponent({ height, width }: DivideProps) {
	return (
		<Divide width={ width ? `${width}px` : '100%'} height={height || '1'} />
	)
}

export default DivideComponent
