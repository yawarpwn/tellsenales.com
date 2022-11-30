import { createPortal } from 'preact/compat'
import { useState, useEffect, useRef } from 'preact/hooks'
import AutocompleteModal from './autocomplete-modal'
import { useSearchKeyboardEvents } from './useSearchKeyboardEvents'
import '@algolia/autocomplete-theme-classic'
import './_variables.css'
import './doc-search.css'
import './custom.css'

export default function DocSearch() {
	const [isOpen, setIsOpen] = useState(false)
	const searchButtonRef = useRef(document.querySelector('#docsearch-search-button'))
  const [initialQuery, setInitialQuery] = useState<string>()

	const onOpen = () => {
		setIsOpen(true)
	}

	const onClose = () => {
		setIsOpen(false)
	}

  const onInput = (e) => {
    setIsOpen(true)
    setInitialQuery(e.key)
  }

  useSearchKeyboardEvents({
    onOpen,
    onClose,
    onInput,
    searchButtonRef,
    isOpen
  })

	useEffect(() => {
		searchButtonRef.current?.addEventListener('click', onOpen)
		return () => searchButtonRef.current?.removeEventListener('click', onOpen)
	}, [setIsOpen])

	if (!isOpen) return null
	return createPortal(<AutocompleteModal onClose={onClose} />, document.body)
}
