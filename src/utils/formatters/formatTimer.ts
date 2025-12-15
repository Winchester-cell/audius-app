export const formatTimer = (time: number | null) => {
  if (time === null || isNaN(time)) return "00"
  return time < 10 ? `0${time}` : `${time}`
}