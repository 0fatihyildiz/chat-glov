import { Icon } from '@iconify/react'
import { Fragment, useEffect, useRef } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { useNavigate } from 'react-router-dom'
import { useOnClickOutside } from 'usehooks-ts'
import useCurrentId from '../../hooks/useCurrentId'
import supabase from '../../lib/supabase'
import useAuthStore from '../../stores/auth'
import useChatStore from '../../stores/chat'
import useUIStore from '../../stores/ui'
import { Side, SideItem } from '../../styles/components/layout/side'
import Avatar from '../ui/avatar'
import Divide from '../ui/divide'
import Button from '../ui/button'

interface SideItemProps {
	id: string
	name: string
	url?: string
	active?: boolean
	disabled?: boolean
}


function SideItemComponent({ name, url, id, disabled }: SideItemProps) {
	const navigate = useNavigate()
	const currentId = useCurrentId()

	return (
		<SideItem
			className={currentId === id ? 'active' : ''}
			onClick={() => navigate(`/${id}`)}
			disabled={disabled}
		>
			<div className="detail">
				<Avatar url={url} name={name || `annon_${id.split('-')[0]}`} />
				{ name }
			</div>

			<Icon icon="ri:arrow-right-s-line" />
		</SideItem>
	)
}

function SideComponent() {
	const { getMe, me } = useAuthStore()
	const { users, setUsers } = useChatStore()
	const { sideOpen, setSideOpen } = useUIStore()
	const sideRef = useRef(null)


	useOnClickOutside(sideRef, () => setSideOpen(false))

	useEffect(() => {
		(async () => {
			const me = await getMe()
			const { data } = await supabase.from('profiles').select('full_name, id, avatar_url').neq('id', me?.id || uuidv4())
			setUsers(data || [])
		})()
	}, [])

	return (
		<Side open={sideOpen} ref={sideRef}>
			<div className='head'>
				<Button onClick={() => setSideOpen(false)} variant='secondary' size='small'>
					<Icon icon="ri:arrow-left-s-line" />
				</Button>
			</div>
			{ users?.map(user => (
				<Fragment key={user.id}>
					<SideItemComponent
						name={user.full_name || `annon_${user.id.split('-')[0]}`}
						url={user.avatar_url || ''}
						id={user.id}
						disabled={!me?.id}
					/>
					{ users.indexOf(user) !== users.length - 1 && <Divide /> }
				</Fragment>
			)) }
		</Side>
	)
}

export default SideComponent
