export default function isWeekday(isAWeekday){
    return isAWeekday.startsWith("M") || isAWeekday.startsWith("T") || isAWeekday.startsWith("W") || isAWeekday.startsWith("T") || isAWeekday.startsWith("F")
  }