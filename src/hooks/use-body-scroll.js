import { useEffect, useRef, useState } from 'react'

const defaultOptions = {
  scrollLayer: false,
}

const elementStack = new Map()

const isIos = () => {
  /* istanbul ignore next */
  if (typeof window === 'undefined' || !window.navigator) return false

  return /iP(ad|hone|od)/.test(window.navigator.platform)
}

const touchHandler = event => {
  if (event.touches && event.touches.length > 1) return true
  event.preventDefault()

  return false
}

const useBodyScroll = (elementRef, options) => {
  /* istanbul ignore next */
  if (typeof document === 'undefined') return [false, t => t]
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const elRef = elementRef || useRef(document.body)
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [hidden, setHidden] = useState(false)
  const safeOptions = {
    ...defaultOptions,
    ...(options || {}),
  }

  // don't prevent touch event when layer contain scroll
  const isIosWithCustom = () => {
    if (safeOptions.scrollLayer) return false

    return isIos()
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (!elRef || !elRef.current) return
    const lastOverflow = elRef.current.style.overflow

    if (hidden) {
      if (elementStack.has(elRef.current)) return
      if (!isIosWithCustom()) {
        elRef.current.style.overflow = 'hidden'
      } else {
        document.addEventListener('touchmove', touchHandler, {
          passive: false,
        })
      }
      elementStack.set(elRef.current, {
        last: lastOverflow,
      })

      return
    }

    // reset element overflow
    if (!elementStack.has(elRef.current)) return
    if (!isIosWithCustom()) {
      const store = elementStack.get(elRef.current)

      elRef.current.style.overflow = store.last
    } else {
      document.removeEventListener('touchmove', touchHandler)
    }
    elementStack.delete(elRef.current)
  }, [hidden, elRef])

  return [hidden, setHidden]
}

export default useBodyScroll
