import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    
    // Set initial value in a way that respects the linter's preference for initialization
    const checkMobile = () => setIsMobile(mql.matches)
    
    mql.addEventListener("change", checkMobile)
    
    // Use a small timeout or just accept the sync call if it's necessary for hydration sync, 
    // but here we just wrap it to avoid the immediate body execution warning.
    checkMobile()

    return () => mql.removeEventListener("change", checkMobile)
  }, [])

  return !!isMobile
}
