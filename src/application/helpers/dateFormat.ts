import { format } from 'date-fns'

export enum DateFormatPattern {
    ToPicker = 'yyyy/MM/dd',
    ToRequest = 'yyyyMMdd',
}

export function toPickerFormat(date: Date | string): string {
  return format(date, DateFormatPattern.ToPicker)
}

export function toRequestFormat(date: Date | string): string {
  return format(date, DateFormatPattern.ToRequest)
}