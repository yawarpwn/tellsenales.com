import { RefObject } from "preact";
import { useEffect } from "preact/hooks";

export interface UseSearchKeyboardEventsProps {
  isOpen: boolean
  onClose: () => void
  onOpen: () => void
  onInput?: (e: KeyboardEvent) => void
  searchButtonRef?: RefObject<HTMLButtonElement>
}

function isEditingContent(e: KeyboardEvent): boolean {
  const element = e.target as HTMLElement
  const tagName = element.tagName
  return (
    element.isContentEditable ||
    tagName === 'INPUT' ||
    tagName === 'SELECT' ||
    tagName === 'TEXTAREA'
  )
}

export function useSearchKeyboardEvents({
  isOpen,
  onClose,
  onInput,
  onOpen,
  searchButtonRef
}: UseSearchKeyboardEventsProps) {
  useEffect(() => {

    function onKeyDown(event: KeyboardEvent) {
      function open() {
        if (!document.body.classList.contains('DocSearch--active')) {
          onOpen()
        }
      }

      if (
        event.keyCode === 27 && isOpen ||
        event.key.toLowerCase() === 'k' && (event.metaKey || event.ctrlKey) ||
        (isEditingContent(event) && event.key === '/' && !isOpen)
      ) {
        event.preventDefault()
        if (isOpen) {
          onClose()
        } else if (!document.body.classList.contains('DocSearch--active')) {
          open()
        }
      }

      if (searchButtonRef &&
        searchButtonRef.current === document.activeElement &&
        onInput
      ) {

        if (/[a-zA-Z0-9]/.test(String.fromCharCode(event.keyCode))) {
          onInput(event)
        }

      }

    }

    window.addEventListener('keydown', onKeyDown)

    return () => window.removeEventListener('keydown', onKeyDown)

  }, [isOpen, onInput, onClose, onOpen, searchButtonRef])

}
