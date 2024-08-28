/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react'
import type { TableRows } from '../../lib/supabase'
import useAuthStore from '../../stores/auth'
import { MessagesStyle } from '../../styles/components/chat/messages'
import { timeAgo } from '../../lib/chat'

function Messages({ data }: { data: TableRows<'chat'>[] | null }) {
	const theme = useTheme()
	const { me } = useAuthStore()
	const { messageGroupStyle, messageWrapperStyle, messageStyle } = MessagesStyle(theme, !!me)

	return (
		<div css={messageGroupStyle}>
			<div css={messageWrapperStyle}>
				{data?.map(messages => (
					<div
						key={messages.id}
						data-current-time={timeAgo(messages.created_at)}
						css={messageStyle(!!messages.message)}
						dangerouslySetInnerHTML={{ __html: messages.message || '' }}
					/>
				))}
			</div>
		</div>
	)
}

export default Messages
