import { useState, useEffect } from 'preact/hooks'
import './styles.css'

export default function ToggleMenu() {
  const [sidebarShown, setSidebarShown] = useState(false)
  useEffect(() => {
    const body = document.querySelector('body')
    if (sidebarShown) {
      body.classList.add('mobile-sidebar-toggle')
			document.querySelectorAll('aside nav details').forEach((e) => {
				e.removeAttribute('open');
			});
    } else {
      body.classList.remove('mobile-sidebar-toggle')
			document.querySelectorAll('aside nav details').forEach((e) => {
				e.setAttribute('open', '');
			});
    }
  }, [sidebarShown])
  return (
    <button
      className='menu'
      onClick={() => setSidebarShown(!sidebarShown)}
    >
      <div className={`menu-wrap ${sidebarShown ? 'open' : ''}`}>
        <div className='line'></div>
        <div className='line'></div>
      </div>
    </button>
  )
}
