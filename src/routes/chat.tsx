import { useCallback, useEffect, useState } from 'react'
import Input from '../components/chat/input'
import Messages from '../components/chat/messages'
import Navbar from '../components/layout/navbar'
import useCurrentId from '../hooks/useCurrentId'
import type { TableRows } from '../lib/supabase'
import supabase from '../lib/supabase'
import useAuthStore from '../stores/auth'
import type { UserProfile } from '../stores/chat'
import useChatStore from '../stores/chat'
import { Contaiener } from '../styles/pages/chat'

function Chat() {
	const currentId = useCurrentId()
	const { me } = useAuthStore()
	const { users } = useChatStore()
	const [currentAgent, setCurrentAgent] = useState<UserProfile | null>(null)
	const [chatAgent, setChatAgent] = useState<TableRows<'chat'>[] | null>(null)

	const getChatAgent = useCallback(async () => {
		if (!currentId || !me?.id)
			return null

		const { data, error } = await supabase
			.from('chat')
			.select('*')
			.eq('user_id', currentId)
			.eq('user_id', me.id)

		if (error) {
			console.error('Error fetching chat agent:', error)
			return null
		}

		setChatAgent(data || null)
	}, [currentId, me?.id])

	useEffect(() => {
		if (!users)
			return

		const agent = users.find(user => user.id === currentId)
		setCurrentAgent(agent || null)
		getChatAgent()
	}, [currentId, users, getChatAgent])

	return (
		<Contaiener>
			{currentAgent && (
				<>
					<Navbar
						name={currentAgent.full_name || `annon_${currentAgent.id.split('-')[0]}`}
						url={currentAgent.avatar_url || ''}
					/>
					<Messages data={chatAgent} />
					<Input />
				</>
			)}
		</Contaiener>
	)
}

export default Chat
