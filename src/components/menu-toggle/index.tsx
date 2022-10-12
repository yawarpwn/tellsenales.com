import { useState, useEffect } from 'preact/hooks'
import './styles.css'

export default function ToggleMenu() {
  const [sidebarShown, setSidebarShown] = useState(false)
  useEffect(() => {
    console.log(sidebarShown)
    const body = document.querySelector('body')
    if (sidebarShown) {
      body.classList.add('mobile-sidebar-toggle')
    } else {
      body.classList.remove('mobile-sidebar-toggle')
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
