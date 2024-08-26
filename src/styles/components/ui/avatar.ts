import type { Theme } from '@emotion/react'
import styled from '@emotion/styled'
import type { AvatarProps } from '../../../components/ui/avatar'

const getSize = (size: AvatarProps['size']) => size === 'small' ? '24px' : '33px'

function getAvatarColor(theme: Theme, color?: string) {
	const formattedColor = color ? color.charAt(0).toUpperCase() + color.slice(1) : ''
	return theme.colors[`avatar${formattedColor}` as keyof typeof theme.colors] ?? theme.colors.avatarBlue
}

const Avatar = styled.div<AvatarProps>`
    border-radius: 50%;
    border: 2px ${({ theme }) => theme.colors.white} solid;
    box-shadow: ${({ theme }) => theme.shadows.medium};
    height: ${({ size }) => getSize(size)};
    width: ${({ size }) => getSize(size)};
    background: ${({ theme, color }) => getAvatarColor(theme, color)};
    position: relative;

    svg, img {
        border-radius: 50%;
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        object-fit: cover;
        background: ${({ theme }) => theme.colors.white70};
    }
`

export { Avatar }
