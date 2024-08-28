/** @jsxImportSource @emotion/react */

import { useTheme } from '@emotion/react'
import { Icon } from '@iconify/react'
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import type { MenuOption as BaseMenuOption, MenuTextMatch } from '@lexical/react/LexicalTypeaheadMenuPlugin'
import { LexicalTypeaheadMenuPlugin } from '@lexical/react/LexicalTypeaheadMenuPlugin'
import { useCallback, useMemo, useState } from 'react'
import { chatInput } from '../../styles/components/chat/input'
import { clearEditorSkipCollab } from '.'

interface MenuOption extends BaseMenuOption {
	label: string
	isSelected?: boolean
}

interface MenuItemProps {
	option: MenuOption
	onMouseEnter: () => void
	onMouseDown: () => void
	optionIndex: number
	isSelected: boolean
}

function TypeHeadMenu() {
	const theme = useTheme()
	const { typeHeadMenuStyle, typeHeadMenuItemStyle } = chatInput(theme)
	const [query, setQuery] = useState<MenuOption[]>([])
	const [root] = useLexicalComposerContext()

	const regex = /^\/([a-z]+\s\w+|[a-z]+)\s*$/i

	const options: MenuOption[] = useMemo(() => [
		{ label: 'Image', value: 'image', key: 'image', setRefElement: () => null },
		{ label: 'Select', value: 'select', key: 'select', setRefElement: () => null },
	], [])

	const onQueryChange = useCallback((matchingString: string | null) => {
		if (!matchingString)
			return
		const queryOption = options.filter(option =>
			option.label.toLowerCase().startsWith(matchingString.toLowerCase()) || true,
		) || options
		setQuery(queryOption)
	}, [])

	const onSelectOption = useCallback((option: MenuOption) => {
		if (option.key === 'image') {
			console.log('Image selected')
			clearEditorSkipCollab(root)
		}

		if (option.key === 'select') {
			console.log('Select selected')
			clearEditorSkipCollab(root)
		}
	}, [])

	const triggerFn = useCallback((text: string): MenuTextMatch | null => {
		const match = text.match(regex)
		console.log('match', match)
		return match ? { leadOffset: match.index || 0, matchingString: match[0], replaceableString: match[1] } : null
	}, [])

	const MenuItem = useCallback(({ option, isSelected, onMouseDown, onMouseEnter }: MenuItemProps) => {
		return (
			<div
				css={typeHeadMenuItemStyle(isSelected)}
				onMouseEnter={onMouseEnter}
				onMouseDown={onMouseDown}
			>
				<Icon icon="ri:slash-commands-2" height={16} width={16} />

				{option.label}
			</div>
		)
	}, [theme])

	return (
		<LexicalTypeaheadMenuPlugin
			options={options}
			onQueryChange={onQueryChange}
			onSelectOption={onSelectOption}
			onOpen={resolution => console.log('Menu opened:', resolution)}
			commandPriority={4}
			menuRenderFn={(_anchorElementRef, { selectedIndex, selectOptionAndCleanUp, setHighlightedIndex }) => (

				<div
					css={typeHeadMenuStyle}
				>
					{query.length
						? query.map((option, index) => (
							<MenuItem
								key={option.key}
								option={option}
								onMouseEnter={() => setHighlightedIndex(index)}
								onMouseDown={() => selectOptionAndCleanUp(option)}
								optionIndex={index}
								isSelected={selectedIndex === index}
							/>
						))
						: (
								<div className="not-found" style={{ padding: '10px' }}>
									<Icon icon="ri:slash-commands-2" height={16} width={16} />
									No results found
								</div>
							)}
				</div>
			)}
			triggerFn={triggerFn}
		/>
	)
}

export default TypeHeadMenu
