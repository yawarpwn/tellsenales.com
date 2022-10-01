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
      viewBox='0 0 60 20'
      width={size || width}
      {...props}
    >

    <path 
        fill={fill}
        d="M34.1 13.3c-1.2-.1-2-.8-2.3-1.8-.4-2 .4-4.7 3.5-4.8 1 0 1.9.1 2.8.6.2-.7.4-1.4.7-2.1-.3 0-.7-.2-1-.2-.7-.1-1.3-.2-2-.3-.4 0-.8 0-1.1.1h-.5c-3.2.3-5.4 2.6-5.4 5.8 0 2.4 1.4 4.2 3.7 4.7 1.1.2 2.3.1 3.4 0 .8-.1.8-.1.9-1 0-.5.1-1 .2-1.5-.9.5-1.9.6-2.9.5zm-4.7-8.6h-8.2c-.1.7-.3 1.3-.4 2.1h2.7c-.6 2.9-1.2 5.7-1.8 8.6h2.6c.3 0 .4 0 .4-.3.5-2.7 1.1-5.3 1.6-7.9.1-.3.2-.4.6-.4H29c.1-.7.2-1.4.4-2.1zm-15.9 4c-.5 1.1-1 2.1-1.5 3.1l-.2-7.1H7.3C6.8 6.8 6.4 8.9 6 11c-.3 1.3-.6 2.7-.9 3.9l-.1.5h2.3c.3 0 .4 0 .5-.3C8.4 12.3 9 9.6 9.5 7v-.2c.1 2.9.2 5.8.4 8.6h2.4c.3 0 .4 0 .5-.3 1.3-2.7 2.6-5.4 3.8-8l.1-.3c-.7 2.9-1.3 5.7-1.9 8.6h2.5c.3 0 .4-.1.4-.3l1.5-7.2c.2-1.1.4-2.2.7-3.3h-4.6c-.5 1.5-1.2 2.7-1.8 4.1zm31.4 2.2c-3.1-2-1.4-6 .8-6.4 0 0-2.6 0-3.7 1.4-1.2 1.4-1.7 3.6-1.9 5-.1.7-.6 1.7-1.2 2.6h7.9c0-.8-.5-1.7-1.9-2.6zm-7.3 4.6h8.7s.4-.6.5-1.5h-7.9c-.5.6-.9 1.2-1.3 1.5zm12.1-11s-4.5.2-5.4 2c-.8 1.8.6 3.1 1.6 3.9.7.6 1.6 1.6 1.6 3.1h6.6c-.6-.9-1.7-1.9-3.5-2.5-3.5-1.2-5.8-2.3-5.4-3.7.6-1.4 2.9-2.7 4.5-2.8zm4.6 9.4h-6.7c0 .5-.1 1-.4 1.5h7.9c0 .1-.2-.6-.8-1.5z" />
    </svg>
  )
}

export default Facebook

