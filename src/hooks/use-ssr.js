import { useState, useEffect } from 'react'

const isBrowser = () => {
  return Boolean(
    typeof window !== 'undefined' &&
      window.document &&
      window.document.createElement
  )
}

export default function useSSR() {
  const [browser, setBrowser] = useState(false)

  useEffect(() => {
  setBrowser(isBrowser())
  }, [])

  return {
    isBrowser: browser,
    isServer: !browser,
  }
}
