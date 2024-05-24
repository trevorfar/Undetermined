import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(data: number) {
  let newData = data.toString()
  let counter = 0
  let newString = ""
  for (let j = newData.length - 1; j >= 0; j--) {
    newString += newData[j]
    counter++
    if (counter == 3 && j != 0) {
      newString += " "
      counter = 0
    }
  }
  return "$" + newString.split('').reverse().join('');
}
