import { useEffect, useRef, useState } from "react"

const useInView = () => {

    const elemRef = useRef(null)
    const [isInview, setIsInview] = useState<boolean>(false)

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setIsInview(true)
                observer.unobserve(entries[0].target);
            }
        })
        if (elemRef.current) observer.observe(elemRef.current)
    }, [])

    return { isInview, elemRef }
}

export default useInView