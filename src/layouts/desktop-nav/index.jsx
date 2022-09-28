import './styles.css'
export default function DesktopNav() {
  return (
      <div className='hidden md:flex space-x-6 items-center mr-8'>
          <a className='desktop-nav__link'>Senales</a>
          <a className='desktop-nav__link'>Seguridad</a>
          <a className='desktop-nav__link'>Galeria</a>
          <a className='desktop-nav__link'>Contacto</a>
      </div>
  )
}
