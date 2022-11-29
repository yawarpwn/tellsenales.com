import { parseAlgoliaHitHighlight  } from "@algolia/autocomplete-preset-algolia";
import { createElement, Fragment } from 'preact'

type HightlightHitParams<THit> = {
  hit: THit
  attribute: keyof THit | string[]
  tagName: string
}

export function Highlight<THit> ({ 
  hit, 
  attribute, 
  tagName = 'mark'
}: HightlightHitParams<THit>):Jsx.Element {
  return createElement(
    Fragment,
    {},
    parseAlgoliaHitHighlight<THit>({ hit, attribute}).map(
      ({value, isHighlighted}, index) => {
        if(isHighlighted) {
          return createElement(tagName, { key: index}, value)
        }
        return value
      }
    )
  )
}
