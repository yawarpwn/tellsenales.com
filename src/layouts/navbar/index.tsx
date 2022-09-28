import { useEffect, useState } from 'react'
import {
  ToggleMenu,
  MobileNavigation,
  ToggleTheme,
  Search
} from '../../components'
import { useMediaQuery } from '@hooks/use-media-query'
import useBodyScroll from '@hooks/use-body-scroll'
import Logo from '@components/logo'
import './styles.css'
import DesktopNav from '../desktop-nav'
import SocialIcons from '@components/social-icons'

export default function Navbar() {
  const [expanded, setExpanded] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)
  const isMobile = useMediaQuery(960)
  const [_, setBodyHidden] = useBodyScroll(null, { scrollLayer: true })

  const onScroll = () => {
    setScrollPosition(scrollY)
  }

  const toggleMobileNavigation = () => {
    setExpanded(!expanded)
    isMobile && setBodyHidden(false)
  }

  useEffect(() => {
    setScrollPosition((typeof window !== 'undefined' && window.scrollY) || 0)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!isMobile) {
      setExpanded(false)
      setBodyHidden(false)
    }
  }, [isMobile])

  const isDetached = scrollPosition > 10

  return (
    <header className='navbar__main-container'>
      <div
        className={`navbar__container ${
          isDetached ? 'isDetached-true' : 'isDetached-false'
        }`}
      >
        <nav className='container flex items-center '>
          <div className='flex-1'>
            <a href='/'>
              <Logo />
            </a>
          </div>
          {/*Desktop Navigation */}
          <DesktopNav />

          {/*Search Navigation */}
          <div className='flex items-center w-full md:w-auto justify-center'>
            <div className='hidden items-center gap-2 md:flex mr-4'>
              <SocialIcons />
              <ToggleTheme />
            </div>
            <Search />
          </div>

          {/*Mobile Navigation */}
          <div className='flex items-center md:hidden'>
            <ToggleTheme />
            <div
              onClick={toggleMobileNavigation}
              aria-label='menu'
              className='toggle-menu'
            >
              <ToggleMenu expanded={expanded} />
            </div>
          </div>
        </nav>
      </div>
      <MobileNavigation opened={expanded} />
    </header>
  )
}
