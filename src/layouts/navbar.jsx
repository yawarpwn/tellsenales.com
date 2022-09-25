import { useState } from 'react'
import { ToggleMenu, MobileNavigation } from "../components/index.js"

export default function Navbar() {
  const [isDetached, setIsDetached] = useState(false)
  const [expanded, setExpanded] = useState(false)

  const toggleMobileNavigation = () =>  setExpanded(!expanded)
  console.log(expanded)

  return (
    <header className='sticky h-16 top-0 z-50'>
      <div className='w-full h-full shadow-sm flex items-center'>
        <nav className='container mx-auto flex justify-between'>
          <a href='/'>
            <h2>Logo</h2>
          </a>
          <button 
            onClick={toggleMobileNavigation}
            arial-label='menu' className='min-h-[40px] min-w-[30px]  flex items-center justify-end'>
            <ToggleMenu opened={expanded} />
          </button>
        </nav>
      </div>
      <MobileNavigation opened={expanded} />
    </header>
  )
}
