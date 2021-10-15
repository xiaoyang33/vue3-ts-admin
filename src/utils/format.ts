import dayjs from 'dayjs'
export const enum DateFormat {
  format1 = 'YYYY-MM-DD'
}
export function formatDateToStyle(date: string, style: DateFormat) {
  return dayjs(date).format(style)
}

// export {
//   DateFormat
// }
