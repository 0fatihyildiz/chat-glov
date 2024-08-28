import styled from '@emotion/styled'
import type { ButtonProps } from '../../../components/ui/button'

const Button = styled.button<ButtonProps>`
    font-weight: 500;
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.2s;
    box-shadow: ${({ theme }) => theme.shadows.small};

    ${({ size }) => size === 'small' && `
        padding: 8px 16px;
        font-size: 12px;
    `}

    ${({ size }) => size === 'medium' && `
        padding: 12px 24px;
        font-size: 14px;
    `}

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

    ${({ variant, theme }) => variant === 'ghost' && `
        background-color: transparent;
        color: ${theme.colors.textSub};
        border: none;

        &:hover {
            color: ${theme.colors.textStrong};
            background-color: rgba(0, 0, 0, 0.05);
        }
    `}

    ${({ variant, theme }) => variant === 'google' && `
        background-color: ${theme.colors.blue};
        color: ${theme.colors.white};
    `}
`

export { Button }
