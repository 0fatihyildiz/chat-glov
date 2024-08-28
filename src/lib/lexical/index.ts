import type { LexicalEditor } from 'lexical'
import { $getRoot } from 'lexical'

function clearEditorSkipCollab(editor: LexicalEditor) {
	editor.update(
		() => {
			const root = $getRoot()
			root.clear()
			root.select()
		},
		{
			tag: 'skip-collab',
		},
	)
}

export { clearEditorSkipCollab }
