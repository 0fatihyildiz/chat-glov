interface Chat {
	message: string
	created_at: string
	avatar_url: any
	user_id: string
	loading: boolean
}

type GroupedMessages = [string, Chat[]]

function timeAgo(time: string) {
	const date = new Date(time)
	return new Intl.RelativeTimeFormat('en', { numeric: 'auto' }).format(
		(date.getTime() - new Date().getTime()) / 1000 / 60,
		'minute',
	)
}

function createKey(str1: string, str2: string) {
	const sortedStrings = [str1, str2].sort()
	return sortedStrings.join('-')
}

function groupMessages(messages: Chat[]): GroupedMessages[] {
	if (!messages)
		return []

	messages.sort(
		(a, b) =>
			new Date(a.created_at).getTime() - new Date(b.created_at).getTime(),
	)

	const userMessages: GroupedMessages[] = []
	let currentGroup: GroupedMessages | null = null

	for (const message of messages) {
		const { user_id } = message

		if (!currentGroup || currentGroup[0] !== user_id) {
			currentGroup = [user_id!, [message]]
			userMessages.push(currentGroup)
		}
		else {
			currentGroup[1].push(message)
		}
	}

	return userMessages
}

export { createKey, groupMessages, timeAgo }
export type { Chat, GroupedMessages }

