import { Icon } from '@iconify/react/dist/iconify.js'
import { Navbar } from '../../styles/components/layout/navbar'
import Avatar from '../ui/avatar'
import Button from '../ui/button'
import useUIStore from '../../stores/ui'

interface Props {
	name: string
	url?: string
	active?: boolean
}

function NavbarComponent({ url, name }: Props) {
	const { sideOpen, setSideOpen } = useUIStore()

	return (
		<Navbar>
			<Button onClick={() => setSideOpen(!sideOpen)} size='small' variant='secondary'>
				<Icon icon="ri:menu-line" />
			</Button>
			<Avatar url={url} name={name} />
			{name}
		</Navbar>
	)
}

export default NavbarComponent
