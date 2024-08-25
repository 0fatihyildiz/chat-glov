import styled from '@emotion/styled'
import { Outlet } from 'react-router-dom'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 500px;
    width: 100%;
    background-color: #f0f0f0;
`

function Default() {
	return (
		<Container>
            <Outlet />
        </Container>
	)
}

export default Default
