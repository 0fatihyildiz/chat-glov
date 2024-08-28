import { Button } from '../../styles/components/ui/button'
import { Row } from '../../styles/layout'

export interface ButtonProps {
    variant?: 'primary' | 'secondary' | 'ghost' | 'google'
    size?: 'small' | 'medium'
    children?: React.ReactNode
    onClick?: () => void
}

function ButtonComponent(props: ButtonProps) {
    const variant = props.variant || 'primary'
    const size = props.size || 'medium'

    return (
        <Button variant={variant} size={size} onClick={props.onClick}>
            <Row gap='8px'>
                {props.children}
            </Row>
        </Button>
    )
}

export default ButtonComponent
