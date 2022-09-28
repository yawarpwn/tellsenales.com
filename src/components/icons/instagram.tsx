interface Props {
  width?: number
  height?: number
  size?: number
  fill?: string
}

const Instagram: React.FC<Props> = ({
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
      <path
        d='M18.5,6.7c0,0.6-0.5,1.2-1.2,1.2s-1.2-0.5-1.2-1.2c0-0.6,0.5-1.2,1.2-1.2S18.5,6,18.5,6.7z M17,11.9c0,2.7-2.2,4.9-4.9,4.9
	c-2.7,0-4.9-2.2-4.9-4.9C7.3,9.2,9.4,7,12.1,7C14.8,7,17,9.2,17,11.9z M15.3,11.9c0-1.7-1.4-3.1-3.1-3.1c-1.7,0-3.1,1.4-3.1,3.1
	c0,1.7,1.4,3.1,3.1,3.1C13.9,15,15.3,13.6,15.3,11.9z M22,7.9C22,4.7,19.3,2,16.1,2H7.9C4.7,2,2,4.7,2,7.9v8.1C2,19.3,4.7,22,7.9,22
	h8.1c3.3,0,5.9-2.7,5.9-5.9V7.9z M20,16c0,2.3-1.8,4.1-4.1,4.1H8C5.8,20,4,18.2,4,16V8C4,5.8,5.8,4,8,4H16C18.2,4,20,5.8,20,8V16z'
        fill={fill}
      />
    </svg>
  )
}

export default Instagram
