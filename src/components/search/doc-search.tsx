import { createPortal } from 'preact/compat'
import { useState, useEffect, useRef } from 'preact/hooks'
import DocSearchModal from './doc-search-modal'
import './doc-search.css'

export default function DocSearch() {
	const [isOpen, setIsOpen] = useState(false)
	const buttonRef = useRef(document.querySelector('#docsearch-search-button'))

	const onOpen = () => {
		setIsOpen(true)
	}

	const onClose = () => {
		setIsOpen(false)
	}

	useEffect(() => {
		buttonRef.current?.addEventListener('click', onOpen)
		return () => buttonRef.current?.removeEventListener('click', onOpen)
	}, [setIsOpen])

	if (!isOpen) return null
	return createPortal(<DocSearchModal onClose={onClose} />, document.body)
}
