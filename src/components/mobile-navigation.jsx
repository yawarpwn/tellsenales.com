import { createPortal } from 'react-dom'
import usePortal from '../hooks/use-portal'
import cn from 'classnames'

export default function MobileNavigation({ opened }) {
  const portal = usePortal('mobile-navigation')
  return portal
    ? createPortal(
        <nav className={cn('mobile-navigation__container', {opened})}>
          <div className='mobile-navigation__wrapper'>
            <div className='mobile-navigation__list'>Contendi</div>
          </div>

          <style jsx>{`
            .mobile-navigation__container {
              position: fixed;
              top: 60px;
              z-index: 1001;
              right: 0;
              left: 0;
              bottom: 0;
              display: block;
              margin: 0;
              width: 100%;
              height: 0;
              transition: height 0.25s ease;
              will-change: height;
              overflow-y: scroll;
              overflow-x: hidden;
              user-select: none;
            }
            .mobile-navigation__wrapper {
              display: none;
              width: 100%;
              min-height: 100%;
              background: rgba(255, 255, 255, .8);
            }
            @supports (
              (-webkit-backdrop-filter: none) or (backdrop-filter: none)
            ) {
              .mobile-navigation__wrapper {
                background: var(--nextui-colors-menuBackground);
                backdrop-filter: saturate(180%) blur(60px);
                --webkit-backdrop-filter: saturate(180%) blur(34px);
              }
              .mobile-navigation__container.isDark {
                backdrop-filter: saturate(180%) blur(24px);
                --webkit-backdrop-filter: saturate(180%) blur(20px);
              }
            }
            .mobile-navigation__list {
              margin: 0;
              padding: 16px 0 16px 16px;
            }
            .mobile-navigation__container.opened {
              top: 63px;
              height: calc(100% - 64px);
            }
            .mobile-navigation__container.opened.hasNotify {
              top: calc(63px + 40px);
            }
            .mobile-navigation__container.opened.hasNotify:not(.detached) {
              padding-bottom: 30px;
            }
            .mobile-navigation__container.hasNotify.detached {
              top: 63px;
            }
            .mobile-navigation__container.opened .mobile-navigation__wrapper {
              display: block;
            }
          `}</style>
        </nav>,
        portal
      )
    : null
}
