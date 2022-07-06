export function currency(num) {
  const n = parseInt(num, 10)
  return `${n
    .toFixed(0)
    .replace(/./g, (c, i, a) =>
      i && c !== '.' && (a.length - i) % 3 === 0
        ? `, ${c}`.replace(/\s/g, '')
        : c
    )}`
}

// 一般日期格式
export function date(time) {
  const localDate = new Date(time * 1000)
  return localDate.toLocaleDateString()
}

// 轉換 iso日期格式
export function isodate(time) {
  const localDate = new Date((time + 8 * 3600) * 1000)
  return localDate.toISOString().split('T')[0]
}

// 轉換 en日期格式
export function endate(time) {
  const year = new Date((time + 8 * 3600) * 1000).getFullYear()
  const month = new Date((time + 8 * 3600) * 1000).getMonth()

  const monthNamesEn = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]

  let day = new Date((time + 8 * 3600) * 1000).getDate()
  day = `${day < 10 ? '0' : ''}${day}` // 當日期小於10,自動補0

  const today = `${monthNamesEn[month]} ${day} ${year}`

  return today
}
