import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import DefaultLayout from '../layouts/default'
import Chat from './chat'
import General from './general'
import NotFound from './notFound'

type RouteType = typeof routes[keyof typeof routes] & {
	children?: Record<string, RouteType>
}

export const routes = {
	general: {
		path: '/',
		element: <General />,
		label: 'General',
	},
	chat: {
		path: '/:userId',
		element: <Chat />,
		label: 'Chat',
	},
	notFound: {
		path: '*',
		element: <NotFound />,
		label: 'Not Found',
	},
}

function App() {
	return (
		<Router>
			<Routes>
				<Route
					path="/"
					element={<DefaultLayout />}
				>
					{Object.values(routes).map((route: RouteType) => (
						<Route
							key={route.path}
							path={route.path}
							element={route.element}
						>
							{route.children
							&& Object.values(route.children).map((childRoute: RouteType) => (
								<Route
									key={childRoute.path}
									path={childRoute.path}
									element={childRoute.element}
								/>
							))}
						</Route>
					))}
				</Route>
			</Routes>
		</Router>
	)
}

export default App
