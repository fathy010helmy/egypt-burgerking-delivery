"use client"

import { ArrowLeft, ShoppingCart, MoreHorizontal, Plus, Minus } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

interface BurgerProduct {
  name: string
  description: string
  price: number
  image: string
}

interface BurgerProductTemplateProps {
  product: BurgerProduct
}

export default function BurgerProductTemplate({ product }: BurgerProductTemplateProps) {
  const [quantity, setQuantity] = useState(1)

  const increaseQuantity = () => setQuantity((prev) => prev + 1)
  const decreaseQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))

  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 px-4 py-6">
        <div className="flex items-center justify-between mb-4">
          <ArrowLeft className="h-6 w-6" />
          <div className="flex items-center gap-3">
            <Link href="/cart">
              <ShoppingCart className="h-6 w-6" />
            </Link>
            <MoreHorizontal className="h-6 w-6" />
          </div>
        </div>
        <div className="text-lg font-medium">Burger details</div>
      </div>

      {/* Hero Image */}
      <div className="relative h-80 bg-gradient-to-b from-zinc-800 to-zinc-900">
        <img src={product.image || "/placeholder.svg"} alt={product.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent" />

        {/* Title overlay at bottom of image */}
        <div className="absolute bottom-4 left-4">
          <h1 className="text-2xl font-bold text-white">{product.name}</h1>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 py-6 space-y-6">
        {/* Description */}
        <p className="text-zinc-300 leading-relaxed">{product.description}</p>

        {/* Quantity and Price */}
        <div className="flex items-center justify-between">
          {/* Quantity Selector */}
          <div className="flex items-center bg-zinc-800 rounded-full">
            <button
              onClick={decreaseQuantity}
              className="text-white hover:bg-zinc-700 rounded-full w-10 h-10 p-0"
            >
              <Minus className="h-4 w-4" />
            </button>
            <span className="px-4 py-2 text-white font-medium">{quantity}</span>
            <button
              onClick={increaseQuantity}
              className="text-white hover:bg-zinc-700 rounded-full w-10 h-10 p-0"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>

          {/* Price */}
          <div className="text-2xl font-bold text-white">${(product.price * quantity).toFixed(2)}</div>
        </div>

        {/* Add to Cart button */}
        <Link href="/cart">
          <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold h-14 rounded-2xl flex items-center justify-center gap-3 mt-8">
            <ShoppingCart className="h-5 w-5" />
            Add to cart
          </button>
        </Link>
      </div>
    </div>
  )
}
