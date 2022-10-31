import { FunctionComponent } from 'preact/compat'
import { useState, useEffect, useRef } from 'preact/hooks'
import './styles.css'

interface Props {
	headings: { slug: string, text: string, depth: number }[]
	isMobile?: boolean
}
const TableOfContent: FunctionComponent<Props> = ({ headings }) => {
	headings = [{ slug: 'overview', text: 'Sinopsis', depth: 2 }, ...headings]
	const toc = useRef<HTMLUListElement>()
	const [open, setOpen] = useState(false)
	const [currentID, setCurrentId] = useState('overview')
	const onThisPageID = 'on-this-page-heading'
	const currentHeading = headings.find(({ slug }) => slug === currentID)

	const onLinkClick = (e) => {
		setOpen(false)
		setCurrentId(e.target.getAttribute('href').replace('#', ''))
	}

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

		document.querySelectorAll('article :is(h1, h2, h3)').forEach(h => headingsObserver.observe(h))

		return () => headingsObserver.disconnect()

	}, [toc.current])



	return (
		<details open={open} className='toc-mobile-container' onToggle={(e) => setOpen(e.target.open)}>
			<summary className="toc-mobile-header">
				<div class="toc-mobile-header-content">
					<div className="toc-toggle">
						<h2 className='heading' id={onThisPageID} >
							En está pagina
						</h2>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 1 16 16"
							width="16"
							height="16"
							aria-hidden="true"
						>
							<path
								fill-rule="evenodd"
								d="M6.22 3.22a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 010-1.06z"
							></path>
						</svg>
					</div>
					{!open && currentHeading?.slug !== 'overview' && (
						<span className="toc-current-heading">{currentHeading?.text || ''}</span>
					)}
				</div>
			</summary>
			<ul ref={toc}>
				{headings.map(({ depth, slug, text }) => (
					<li className={`header-link depth-${depth} ${currentID === slug ? 'current-header-link' : ''}`.trim()}>
						<a href={`#${slug}`} onClick={onLinkClick}>{text}</a>
					</li>
				))}
			</ul>
		</details>
	)
}


export default TableOfContent

