import { createPortal } from 'preact/compat'
import {useState, useEffect, useRef, useCallback} from 'preact/hooks'
export default function Autcomplete() {
  const [isOpen, setIsOpen] = useState(false)
  const searchButtonRef = useRef(document.querySelector('#docsearch-search-button'))
  const [initialQuer, setInitialQuery] = useState<string>()

  useEffect(() => {
    console.log(isOpen)
  }, [isOpen])

  const onOpen = useCallback(() => {
    setIsOpen(!isOpen)
  }, [setIsOpen] )

  useEffect(() => {
    searchButtonRef.current?.addEventListener('click', onOpen)
    return searchButtonRef.current?.removeEventListener('click', onOpen)
  }, [searchButtonRef.current, onOpen])


  if(!isOpen) return null

  return createPortal(
    <div className='fixed z-50 bg-black top-0 h-40 w-40'>MODAL</div>,
    document.body
  ) 
  
}
