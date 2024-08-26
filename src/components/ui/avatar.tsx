import { key } from '../../lib/random'
import { Avatar } from '../../styles/components/ui/avatar'

export interface AvatarProps {
	color?: typeof avatarColors[number]
	size?: 'small' | 'medium'
	url?: string
	name?: string
}

export const avatarColors = ['orange', 'blue', 'green', 'purple', 'red', 'yellow', 'teal', 'pink']

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

function AvatarComponent({ size, color, url, name }: AvatarProps) {
	size = size || 'medium'

	if (!color) {
		color = avatarColors[key(name || '', 0, avatarColors.length - 1)]
	}

	return (
		<Avatar color={color} size={size}>
			<AvatarPlaceholder />
			{ url && <img draggable={false} src={url} alt="avatar" />}
		</Avatar>
	)
}

export default AvatarComponent
