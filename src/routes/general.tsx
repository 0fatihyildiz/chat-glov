import styled from '@emotion/styled'
import StartChat from '../assets/images/StartChat.png'
import Information from '../components/layout/information'


const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${({ theme }) => theme.variables[10]};
	width: 100%;
	height: 100%;
	justify-content: center;
	align-items: center;
`


function General() {
	return (
		<Container>
			<Information
				title='Start Chat'
				description='Start a conversation with someone'
				image={StartChat} />
        </Container>
	)
}

export default General
