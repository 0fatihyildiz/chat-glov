import { useEffect } from 'react'
import Navbar from '../components/layout/navbar'
import useCurrentId from '../hooks/useCurrentId'
import supabase from '../lib/supabase'
import { Contaiener } from '../styles/pages/chat'

function Chat() {
	const currentId = useCurrentId()

	async function getChatAgent() {
		const {	data, error } = await supabase.from('profiles').select('*, chat_messages(*)').eq('id', currentId || '')

		if (error)
			return null

		return data
	}

	useEffect(() => {
		getChatAgent()
	}, [currentId])

	return (
		<Contaiener>
			<Navbar name="fatih" />
		</Contaiener>
	)
}

export default Chat
