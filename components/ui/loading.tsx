export const Loading = ({ className }: { className?: string }) => {
  const defaultClassName = 'main loading'
  const combinedClassName = className
    ? `${defaultClassName} ${className}`
    : defaultClassName

  return (
    <div className={combinedClassName}>
      <p>loading</p>
    </div>
  )
}
