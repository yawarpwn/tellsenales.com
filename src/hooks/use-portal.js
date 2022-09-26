import { useState, useEffect } from 'react'

import { getId } from '../utils/collections'
import useSSR from './use-ssr'

const createElement = id => {
  const el = document.createElement('div')
  el.setAttribute('id', id)
  return el
}

export default function usePortal(selectId = getId(), getContainer) {
  const id = `tellsenales-${selectId}`
  const { isBrowser } = useSSR()
  const [elSnapshot, setElSnapshot] = useState(
    isBrowser ? createElement(id) : null
  )

  useEffect(() => {
    const customContainer = getContainer ? getContainer() : null
    const parentElement = customContainer || document.body
    const hasElement = parentElement.querySelector(`#${id}`)
    const el = hasElement || createElement(id)

    if (!hasElement) {
      parentElement.appendChild(el)
    }

    setElSnapshot(el)
  }, [])

  return elSnapshot
}
