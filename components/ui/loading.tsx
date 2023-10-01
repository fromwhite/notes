export const Loading = ({ className }: { className?: string }) => {
  const defaultClassName = 'hero loading'
  const combinedClassName = className
    ? `${defaultClassName} ${className}`
    : defaultClassName

  return (
    <div className={combinedClassName}>
      <p>loading</p>
    </div>
  )
}
