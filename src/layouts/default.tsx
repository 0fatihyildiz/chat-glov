import { Outlet } from 'react-router-dom'
import Side from '../components/layout/side'
import { Container } from '../styles/layouts/default'

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
