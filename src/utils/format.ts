import dayjs from 'dayjs'
export const enum DateFormat {
  format1 = 'YYYY-MM-DD'
}
export function formatDateToStyle(
  date: string,
  style: DateFormat = DateFormat.format1
) {
  return dayjs(date).format(style)
}
