import { AstroGlobal } from "astro";
import { readdir } from 'node:fs/promises'
import manifest from '../config/manifest.json'


const links = manifest.routes[2].routes 

interface NavItem {
  text: string
  slug: string
}

interface LinkItem {
  text: string
  link: string
}

interface PreviousAndNext {
  previous?: LinkItem
  next: LinkItem
}
 
/**
*Este helper mira la pagina actual en global navigation Object 
*si es encontrado , retorna la paginoa before and after
*@params Astro the astro global
*@returns `previous` and `next` links if available
*/
export  function getNavLinks(Astro: AstroGlobal) {

  const index = links.findIndex(x => Astro.url.pathname.endsWith(x.path))
  const makeLink = ({title, path}) => ({text: title, link: path})

  const previous = index > 0 ? makeLink(links[index - 1]) : undefined  
  const next  = index !== -1 && index < links.length - 1 ? makeLink(links[index + 1]) : undefined 


  return {
    previous,
    next
  }


}

  // const markdownPaths =  await getMarkdownPaths(new URL('../pages/posts/', import.meta.url))
  // const markdownSlugs =  new Set(markdownPaths.map(urlToSlug))

// async function getMarkdownPaths(dir: URL, files = []) {
//   if(dir.href.at(-1) !== '/') dir.pathname += '/'
//   const entries = await readdir(dir, { withFileTypes: true})
//   await Promise.all(
//     entries.map(async entry => {
//       if(entry.isDirectory()) {
//         return await getMarkdownPaths(new URL(entry.name, dir), files)
//       } else if (entry.name.endsWith('.mdx')) {
//         files.push(new URL(entry.name, dir))
//       }
//     })
//   )

//   return files
// }


