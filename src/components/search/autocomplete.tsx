import { autocomplete } from '@algolia/autocomplete-js'
import { useEffect, useRef } from 'preact/hooks'
import { createElement, render, Fragment } from 'preact'

export default function Autocomplete(props) {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) {
      return undefined
    }

    const search = autocomplete({
      container: containerRef.current,
      placeholder: 'Buscar Producto',
      defaultActiveItemId: 0,
      renderer: { createElement , Fragment, render },
      ...props
    })


    return () => {
      search.destroy()
    }
  }, [props])

  return <div ref={containerRef} />
}
