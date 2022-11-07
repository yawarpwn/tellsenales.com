import { socialLinks } from '@utils/constants'
import './styles.css'
export default function SocialIcons() {
	return (
		<div className="social-icons flex items-center gap-2">
			{socialLinks.map(({ Icon, url, name }, index) => {
				return (
					<a
						key={index}
						href={url}
						target="_blank"
						aria-label={`Visita nuestro ${name} oficial`}
						rel="noopener noreferrer"
						className="flex items-center text-current"
					>
						<Icon class="social-icon" size={22} fill={'currentColor'} />
					</a>
				)
			})}
		</div>
	)
}
