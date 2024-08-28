/** @jsxImportSource @emotion/react */

import { useTheme } from '@emotion/react'
import { Icon } from '@iconify/react'
import { $generateHtmlFromNodes } from '@lexical/html'
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import { COMMAND_PRIORITY_LOW, KEY_ENTER_COMMAND, type LexicalEditor } from 'lexical'
import React, { useCallback, useEffect } from 'react'
import Button from '../../components/ui/button'
import { chatInput } from '../../styles/components/chat/input'
import { clearEditorSkipCollab } from '.'

interface Props {
	onMessage: (message: string) => void
}

const SendMessage: React.FC<Props> = ({ onMessage }) => {
	const theme = useTheme()
	const { inputActionStyle } = chatInput(theme)
	const [editor] = useLexicalComposerContext()

	const clearHTMLTags = useCallback((strToSanitize: string) => {
		return strToSanitize.replace(/(<([^>]+)>)/g, '').replace(/(:\S+:)/g, (match) => {
			return ` ${match} `
		})
	}, [])

	const generateHtmlFromNodes = useCallback(
		(editor: LexicalEditor) => {
			let htmlString = ''

			editor.read(() => {
				htmlString = $generateHtmlFromNodes(editor as any)
			})

			return clearHTMLTags(htmlString)
		},
		[clearHTMLTags],
	)

	const sendData = useCallback(async () => {
		const htmlResult = generateHtmlFromNodes(editor)
		onMessage(htmlResult)
		clearEditorSkipCollab(editor)
	}, [editor, generateHtmlFromNodes, onMessage])

	useEffect(() => {
		const unregisterCommand = editor.registerCommand(
			KEY_ENTER_COMMAND,
			(_event: KeyboardEvent) => {
				sendData()
				return false
			},
			COMMAND_PRIORITY_LOW,
		)

		return () => unregisterCommand()
	}, [editor, sendData])

	return (
		<div css={inputActionStyle}>
			<Button variant="ghost" size="small" onClick={sendData}>
				<Icon icon="ri:send-plane-line" height={18} width={18} />
			</Button>
		</div>
	)
}

export default SendMessage
