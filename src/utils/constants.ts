import { AiOutlineInstagram } from 'react-icons/ai'
import { RiFacebookFill } from 'react-icons/ri'
import { SiTiktok } from 'react-icons/si'
import { BsLinkedin, BsYoutube } from 'react-icons/bs'


export const BASE_URL = 'https://tellsenales.com'
export const PHONE_NUMBER = '51971531018'
export const WHATSAPP_LINK = `https://wa.me/${PHONE_NUMBER}?text= `
export const FACEBOOK_LINK = 'https://www.facebook.com/Tellsenales/'
export const TIKTOK_LINK = `https://www.tiktok.com/@tellsenales`
export const INSTAGRAM_LINK = `https://www.instagram.com/tellsenales/`
export const YOUTUBE_LINK = `https://www.youtube.com/channel/UC-7J2QTYkHk0EqbT61TzIBA`
export const LINKEDIN_LINK = 'https://www.linkedin.com/company/tellsenales/'


export const socialLinks = [
  {
    Icon: RiFacebookFill,
    name: 'Facebook',
    url: FACEBOOK_LINK,
  },
  {
    Icon: AiOutlineInstagram,
    name: 'Instagram',
    url: INSTAGRAM_LINK,
  },
  {
    Icon: BsYoutube,
    name: 'Youtube',
    url:
    YOUTUBE_LINK
  },
  {
    Icon: SiTiktok,
    name: 'Tiktok',
    url: TIKTOK_LINK,
  },
  {
    Icon: BsLinkedin,
    name: 'Linkedin',
    url: LINKEDIN_LINK,
  },
]
