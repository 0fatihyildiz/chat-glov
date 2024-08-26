import styled from '@emotion/styled'
import type { DivideProps } from '../../../components/ui/divide'

const Divide = styled.div<DivideProps>`
    height: ${({ height }) => height}px;
    width: ${({ width }) => width};
    background-color: ${({ theme }) => theme.colors.strokeSoft};
`

export { Divide }
