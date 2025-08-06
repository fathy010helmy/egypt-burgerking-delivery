"use client"

import { Menu, ShoppingCart, MoreHorizontal, Plus, Minus, Banknote } from "lucide-react"
import { useCart } from "@/context/AuthContext" // ✅ استدعاء الكارت كونتكست

export default function CartPage() {
  const { cartItems, updateQuantity } = useCart(); // ✅ جلب البيانات والدالة من context

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const deliveryCharge = 6.0
  const total = subtotal + deliveryCharge

  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 px-4 py-6">
        <div className="flex items-center justify-between mb-4">
          <Menu className="h-6 w-6" />
          <div className="flex items-center gap-3">
            <ShoppingCart className="h-6 w-6" />
            <MoreHorizontal className="h-6 w-6" />
          </div>
        </div>
        <div className="text-lg font-medium">CART</div>
      </div>

      {/* Cart Items */}
      <div className="px-4 py-6 space-y-4">
        {cartItems.length === 0 ? (
          <p className="text-center text-zinc-400">Your cart is empty</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="flex items-center gap-4 bg-zinc-800 rounded-2xl p-4">
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.name}
                className="w-16 h-16 rounded-xl object-cover"
              />

              <div className="flex-1">
                <h3 className="font-semibold text-white">{item.name}</h3>
                <p className="text-zinc-400 text-sm">{item.description}</p>
                <p className="text-white font-bold mt-1">${item.price.toFixed(2)}</p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => updateQuantity(item.id, -1)}
                  className="text-white hover:bg-zinc-700 rounded-full w-8 h-8 p-0"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="text-white font-medium w-8 text-center">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, 1)}
                  className="text-white hover:bg-zinc-700 rounded-full w-8 h-8 p-0"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))
        )}

        {cartItems.length > 0 && (
          <>
            {/* Delivery Charge */}
            <div className="pt-4">
              <p className="text-zinc-400 text-sm">delivery charge</p>
            </div>

            {/* Total */}
            <div className="flex items-center justify-between pt-4 border-t border-zinc-700">
              <span className="text-xl font-bold text-white">TOTAL</span>
              <span className="text-xl font-bold text-white">${total.toFixed(2)}</span>
            </div>
          </>
        )}
      </div>

      {/* Payment Options */}
      {cartItems.length > 0 && (
        <div className="px-4 pb-8 mt-auto">
          <div className="flex items-center justify-center mb-4">
            <div className="flex items-center gap-2 bg-blue-600 px-4 py-2 rounded-lg">
              <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-green-400 rounded-full"></div>
              <span className="text-white font-semibold">Paytm</span>
            </div>
          </div>

          <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold h-14 rounded-2xl flex items-center justify-center gap-3">
            <span>PAY CASH</span>
            <div className="bg-green-600 rounded p-1">
              <Banknote className="h-4 w-4 text-white" />
            </div>
          </button>
        </div>
      )}
    </div>
  )
}
