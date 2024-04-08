import { useCallback, useMemo, useState } from "react"

interface UseHoverBind {
    onMouseEnter: () => void
    onMouseLeave: () => void
}

type UseHoverReturn = [boolean, UseHoverBind]

export const useHover = (): UseHoverReturn => {
    const [isHover, setIsHover] = useState<boolean>(false);

    const onMouseEnter = useCallback(() => {
        setIsHover(true)
    }, [])

    const onMouseLeave = useCallback(() => {
        setIsHover(false)
    }, [])

    return useMemo(() => [isHover, {onMouseEnter, onMouseLeave}], [])
}
