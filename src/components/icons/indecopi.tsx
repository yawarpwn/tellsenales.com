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
                d="M44.2 9.7c-1.4 0-2.5 1.2-2.5 2.6s1.1 2.6 2.5 2.6 2.5-1.2 2.5-2.6-1.1-2.6-2.5-2.6zm0 4.3c-.7 0-1.3-.7-1.3-1.7 0-.9.6-1.7 1.3-1.7.7 0 1.3.7 1.3 1.7 0 .9-.6 1.7-1.3 1.7zM50 9.8c-.7 0-1.6 0-2.3.3v7.1H49v-2.4c.2 0 .5.1.7.1h.4c1.3-.2 2.3-1.3 2.3-2.6-.1-1.7-1.1-2.4-2.4-2.5zm0 4.1c-.1 0-.3.1-.5.1s-.4 0-.6-.1V11c.2-.1.4-.1.6-.1.1 0 .3 0 .5.1.6.2 1.1.8 1.1 1.5-.1.6-.5 1.2-1.1 1.4zm4-5c.4 0 .6-.3.6-.6 0-.4-.3-.6-.6-.6-.4 0-.6.3-.6.6-.1.3.2.6.6.6zm-14.1 5c-.9 0-1.6-.7-1.6-1.6s.7-1.6 1.6-1.6c.4 0 .8.2 1.1.4v-1c-.4-.2-.8-.4-1.3-.4-1.5 0-2.6 1.1-2.6 2.6 0 1.4 1.1 2.7 2.6 2.6.6 0 1.2-.2 1.6-.6-.1-.3-.2-.6-.3-.8-.3.3-.7.4-1.1.4zm-21.5.9h1.3V7.6h-1.3v7.2zm35 0h1.3V9.7h-1.3v5.1zm-29.5-5c-.6 0-1.3.3-1.7.6v-.6H21v5h1.3v-3.5l.5-.3s.4-.2.8-.2c.5 0 .7.5.7 1v3h1.3v-3c0-.5 0-.9-.2-1.4-.4-.3-.8-.6-1.5-.6zm5.9 0c-.2 0-.4-.1-.6-.1h-.5c-1.3.2-2.3 1.3-2.3 2.5 0 1.3 1 2.4 2.3 2.5h.5c.7 0 1.3-.2 1.9-.6V7.6h-1.3v2.2zm-.1 4c-.1 0-.3.1-.6.1-.2 0-.4 0-.5-.1-.6-.2-1.1-.8-1.1-1.5s.5-1.3 1.1-1.5c.1 0 .3-.1.5-.1s.4 0 .6.1v3zm4.5-3.9c-1.3 0-2.2 1.2-2.2 2.5s.8 2.5 2.2 2.6h.1c1.2 0 1.9-.6 1.9-.6l-.3-.8c-.4.2-1 .3-1.3.3h-.4c-.6-.1-.9-.6-1.1-1.3h3.2v-.8c-.1-1.1-1-1.9-2.1-1.9zm0 1.9h-1c.1-.6.6-1.1 1-1.1.5 0 .9.5 1 1.1h-1zM7.3 13.2V8.8c0-.6-.4-1-.8-1.3.5-.2.8-.7.8-1.2C7.3 5.6 6.7 5 6 5c-.7 0-1.3.6-1.3 1.3 0 .6.4 1 .8 1.3-.6.1-.9.6-.9 1.2v4.8c.1 1.5 1.4 2.7 2.9 2.7.9 0 1.6-.3 2-.8h-.3c-1 0-1.9-1-1.9-2.3zm3.7.2V7c0-.6-.3-1.1-.8-1.3.4-.1.8-.7.8-1.2 0-.7-.6-1.3-1.3-1.3-.7 0-1.3.6-1.3 1.3 0 .6.3 1.1.8 1.3-.5.1-.9.6-.9 1.2v6.4c0 .7.6 1.3 1.3 1.3.8 0 1.4-.6 1.4-1.3zm3.7-7.1c0-.8-.6-1.4-1.4-1.4-.7 0-1.3.6-1.3 1.3 0 .6.3 1 .8 1.3-.4.2-.8.7-.8 1.3v4.4c-.1 1.4-.6 2.5-1.8 3 2.8.5 4.3-1.1 4.5-3.1V8.8c0-.6-.3-1-.8-1.3.5-.2.8-.6.8-1.2z"
                fill={fill}
            />
        </svg>
    )
}

export default Facebook
