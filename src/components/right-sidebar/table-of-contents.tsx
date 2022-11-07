import { FunctionComponent } from 'preact/compat'
import { useState, useEffect, useRef } from 'preact/hooks'
import './styles.css'

interface Props {
	headings: { slug: string; text: string; depth: number }[]
	isMobile?: boolean
}
const TableOfContent: FunctionComponent<Props> = ({ headings }) => {
	headings = [{ slug: 'overview', text: 'Sinopsis', depth: 2 }, ...headings]
	const toc = useRef<HTMLUListElement>()
	const [currentID, setCurrentId] = useState('overview')
	const onThisPageID = 'on-this-page-heading'

	useEffect(() => {
		if (!toc.current) return

		const setCurrent: IntersectionObserverCallback = (entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					const { id } = entry.target
					if (id === onThisPageID) continue
					setCurrentId(entry.target.id)
					break
				}
			}
		}

		const observerOptions: IntersectionObserverInit = {
			rootMargin: '-100px 0% -66%',
			threshold: 1,
		}

		const headingsObserver = new IntersectionObserver(setCurrent, observerOptions)

		document.querySelectorAll('article :is(h1, h2, h3)').forEach((h) => headingsObserver.observe(h))

		return () => headingsObserver.disconnect()
	}, [toc.current])

	return (
		<div>
			<div>
				<h2 class="heading" id={onThisPageID}>
					En está pagina
				</h2>
			</div>
			<ul ref={toc}>
				{headings.map(({ depth, slug, text }) => (
					<li
						className={`header-link depth-${depth} ${
							currentID === slug ? 'current-header-link' : ''
						}`.trim()}
					>
						<a href={`#${slug}`}>{text}</a>
					</li>
				))}
			</ul>
		</div>
	)
}

export default TableOfContent
