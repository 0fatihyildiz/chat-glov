import { Icon } from '@iconify/react'
import { Fragment, useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { useNavigate } from 'react-router-dom'
import useCurrentId from '../../hooks/useCurrentId'
import supabase from '../../lib/supabase'
import useAuthStore from '../../stores/auth'
import Avatar from '../ui/avatar'
import Divide from '../ui/divide'
import { Side, SideItem } from '../../styles/components/layout/side'

interface SideItemProps {
	id: string
	name: string
	url?: string
	active?: boolean
}

interface UserProfile {
	full_name: string | null
	id: string
	avatar_url: string | null
}


function SideItemComponent({ name, url, id }: SideItemProps) {
	const navigate = useNavigate()
	const currentId = useCurrentId()

	return (
		<SideItem
			className={currentId === id ? 'active' : ''}
			onClick={() => navigate(`/${id}`)}
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
	const { getMe } = useAuthStore()
	const [users, setUsers] = useState<UserProfile[]>([])

	useEffect(() => {
		(async () => {
			const me = await getMe()
			const { data } = await supabase.from('profiles').select('full_name, id, avatar_url').neq('id', me?.id || uuidv4())
			setUsers(data || [])
		})()
	}, [])

	return (
		<Side>
			{ users.map(user => (
				<Fragment key={user.id}>
					<SideItemComponent
						name={user.full_name || `annon_${user.id.split('-')[0]}`}
						url={user.avatar_url || ''}
						id={user.id}
					/>
					{ users.indexOf(user) !== users.length - 1 && <Divide /> }
				</Fragment>
			)) }
		</Side>
	)
}

export default SideComponent
