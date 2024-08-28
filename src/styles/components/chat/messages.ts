/** @jsxImportSource @emotion/react */
import type { Theme } from '@emotion/react'
import { css } from '@emotion/react'

function MessagesStyle(_theme: Theme, me: boolean) {
	const messageGroupStyle = css(`
        display: flex;
        position: relative;
        height: 100%;
        gap: 8px;
        ${me ? 'flex-direction: row-reverse;' : 'flex-direction: row;'}
    `)

	const messageWrapperStyle = css(`
        display: flex;
        flex-direction: column;
        gap: 8px;
        max-width: 80%;
        width: 100%;
        overflow: hidden;
        ${me ? 'align-items: end;' : 'align-items: start;'}
    `)

	function messageStyle(loading: boolean) {
		return css(`
            transition: all 0.3s ease;
            font-size: 0.875rem;
            padding: 10px 20px;
            max-width: 100%;
            word-break: break-word;
            border-radius: 24px 24px 24px 0;
            background-color: ${me ? 'rgba(128, 0, 128, 0.2)' : 'rgba(55, 65, 81, 0.8)'};
            ${me ? 'border-radius: 24px 0 24px 24px;' : 'border-radius: 0 24px 24px 24px;'}
            ${loading ? 'opacity: 0.5;' : ''}
        `)
	}

	const avatarStyle = css(`
            display: inline-block;
            position: sticky;
            top: 0;
    `)

	return { messageGroupStyle, messageWrapperStyle, messageStyle, avatarStyle }
}

export { MessagesStyle }
