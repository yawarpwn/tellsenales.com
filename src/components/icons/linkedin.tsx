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
      viewBox='0 0 24 24'
      width={size || width}
      {...props}
    >
      <path
        d='M3.3,9H7v12H3.3V9z M5.1,3c1.2,0,2.2,1,2.2,2.2c0,1.2-1,2.2-2.2,2.2C3.9,7.3,3,6.4,3,5.2C3,4,3.9,3,5.1,3 M9.4,21h3.7v-5.9
		c0-1.6,0.3-3.1,2.2-3.1c1.9,0,1.9,1.8,1.9,3.2V21H21v-6.6c0-3.2-0.7-5.7-4.5-5.7c-1.8,0-3,1-3.5,1.9h0V9H9.4V21z'
        fill={fill}
      />
    </svg>
  )
}

export default Tiktok
