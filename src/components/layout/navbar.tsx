import styled from '@emotion/styled'
import Avatar from '../ui/avatar'

interface Props {
	name: string,
	url?: string,
	active?: boolean
}

const Navbar = styled.div`
    display: flex;
    width: 100%;
    height: 50px;
    padding: 6px 4px;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    text-transform: capitalize;
    border-bottom: 1px solid ${({ theme }) => theme.colors.strokeSoft};
`

function NavbarComponent({ url, name }: Props) {
	return (
		<Navbar>
			<Avatar url={url} />
            {name}
		</Navbar>
	)
}

export default NavbarComponent
