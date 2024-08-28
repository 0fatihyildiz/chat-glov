import styled from '@emotion/styled'

const Side = styled.div<{ open: boolean }>`
		background-color: ${({ theme }) => theme.colors.white80};
		box-shadow: ${({ theme }) => theme.shadows.medium}˝;
		gap: ${({ theme }) => theme.variables[10]};
		padding: ${({ theme }) => `${theme.variables[12]} ${theme.variables[16]} ${theme.variables[12]} ${theme.variables[16]}`};
		display: flex;
		flex-direction: column;
        width: 250px;
        height: 100%;
        border-radius: 24px 0 0 24px;
		overflow-y: auto;

		.head {
			width: 100%;
			display: flex;
			justify-content: end;
			align-items: center;
			margin-top: ${({ theme }) => theme.variables[12]};
			gap: ${({ theme }) => theme.variables[12]};
			margin-bottom: ${({ theme }) => theme.variables[12]};

			@media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
				margin-top: -${({ theme }) => theme.variables[16]};

				button {
					display: none;
				}
			}
		}


		@media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
			border-radius: 0;
			width: 80%;
			transform: translateX(-100%);
			opacity: 0;
			position: fixed;
			left: 0;
			z-index: 1000;
			background-color: ${({ theme }) => theme.colors.white};
			box-shadow: ${({ theme }) => theme.shadows.medium};
			transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);

			${({ open }) => open && `
				transform: translateX(0);
				opacity: 1;
			`}
		}
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
			text-elipsis: ellipsis;
			overflow: hidden;
			text-wrap: nowrap;
			widht: 100%;
			text-transform: capitalize;
			width: 100%;
			display: flex;
			align-items: center;
			align-self: stretch;
		}

		${({ disabled }) => disabled && `
			opacity: 0.5;
			pointer-events: none;
		`}

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

export { Side, SideItem }
