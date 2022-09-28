import './styles.css'
export default function ToggleMenu({ expanded }) {
  return (
    <div className={ `toggle-menu__wrap ${expanded ? 'open' : ''}` }>
      <div
        className={`toggle-menu__line top`} 
      ></div>
      <div
        className={`toggle-menu__line bot`} 
      ></div>
    </div>
  )
}
