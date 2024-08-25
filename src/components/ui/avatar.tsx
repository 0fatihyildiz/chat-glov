import styled from '@emotion/styled'

interface Props {
	color?: typeof avatarColors[number]
	size?: 'small' | 'medium'
	url?: string
}

export const avatarColors = ['orange', 'blue', 'green', 'purple', 'red', 'yellow', 'teal', 'pink']

const Avatar = styled.div<Props>`
    border-radius: 50%;
    border: 2px ${({theme}) => theme.colors.white} solid;
    box-shadow: ${({ theme }) => theme.shadows.medium};
    height: ${({ size }) => size === 'small' ? '24px' : '33px'};
    width: ${({ size }) => size === 'small' ? '24px' : '33px'};
    background: ${({ theme, color }) => theme.colors[`avatar${String(color ? (color?.charAt(0).toUpperCase() + color?.slice(1)) : '')}` as keyof typeof theme.colors] ?? 'avatarBlue'};
    position: relative;

    svg, img {
        border-radius: 50%;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        object-fit: cover;
        position: absolute;
    }
`

function AvatarPlaceholder() {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
			<g clipPath="url(#clip0_22_18)">
				<ellipse cx="16.5" cy="31.7" rx="12.8" ry="9.6" fill="white" fillOpacity="0.72" />
				<circle opacity="0.9" cx="16.5" cy="13.3" r="6.4" fill="white" />
			</g>
			<defs>
				<clipPath id="clip0_22_18">
					<rect x="0.5" y="0.5" width="32" height="32" rx="16" fill="white" />
				</clipPath>
			</defs>
		</svg>
	)
}

function AvatarComponent({ size, color, url }: Props) {
	size = size || 'medium'
	if (!color) {
		color = avatarColors[Math.floor(Math.random() * avatarColors.length)]
	}

	return (
		<Avatar color={color} size={size}>
			<AvatarPlaceholder />
			{ url && <img draggable={false} src={url} alt="avatar" />}
		</Avatar>
	)
}

export default AvatarComponent
