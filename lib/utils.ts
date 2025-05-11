import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(amount: number): string {
  // For large numbers, use abbreviations
  if (amount >= 1_000_000_000) {
    return `$${(amount / 1_000_000_000).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}B`
  } else if (amount >= 1_000_000) {
    return `$${(amount / 1_000_000).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}M`
  } else if (amount >= 1_000) {
    return `$${(amount / 1_000).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}K`
  }

  // For full display of large numbers (like in the header)
  if (amount >= 1_000) {
    return `$${amount.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`
  }

  // For smaller amounts
  return `$${amount}`
}
