import { socialLinks } from '@utils/constants'
import './styles.css'
export default function SocialIcons() {
  return (
    <div className='social-icons flex items-center gap-2'>
      {socialLinks.map(({ Icon, url }, index) => {
        return (
          <a key={index} href={url} target='_blank' rel='noopener noreferrer' className='text-current flex items-center'>
            <Icon class='social-icon' size={22} fill={'currentColor'}/>
          </a>
        )
      })}
    </div>
  )
}
