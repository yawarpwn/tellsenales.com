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
                d="M7.6 4.9v-3h.5l1.2 2.5 1.2-2.5h.5v3h-.4V2.4L9.5 4.9h-.4L7.9 2.4v2.5h-.3zm4.2-1.2V1.9h.4v1.9c0 .6.3.9 1 .9.6 0 1-.3 1-.9V1.9h.4v1.9c0 .8-.5 1.2-1.4 1.2-.9-.1-1.4-.5-1.4-1.3m3.5 1.2v-3h.4l2 2.4V1.9h.4v3h-.4l-2-2.5v2.5h-.4zm3.7-3h.4v3H19v-3zm3.8 2.9c-.3.1-.6.1-.9.1-1.2 0-1.8-.5-1.8-1.5s.6-1.5 1.8-1.5c.3 0 .6.1.9.1v.3c-.3-.1-.6-.2-.9-.2-.9 0-1.3.4-1.3 1.2 0 .9.4 1.2 1.3 1.2.3 0 .6-.1.9-.2v.5zm.8-2.9h.4v3h-.4v-3zm1.2 3v-3h1.3c.7 0 1 .3 1 .8 0 .6-.5 1-1.4 1.1l-.1-.3c.7-.1 1-.3 1-.7 0-.3-.2-.5-.6-.5h-.9V5c.2-.1-.3-.1-.3-.1zm2.7 0h-.4l1.4-3h.5l1.4 3h-.5l-.4-1h-1.1l.2-.3h.8l-.6-1.3-1.3 2.6zm3.7-3v2.7H33v.3h-2.2v-3h.4zm2.4 0h.4v3h-.4v-3zM36 4.6c.8 0 1.2-.4 1.2-1.3 0-.7-.4-1.1-1.2-1.1h-.8v2.4h.8zm-1.2.3v-3H36c1.1 0 1.7.5 1.7 1.4 0 1.1-.5 1.6-1.7 1.6h-1.2zm3.6 0h-.5l1.4-3h.5l1.4 3h-.5l-.4-1h-1.1l.1-.3h.8l-.6-1.3-1.1 2.6zm4.5-.3c.8 0 1.2-.4 1.2-1.3 0-.7-.4-1.1-1.2-1.1h-.8v2.4h.8zm-1.2.3v-3h1.2c1.1 0 1.7.5 1.7 1.4 0 1.1-.5 1.6-1.7 1.6h-1.2zm5.8-.3c.8 0 1.2-.4 1.2-1.3 0-.7-.4-1.1-1.2-1.1h-.8v2.4h.8zm-1.2.3v-3h1.2c1.1 0 1.7.5 1.7 1.4 0 1.1-.5 1.6-1.7 1.6h-1.2zm5.6-3v.3h-1.8v1h1.7v.3h-1.7v1.1h1.8v.3h-2.2v-3h2.2zM9.3 7.5V17h6.9v1.1H7.6V7.5h1.7zm9.2 0h1.7v10.6h-1.7V7.5zm5.1 10.6V7.5h2.2l4.8 8.8 4.8-8.8h2.1v10.6H36V9.4l-4.7 8.7H30l-4.8-8.7v8.7h-1.6zm17.5 0h-1.8l5.6-10.6h1.9l5.6 10.6h-1.9l-1.7-3.4h-4.4l.5-1.1h3.4l-2.5-4.8-4.7 9.3z"
                fill={fill}
            />
        </svg>
    )
}

export default Facebook
