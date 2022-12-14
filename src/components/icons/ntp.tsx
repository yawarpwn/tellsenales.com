interface Props {
    width?: number
    height?: number
    size?: number
    fill?: string
}

const Facebook: React.FC<Props> = ({
    size,
    fill,
    width = 60,
    height = 20,
    ...props
}) => {
    return (
        <svg
            height={size || height}
            viewBox="0 0 60 20"
            width={size || width}
            {...props}
        >
            <path
                d="M21.5 2.5c-.4 0-.7.1-.9.4-.2.3-.3.7-.3 1.3v8.7l-5.5-8.6c-.2-.3-.3-.5-.4-.7-.1-.2-.3-.4-.4-.6-.1-.1-.3-.3-.5-.3-.2-.1-.4-.1-.7-.1-.3 0-.6.1-.9.3-.3.2-.5.4-.6.7-.1.3-.2.6-.2 1.1V16c0 .6.1 1 .4 1.3.2.3.6.4 1 .4s.7-.1 1-.4c.2-.3.4-.7.4-1.3V7.3l5.3 8.5c.2.2.3.5.5.7.2.2.3.4.5.6.2.2.4.3.6.4.2.1.4.1.7.1 1 0 1.5-.6 1.5-1.9V4.1c0-.6-.1-1-.4-1.3-.3-.2-.7-.3-1.1-.3zm13.6.2h-9c-.5 0-.8.1-1.1.3-.2.2-.4.5-.4.9s.1.7.4.9c.2.2.6.3 1 .3h3.1v10.6c0 .6.1 1.1.4 1.4.3.3.6.4 1 .4s.8-.1 1-.4c.3-.3.4-.7.4-1.4V5.1H35c.5 0 .8-.1 1.1-.3.2-.2.4-.5.4-.9s-.1-.7-.4-.9c-.2-.2-.6-.3-1-.3zm.7 1.7c-.2.2-.5.2-.7.2h-3.6v11.1c0 .5-.1.8-.3 1-.2.3-.4.3-.6.3-.3 0-.5-.1-.6-.3-.2-.2-.3-.5-.3-1V4.6H26c-.2 0-.6 0-.7-.2-.1-.1-.2-.2-.2-.5s.1-.4.2-.5c.1-.1.4-.2.7-.2h9c.2 0 .6 0 .7.2.2.1.3.3.3.5 0 .3-.1.5-.2.5zm12.7.8c-.2-.6-.5-1-.9-1.4-.4-.4-.9-.7-1.5-.8-.6-.2-1.4-.3-2.5-.3H40c-.6 0-1.1.1-1.4.4-.3.3-.4.7-.4 1.4v11.3c0 .6.1 1 .4 1.3.3.3.6.5 1 .5s.7-.2 1-.5c.3-.3.4-.8.4-1.3v-4.1h2.6c1.7 0 3-.4 3.9-1.2.9-.8 1.3-1.9 1.3-3.4.1-.7-.1-1.3-.3-1.9zm-2.9 3.2c-.2.3-.6.6-1 .7-.4.1-1 .2-1.7.2H41V4.9h1.9c1.3 0 2.1.2 2.5.6.4.5.6 1 .6 1.6 0 .6-.1 1-.4 1.3z"
                fill={fill}
            />
        </svg>
    )
}

export default Facebook
