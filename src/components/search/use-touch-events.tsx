import { AutocompleteApi } from "@algolia/autocomplete-core";
import { useEffect } from "preact/hooks";

interface UseTouchEventsProps {
  getEnvironmentProps: AutocompleteApi<any>['getEnvironmentProps'];
  formElement: HTMLFormElement | null 
  panelElement: HTMLDivElement | null
  inputElement: HTMLInputElement | null

}

export function useTouchEvents({
  getEnvironmentProps,
  formElement,
  panelElement,
  inputElement
}: UseTouchEventsProps) {
  useEffect(() => {

    if(!formElement || !panelElement || !inputElement ) {
      return undefined 
    }

    const { onTouchMove, onTouchStart} = getEnvironmentProps({
      inputElement,
      panelElement,
      formElement
    })

    window.addEventListener('touchstart', onTouchStart)
    window.addEventListener('touchmove', onTouchMove)

    return () => {
      window.removeEventListener('touchstart', onTouchStart)
      window.removeEventListener('touchmove', onTouchMove)
    }
  }, [])

}
