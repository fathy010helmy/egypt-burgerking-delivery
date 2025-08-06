"use client"

import { ArrowLeft, ShoppingCart, MoreHorizontal, Plus, Minus } from "lucide-react"
import { useState } from "react"
import { useCart } from "@/context/AuthContext"
import { useRouter } from "next/navigation"

export default function BurgerDetailsPage() {
  const [quantity, setQuantity] = useState(1)
  const { addToCart } = useCart()
  const router = useRouter()
const increaseQuantity = () => setQuantity((prev) => prev + 1);
const decreaseQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const burger = {
    id: 1,
    name: "Beef Burger",
    description: "Beef with cheese",
    price: 18.0,
    image: "/Image.png?height=320&width=400",
      quantity, // ✅ تمام كده

  }

  const handleAddToCart = () => {
    addToCart(burger)        // ✅ أضف المنتج إلى السلة
    router.push("/cart")     // ✅ روح للصفحة بعد الإضافة
  }
  
  return (
    <div className="h-screen  bg-zinc-900 text-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 px-4 py-6">
        <div className="flex items-center justify-between ">
          <ArrowLeft className="h-6 w-6" />
          <div className="flex items-center gap-3">
            <ShoppingCart className="h-6 w-6" />
            <MoreHorizontal className="h-6 w-6" />
          </div>
        </div>
        <div className="text-lg font-medium">Burger details</div>
      </div>

      {/* Hero Image */}
      <div className="absolute  w-full bg-gradient-to-b from-zinc-800 to-zinc-900">
        <img
          src="/Image.png?height=320&width=400"
          alt="Fresh Beef Burger with cheese"
          className="w-full h-full object-cover"
        />
        <div className="relative inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent" />
      </div>

      {/* Content */}
      <div className=" text-2xl absolute px-4 space-y-6">
        {/* Title */}
        <h1 className="text-2xl font-bold text-white">Fresh Beef Burger with cheese</h1>

        {/* Description */}
        <p className="text-zinc-300 leading-relaxed">
          Burger with a huge pork patty, pickled cucumbers, blue onions, grilled vegetables (green beans, bell peppers,
          carrots), spicy dipping sauce, central pickles
        </p>

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
          <div className="text-2xl font-bold text-white">${(18.0 * quantity).toFixed(2)}</div>
        </div>

        {/* Add to Cart button */}
        <button
        onClick={handleAddToCart}
        className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold h-14 rounded-2xl flex items-center justify-center gap-3 mt-8"
      >
        <ShoppingCart className="h-5 w-5" />
        Add to cart
      </button>
      </div>
    </div>
  )
}
