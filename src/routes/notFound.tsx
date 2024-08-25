import Information from '../components/layout/information'
import NotFoundPNG from '../assets/images/NotFound.png'

function NotFound() {
	return (
		<Information
			title='Not Found'
			description='The specified user could not be found.'
			image={NotFoundPNG} />
	)
}

export default NotFound
