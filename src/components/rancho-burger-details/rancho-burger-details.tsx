"use client"
import { ArrowLeft, ShoppingCart, MoreHorizontal, Plus, Minus } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import { useCart } from "@/context/AuthContext"
import { useRouter } from "next/navigation"


export default function RanchoBurgerDetails() {
  const [quantity, setQuantity] = useState(1)
const { addToCart } = useCart()
    const router = useRouter()
    
  
  const increaseQuantity = () => setQuantity((prev) => prev + 1)
  const decreaseQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))
 const Rancho = {
    id: 6,
    name: "Rancho burger",
    description: "Burger with a huge pork patty, pickled cucumbers, blue onions, grilled vegetables (green beans, bell peppers, carrots), spicy dressing, black sandwich bun",
    price: 16.0,
    image: "/download.jpg?height=320&width=400",
      quantity, // ✅ تمام كده

  }

  const handleAddToCart = () => {
    addToCart(Rancho)        // ✅ أضف المنتج إلى السلة
    router.push("/cart")     // ✅ روح للصفحة بعد الإضافة
  }
 
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
        <div className="text-lg font-medium">Rancho burger</div>
      </div>

      {/* Hero Image with Content Overlay */}
      <div className="relative h-96 bg-gradient-to-b from-zinc-800 to-zinc-900">
        <img
          loading="lazy"
          src="/download.jpg?height=400&width=400&text=Rancho+Burger"
          alt="Rancho burger"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 to-transparent" />

        {/* Content Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 space-y-4">
          {/* Title */}
          <h1 className="text-2xl font-bold text-white">Rancho burger</h1>

          {/* Description */}
          <p className="text-zinc-300 leading-relaxed text-sm">
            Burger with a huge pork patty, pickled cucumbers, blue onions, grilled vegetables (green beans, bell
            peppers, carrots), spicy dressing, black sandwich bun
          </p>

          {/* Quantity and Price */}
          <div className="flex items-center justify-between pt-2">
            {/* Quantity Selector */}
            <div className="flex items-center bg-zinc-800/80 rounded-full backdrop-blur-sm">
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
            <div className="text-2xl font-bold text-white">${(16.0 * quantity).toFixed(2)}</div>
          </div>
        </div>
      </div>

      {/* Add to Cart button */}
      <div className="px-4 py-6">
        <Link href="/cart">
          <button
            onClick={handleAddToCart}
           className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold h-14 rounded-2xl flex items-center justify-center gap-3">

            <ShoppingCart className="h-5 w-5" />
            Add to cart
          </button>
        </Link>
      </div>
    </div>
  )
}
