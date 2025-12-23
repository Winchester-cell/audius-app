import { formatTimer } from "./formatTimer"

export const getDuration = (duration: number | null) => {
    if (!duration) return
    const min = Math.floor(duration / 60)
    const sec = Math.floor(duration % 60)
    return `${formatTimer(min)}:${formatTimer(sec)}`
}