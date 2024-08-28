/** @jsxImportSource @emotion/react */

import { useTheme } from '@emotion/react'
import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin'
import type { InitialConfigType } from '@lexical/react/LexicalComposer'
import { LexicalComposer } from '@lexical/react/LexicalComposer'
import { ContentEditable } from '@lexical/react/LexicalContentEditable'
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary'
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin'
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin'
import { AutocompleteNode } from '../../lib/lexical/autocompleteNode'
import AutocompletePlugin from '../../lib/lexical/autocompletePlugin'
import TypeHeadMenu from '../../lib/lexical/typeHeadMenu'
import { chatInput } from '../../styles/components/chat/input'
import SendMessage from '../../lib/lexical/sendMessage'

function onError() {
}

function Input() {
	const theme = useTheme()
	const { contentEditableStyle, placeholderStyle, inputWrapperStyle } = chatInput(theme)

	const initialConfig: InitialConfigType = {
		namespace: 'ChatInput',
		theme,
		onError,
		nodes: [AutocompleteNode],
	}

	function handleSendMessage(message: string) {
		console.log(message)
	}

	return (
		<div css={inputWrapperStyle}>
			<LexicalComposer initialConfig={initialConfig}>
				<RichTextPlugin
					contentEditable={<ContentEditable css={contentEditableStyle} />}
					placeholder={<div css={placeholderStyle}>Write anything...</div>}
					ErrorBoundary={LexicalErrorBoundary}
				/>
				<HistoryPlugin />
				<AutoFocusPlugin />
				<AutocompletePlugin />
				<TypeHeadMenu />
				<SendMessage onMessage={handleSendMessage} />
			</LexicalComposer>

		</div>
	)
}

export default Input
