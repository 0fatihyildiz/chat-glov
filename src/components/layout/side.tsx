import { Icon } from '@iconify/react'

import styled from '@emotion/styled'
import Avatar from '../ui/avatar'
import Divide from '../ui/divide'

interface SideItemProps {
	name: string,
	url?: string,
	active?: boolean
}

const Side = styled.div`
		background-color: ${({ theme }) => theme.colors.white80};
		box-shadow: ${({ theme }) => theme.shadows.medium}˝;
		gap: ${({ theme }) => theme.variables[10]};
		padding: ${({ theme }) => `${theme.variables[12]} ${theme.variables[16]} ${theme.variables[12]} ${theme.variables[16]}`};
		display: flex;
		flex-direction: column;
        width: 250px;
        height: 100%;
        border-radius: 24px 0 0 24px;
`

const SideItem = styled.button`
		width: 100%;
		padding: ${({ theme }) => theme.variables[6]};
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: ${({ theme }) => theme.colors.textSub};
		border-radius: ${({ theme }) => theme.variables[12]};
		position: relative;
		transition: all 0.2s;

		.detail {
			gap: ${({ theme }) => theme.variables[12]};
			font-size: ${({ theme }) => theme.variables[16]};
			font-weight: 400;
			text-overflow: ellipsis;
			text-transform: capitalize;
			width: 100%;
			display: flex;
			align-items: center;
			align-self: stretch;
		}

		svg {
			width: 24px;
			height: 24px;
			color: ${({ theme }) => theme.colors.iconPassive};
			transition: all 0.2s;
		}

		&:hover {
			color: ${({ theme }) => theme.colors.textStrong};
			background-color: rgba(0, 0, 0, 0.02);

			svg {
				color: ${({ theme }) => theme.colors.iconSoft};
			}
		}

		&.active {
			color: ${({ theme }) => theme.colors.textStrong};
			background-color: ${({ theme }) => theme.colors.primary10};

			.detail {
				font-weight: 500;
			}

			svg {
				color: ${({ theme }) => theme.colors.primary50};
			}

			&::after {
				content: '';
				position: absolute;
				left: -10px;
				width: 4px;
				height: 12px;
				background-color: ${({ theme }) => theme.colors.primary};
				border-radius: 12px;
		}
`

function SideItemComponent({ name, url, active }: SideItemProps) {
	return (
		<SideItem className={active ? 'active' : ''}>
			<div className="detail">
				<Avatar url={url} />
				{ name }
			</div>

			<Icon icon="ri:arrow-right-s-line" />
		</SideItem>
	)
}

function SideComponent() {
	return (
		<Side>
			<SideItemComponent name="Fatih" active />
			<Divide />
			<SideItemComponent name="Mahmut" />
		</Side>
	)
}

export default SideComponent
