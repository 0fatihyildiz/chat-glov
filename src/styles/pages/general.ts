import styled from "@emotion/styled";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${({ theme }) => theme.variables[10]};
	width: 100%;
	height: 100%;
	justify-content: center;
	align-items: center;
`

export { Container }