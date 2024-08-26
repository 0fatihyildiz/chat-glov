import type { User } from '@supabase/supabase-js'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import supabase from '../lib/supabase'

interface AuthStore {
	me: User | null
	getMe: () => Promise<User | null>
	signOut: () => Promise<void>
	signInWithGoogle: () => Promise<void>
	signInAnonymously: () => Promise<void>
}

const useAuthStore = create(
	persist<AuthStore>(
		(set, get) => ({
			me: null,
			getMe: async () => {
				const { data, error } = await supabase.auth.getUser()
				if (error)
					return null

				set({ me: data.user })

				return data.user
			},
			signOut: async () => {
				const { error } = await supabase.auth.signOut()

				if (error)
					throw error

				set({ me: null })
				window.location.reload()
			},
			signInWithGoogle: async () => {
				const { error, data } = await supabase.auth.signInWithOAuth({
					provider: 'google',
					options: {
						queryParams: {
							access_type: 'offline',
							prompt: 'consent',
						},
					},
				})

				if (error)
					throw error

				const code = new URL(data.url).searchParams.get('code')
				await supabase.auth.exchangeCodeForSession(code || '')
				get().getMe()
			},
			signInAnonymously: async () => {
				const { error } = await supabase.auth.signInAnonymously()
				if (error)
					throw error

				get().getMe()
			},
		}),
		{
			name: 'auth',
			storage: createJSONStorage(() => sessionStorage),
		},
	),
)

export default useAuthStore
