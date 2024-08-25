import styled from '@emotion/styled'

interface Props {
	height?: string
	width?: string
}

const Divide = styled.div<Props>`
    height: ${({ height }) => height}px;
    width: ${({ width }) => width};
    background-color: ${({ theme }) => theme.colors.strokeSoft};
`

function DivideComponent({ height, width }: Props) {
	return (
		<Divide width={ width ? `${width}px` : '100%'} height={height || '1'} />
	)
}

export default DivideComponent
