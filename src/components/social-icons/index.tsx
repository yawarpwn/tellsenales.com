import { socialLinks } from '@utils/constants'
export default function SocialIcons() {
  return (
    <div className='social-icons flex items-center gap-2'>
      {socialLinks.map(({ Icon, url }, index) => {
        return (
          <a key={index} href={url} target='_blank' rel='noopener noreferrer' className='text-current'>
            <Icon size={20} fill={'currentColor'}/>
          </a>
        )
      })}
    </div>
  )
}
