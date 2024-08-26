import { Button } from '../../styles/components/ui/button'
import { Row } from '../../styles/layout'

export interface ButtonProps {
    variant?: 'primary' | 'secondary' | 'google'
    children?: React.ReactNode
    onClick?: () => void
}

function ButtonComponent(props: ButtonProps) {
    const variant = props.variant || 'primary'

    return (
        <Button variant={variant} onClick={props.onClick}>
            <Row gap='8px'>
                {props.children}
            </Row>
        </Button>
    )
}

export default ButtonComponent
