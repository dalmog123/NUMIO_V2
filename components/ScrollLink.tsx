import { useCallback } from "react";

const ScrollLink = ({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) => {
  const handleClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: "smooth" })
    }
  }, [href])

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  )
}
export default ScrollLink;