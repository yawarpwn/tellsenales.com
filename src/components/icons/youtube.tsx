interface Props {
  width?: number
  height?: number
  size?: number
  fill?: string
}

const Facebook: React.FC<Props> = ({
  size,
  fill,
  width = 24,
  height = 24,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox='0 0 24 24'
      width={size || width}
      {...props}
    >

<path d="M22,9.5c0-2.4-2-4.4-4.4-4.4H6.4C4,5.2,2,7.1,2,9.5v4.9c0,2.4,2,4.4,4.4,4.4h11.3c2.4,0,4.4-2,4.4-4.4V9.5z M15.8,12.1
		l-5,2.5c-0.2,0.1-0.9,0-0.9-0.3V9.3c0-0.2,0.7-0.4,0.9-0.3l4.8,2.6C15.8,11.7,16,12,15.8,12.1z" fill={fill}/>

    </svg>
  )
}

export default Facebook
