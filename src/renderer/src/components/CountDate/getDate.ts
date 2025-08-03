interface Date {
  getWeek(): number
  getDayName(): string
}
Date.prototype.getWeek = function (): number {
  const target = new Date(this.valueOf())
  const dayNr = (this.getDay() + 6) % 7
  target.setDate(target.getDate() - dayNr + 3)
  const firstThursday = target.valueOf()
  target.setMonth(0, 1)
  if (target.getDay() !== 4) {
    target.setMonth(0, 1 + ((4 - target.getDay() + 7) % 7))
  }
  return 1 + Math.ceil((firstThursday - target.valueOf()) / 604800000)
}
Date.prototype.getDayName = function (): string {
  const days = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
  return days[this.getDay()]
}
