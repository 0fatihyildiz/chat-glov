import styled from '@emotion/styled'
import type { ButtonProps } from '../../../components/ui/button'

const Button = styled.button<ButtonProps>`
    padding: 12px 24px;
    font-size: 14px;
    font-weight: 500;
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.2s;
    box-shadow: ${({ theme }) => theme.shadows.small};

    ${({ variant, theme }) => variant === 'primary' && `
        background-color: ${theme.colors.primary};
        color: ${theme.colors.white};
    `}
    ${({ variant, theme }) => variant === 'secondary' && `
        background-color: ${theme.colors.white};
        border: 1px solid ${theme.colors.bgSoft};
        color: ${theme.colors.textSub};

        &:hover {
            color: ${theme.colors.textStrong};
        }
    `}
    ${({ variant, theme }) => variant === 'google' && `
        background-color: ${theme.colors.blue};
        color: ${theme.colors.white};
    `}

    `

export { Button }
