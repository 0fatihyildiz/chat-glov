import { create } from 'zustand'

export interface UserProfile {
	full_name: string | null
	id: string
	avatar_url: string | null
}

interface ChatStore {
	users: UserProfile[] | null
	setUsers: (users: UserProfile[]) => void
}

const useChatStore = create<ChatStore>(set => ({
	users: null,

	setUsers: (users: UserProfile[]) => { set({ users })},
}))

export default useChatStore
