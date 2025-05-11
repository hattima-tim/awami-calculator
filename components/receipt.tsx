import type { Item } from "@/components/spend-money-simulator"
import { formatCurrency } from "@/lib/utils"

interface ReceiptProps {
  items: Item[]
}

export default function Receipt({ items }: ReceiptProps) {
  // Calculate the total spent
  const totalSpent = items.reduce((total, item) => total + item.price * item.quantity, 0)

  return (
    <div className="mt-12 bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-700">
      <h2 className="text-2xl font-bold text-center py-4 text-white border-b border-gray-700">Your Receipt</h2>

      <div className="px-6 pb-6">
        {items.map((item) => (
          <div key={item.id} className="flex justify-between py-2 border-b border-gray-700">
            <div className="font-medium text-white">{item.name}</div>
            <div className="flex gap-4">
              <span className="text-gray-400">x{item.quantity}</span>
              <span className="text-red-500 font-medium">{formatCurrency(item.price * item.quantity)}</span>
            </div>
          </div>
        ))}

        <div className="flex justify-between pt-4 font-bold">
          <div className="text-white">TOTAL</div>
          <div className="text-red-500">{formatCurrency(totalSpent)}</div>
        </div>
      </div>
    </div>
  )
}
