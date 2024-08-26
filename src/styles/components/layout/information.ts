import styled from "@emotion/styled"

const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${({ theme }) => theme.variables[10]};
	width: 100%;
	height: 100%;
	justify-content: center;
	align-items: center;

	img {
		width: 200px;
		height: 200px;
		border: 12px solid ${({ theme }) => theme.colors.white};
		box-shadow: ${({ theme }) => theme.shadows.small};
		border-radius: 50%;
	}

	h1 {
		font-size: 24px;
		font-weight: 500;
		color: ${({ theme }) => theme.colors.textStrong};
	}

	p {
		font-size: 16px;
		color: ${({ theme }) => theme.colors.textPlaceholder};
	}
`

export { Container }