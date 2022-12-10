interface Props {
    width?: number
    height?: number
    size?: number
    fill?: string
}

const Tiktok: React.FC<Props> = ({
    size,
    fill,
    width = 24,
    height = 24,
    ...props
}) => {
    return (
        <svg
            height={size || height}
            viewBox="0 0 24 24"
            width={size || width}
            {...props}
        >
            <path
                d="M19.8,10.3c-0.1,0-0.3,0-0.5,0c-1.6,0-3.2-0.8-4.1-2.2v7.5c0,3.1-2.5,5.6-5.6,5.6c-3.1,0-5.6-2.5-5.6-5.6
	c0-3.1,2.5-5.6,5.6-5.6l0,0c0.1,0,0.2,0,0.3,0v2.7c-0.1,0-0.2,0-0.3,0c-1.6,0-2.8,1.3-2.8,2.8s1.3,2.8,2.8,2.8c1.6,0,3-1.2,3-2.8
	l0-12.8h2.6c0.2,2.4,2.1,4.2,4.5,4.4L19.8,10.3"
                fill={fill}
            />
        </svg>
    )
}

export default Tiktok
