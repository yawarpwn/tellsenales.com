import { useEffect, useState } from 'react'
import { ToggleMenu, MobileNavigation } from "../components/index.js"
import { useMediaQuery } from '../hooks/use-media-query'
import useBodyScroll from '../hooks/use-body-scroll'
import Logo from '../components/logo'

export default function Navbar() {
  const [expanded, setExpanded] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)
  const isMobile = useMediaQuery(960)
  const [_, setBodyHidden ] = useBodyScroll(null, { scrollLayer: true})

  console.log(scrollPosition)

  const onScroll = () => {
    setScrollPosition(scrollY)
  }

  const toggleMobileNavigation = () => {
    setExpanded(!expanded)
    setBodyHidden(true)
  }  

  useEffect(() => {
    setScrollPosition((typeof window !== 'undefined' && window.scrollY) || 0)
    window.addEventListener('scroll', onScroll)
    return () =>  window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if(!isMobile) {
      setExpanded(false)
      setBodyHidden(false)
    }
  }, [isMobile])

  const isDetached = scrollPosition > 10


  return (
    <header className='sticky h-16 top-0 z-50'>
      <div className={`w-full h-full flex items-center ${isDetached ? 'shadow-sm bg-white/10 backdrop-blur-[10px] backdrop-saturate-[180%]' : 'bg-transparent shadow-none'}`}>
        <nav className='container mx-auto flex justify-between'>
          <a href='/'>
            <Logo />
          </a>

           {/*Desktop Navigation */}
          <div className='hidden md:flex items-center '>
            <ul className='flex gap-8'>
              <a href='/seguridad'>
                <li>Seguridad</li>
              </a>
              <a href='/senales'>
                <li>Senales</li>
              </a>
            </ul>
          </div>
          <button 
            onClick={toggleMobileNavigation}
            aria-label='menu' className='min-h-[40px] min-w-[30px]  flex items-center justify-end'>
            <ToggleMenu expanded={expanded} />
          </button>
        </nav>
      </div>
      <MobileNavigation opened={expanded} />
    </header>
  )
}
