import { Icon } from '@iconify/react'
import { useEffect, useState } from 'react'
import StartChat from '../assets/images/StartChat.png'
import Information from '../components/layout/information'
import Button from '../components/ui/button'
import supabase from '../lib/supabase'
import useAuthStore from '../stores/auth'
import { Row } from '../styles/layout'
import { Container } from '../styles/layouts/default'


function General() {
	const [authenticated, setAuthenticated] = useState<boolean | undefined>(undefined)
	const { signInAnonymously, signInWithGoogle, signOut, me } = useAuthStore()

	useEffect(() => {
		const { data: authListener } = supabase.auth.onAuthStateChange((event) => {
			setAuthenticated(event === 'SIGNED_IN')
		})

		return () => {
			authListener?.subscription?.unsubscribe()
		}
	}, [])

	return (
		<Container>
			<Information
				title="Start Chat"
				description="Start a conversation with someone"
				image={StartChat}
			>
				{!authenticated && !me
					? (
							<Row gap="10px">
								<Button variant="google" onClick={signInWithGoogle}>
									<Icon icon="ri:google-fill" width={20} height={20} />
									Sign in with Google
								</Button>

								<Button variant="secondary" onClick={signInAnonymously}>
									<Icon icon="ri:user-6-line" width={20} height={20} />
									Continue Anonymously
								</Button>
							</Row>
						)
					: (
							<Button variant="secondary" onClick={signOut}>
								<Icon icon="ri:logout-box-r-line" width={20} height={20} />
								Log Out
							</Button>
						)}
			</Information>
		</Container>
	)
}

export default General
