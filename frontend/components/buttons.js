import Link from 'next/link'

const LinkedButton = (props) => {
  const { className, href = '#', children, style, disabled } = props
  return (
    <Link href={href}>
      <button className={className} style={style} disabled={disabled}>
        {children}
      </button>
    </Link>
  )
}

export { LinkedButton }
