import { create } from 'zustand'

type Suggestion = null | string
type CallbackFn = (newSuggestion: Suggestion) => void

interface AutocompleteState {
	suggestion: Suggestion
	listeners: Set<CallbackFn>
	setSuggestion: (newSuggestion: Suggestion) => void
	subscribe: (cb: CallbackFn) => () => void
}

export const useAutocompleteStore = create<AutocompleteState>((set, get) => ({
	suggestion: null,
	listeners: new Set(),
	setSuggestion: (newSuggestion: Suggestion) => {
		const { listeners } = get()
		set({ suggestion: newSuggestion })
		listeners.forEach(listener => listener(newSuggestion))
	},
	subscribe: (cb: CallbackFn) => {
		const { suggestion, listeners } = get()
		cb(suggestion)
		listeners.add(cb)
		return () => {
			listeners.delete(cb)
		}
	},
}))
