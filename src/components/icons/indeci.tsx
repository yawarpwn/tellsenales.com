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

    <path d="M50.8 12.5c-.3.3-.7.4-1.2.4-.6 0-1.1-.2-1.5-.7-.4-.5-.6-1.3-.6-2.3 0-1 .2-1.8.6-2.2.3-.5.9-.7 1.5-.7.4 0 .8.1 1.2.4.3.3.5.6.6 1.1l1.7-.4c-.2-.7-.5-1.2-.9-1.6-.7-.6-1.5-.9-2.6-.9-1.2 0-2.2.4-2.9 1.2-.7.7-1.1 1.8-1.1 3.2 0 1.4.4 2.4 1.1 3.2.7.8 1.7 1.2 2.8 1.2.9 0 1.7-.2 2.3-.7.6-.4 1.1-1.2 1.3-2.1l-1.7-.5c-.1.7-.4 1.1-.6 1.4zM17 14.3h1.8V5.7H17v8.6zM9.1 4.4zm2 1.4c0-.1-.2-.2-.2 0-.1 0-.2 0-.2.1 0-.1-.6-.1-.4-.2.1-.3-.4-.1-.2-.4 0-.2-.4-.3-.4-.3 0-.3-.2-.3-.3-.5 0 .1-.1 0-.1-.1h-.1c0 .2.3.2.2.5-.3-.1-.3.4-.4.5-.3.4-1.1.3-1.4.8.1.2 0 .1 0 0 0 .1-.1.2-.1.3-.1.2-.3.5-.5.5s-.1-.2-.3-.3c-.1.1-.2 0-.3 0l-.1.1c0-.1.1-.1.1-.1-.1 0-.1-.1 0-.1.1.1.2-.4 0-.3-.2 0-.2.2-.4.4-.1.1 0 .3 0 .4-.2.1 0 .2 0 .3.1-.1 0 .2-.1 0-.2.4.7.5.8.8.1.3.4.5.4.8.1.2.2.4.1.5.2.2.2.7.3 1 .1.1.1.2 0 .3.1.1.2.1.3.2 0 .3.1.4.2.5 0 .2.3.4.1.7-.1-.2 0 .4 0 .4 0 .2.2.2.3.3 0 .2.7.3.8.5.2 0 .7.1.7.4.1 0 .5.2.3.3.7.4.5.6 1.1 0-.1-.3.1-.3.2-.4.2-.2 0-.2-.1-.3-.1-.2 0-.4.1-.6-.2-.2.1-.5.2-.5 0-.2-.1-.3 0-.4.1-.1 0-.4.1-.5.1-.2-.3-.7-.4-1-.3 0-.1-.6 0-.8-.2.1-.3.2-.4.3-.2 0-.5.1-.5-.2 0-.1-.6 0-.4-.1.3-.2-.1-.3-.1-.5 0 .1-.1-.3 0-.3 0-.2-.2-.1-.1-.3.2.1.1-.1.1-.3.3-.2.2-.3.3-.6 0-.3.4-.4.5-.6.3 0 .7-.1.8 0 .2 0 .2.1.2 0-.1-.1-.1-.3-.3-.2-.3-.3.6-.7.1-.9 0-.1-.1 0-.1 0 0-.2-.1-.1-.4-.1zM9.3 1.5c-3.1 0-5.7 3.8-5.7 8.5s2.5 8.5 5.7 8.5c3.1 0 5.7-3.8 5.7-8.5s-2.5-8.5-5.7-8.5zm0 15.3c-2.3 0-4.2-3.1-4.2-6.8 0-3.8 1.9-6.8 4.2-6.8s4.2 3.1 4.2 6.8c0 3.8-1.8 6.8-4.2 6.8zm26-10.2c-.4-.4-.8-.6-1.3-.8-.4-.1-.9-.1-1.7-.1h-3.1v8.6h3.3c.7 0 1.2 0 1.6-.2.5-.1.9-.4 1.2-.7.4-.4.7-.9.9-1.5.1-.5.2-1.1.2-1.9 0-.8-.1-1.5-.3-2-.2-.6-.4-1-.8-1.4zm-.9 5c-.1.4-.2.7-.4.8-.1.1-.4.3-.7.3-.2 0-.6.1-1.1.1h-1.3V7.1h.8c.7 0 1.2 0 1.4.1.3 0 .6.2.8.4s.4.5.5.8c.1.4.2.9.2 1.6 0 .6-.1 1.2-.2 1.6zm5.2-1.1h4.3V9h-4.3V7.1h4.7V5.7h-6.4v8.6h6.5v-1.5h-4.8v-2.3zm-13.9 1-3.6-5.8h-1.7v8.6h1.7V8.6l3.5 5.7h1.8V5.7h-1.6v5.8zm28.9-5.8v8.6h1.8V5.7h-1.8z" 
        fill={fill}
        />
    </svg>
  )
}

export default Facebook
