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

	<path d="M9.4,12.1v9.7c0,0.1,0.1,0.3,0.3,0.3h3.6c0.1,0,0.3-0.1,0.3-0.3v-9.8h2.6c0.1,0,0.2-0.1,0.3-0.2l0.3-3
		c0-0.1-0.1-0.3-0.3-0.3h-2.9V6.4c0-0.5,0.4-0.9,0.9-0.9h2c0.1,0,0.3-0.1,0.3-0.3v-3c0-0.1-0.1-0.3-0.3-0.3H13c-2,0-3.6,1.6-3.6,3.6
		v2.9H7.6c-0.1,0-0.3,0.1-0.3,0.3v3c0,0.1,0.1,0.3,0.3,0.3h1.8V12.1z" fill={fill}/>

    </svg>
  )
}

export default Facebook
