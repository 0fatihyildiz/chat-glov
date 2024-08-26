import { Navbar } from '../../styles/components/layout/navbar'
import Avatar from '../ui/avatar'

interface Props {
	name: string
	url?: string
	active?: boolean
}

function NavbarComponent({ url, name }: Props) {
	return (
		<Navbar>
			<Avatar url={url} />
			{name}
		</Navbar>
	)
}

export default NavbarComponent
