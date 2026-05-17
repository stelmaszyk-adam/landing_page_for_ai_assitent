export default function Button({ children, variant = 'primary', size = 'md', href, className = '', ...props }) {
  const base = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 cursor-pointer'
  const variants = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700 shadow-lg shadow-primary-600/25 hover:shadow-xl hover:shadow-primary-600/30',
    secondary: 'bg-white text-primary-600 border-2 border-primary-600 hover:bg-primary-50',
    ghost: 'bg-white/10 text-white border-2 border-white/30 hover:bg-white/20',
  }
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`

  if (href) {
    return <a href={href} className={classes} {...props}>{children}</a>
  }
  return <button className={classes} {...props}>{children}</button>
}
