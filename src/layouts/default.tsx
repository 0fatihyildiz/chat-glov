import styled from '@emotion/styled'
import { Outlet } from 'react-router-dom'
import Side from '../components/layout/side'

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 500px;
    border-radius: ${({ theme }) => theme.variables[16]};

    .content {
        width: 500px;
        height: 100%;
        background-color: ${({ theme }) => theme.colors.white80};
        box-shadow: ${({ theme }) => theme.shadows.medium};
        border-radius: 0 24px 24px 0;
    }

    .side {
        width: 250px;
        height: 100%;
        background-color: ${({ theme }) => theme.colors.white80};
        box-shadow: ${({ theme }) => theme.shadows.medium}˝;
        border-radius: 24px 0 0 24px;

    }
`

function Default() {
	return (
		<Container>
            <Side />

			<div className="content">
				<Outlet />
			</div>
		</Container>
	)
}

export default Default
