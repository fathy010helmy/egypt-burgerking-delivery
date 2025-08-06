
import { ShoppingCart, Bell, MapPin, Home, Filter, Plus } from "lucide-react"
import { useCart } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import Link from "next/link";
export default function FoodDeliveryApp() {
  const { addToCart } = useCart();
const router = useRouter();
  const burgers = [
    {
      id: 1,
      name: "Beef Burger",
      description: "Beef with cheese",
      price: 18.0,
      image: "/Image.png?height=120&width=120",
    },
    {
      id: 2,
      name: "Rancho Burger",
      description: "Beef with sour",
      price: 16.0,
      image: "/Image (1).png?height=120&width=120",
    },
    {
      id: 3,
      name: "Texas Burger",
      description: "Beef with tomato",
      price: 14.0,
      image: "/Image (2).png?height=120&width=120",
    },
    {
      id: 4,
      name: "Chicken Burger",
      description: "Beef with chicken",
      price: 9.0,
      image: "/Image (3).png?height=120&width=120",
    },
  ]

  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-purple px-4 py-6">
        <div className="flex items-center justify-between mb-15">
          
          <ul className="flex gap-15 text-xl font-bold text-neutral-900">
          <Link href="/">
            <li className="cursor-pointer">home</li>
          </Link>
            <Link href="/cheese-burger">
            <li className="cursor-pointer">cheese burger details</li>
            </Link>
            <Link href="/burger-details">
            <li className=" cursor-pointer "> burger details</li>
            </Link>
             <Link href="/rancho-burger">
            <li className="cursor-pointer">rancho-burger-details</li>
            </Link>
          </ul>
          <div className="flex items-center gap-3">
            <Link href="/cart">
              <ShoppingCart className="h-6 w-6" />
            </Link>
            
            <Bell className="h-6 w-6" />
          </div>
        </div>

        <div className="text-sm text-purple-200 mb-1">MAIN PAGE</div>
        <div className="text-2xl font-bold mb-1">Every Bite a</div>
        <div className="text-lg text-purple-200">Better burger!</div>
      </div>

      {/* Navigation Tabs */}
      <div className="px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <button className="text-white font-medium border-b-2 border-yellow-500 pb-1">Burger</button>
            <button className="text-zinc-400 font-medium">Pasta</button>
            <button className="text-zinc-400 font-medium">Salads</button>
          </div>
          <Filter className="h-5 w-5 text-zinc-400" />
        </div>
      </div>

      {/* Burger Grid */}
      <div className="px-4 pb-20">
        <div className="grid grid-cols-2 gap-4">
          {burgers.map((burger) => (
            <div key={burger.id} className="bg-zinc-800 rounded-2xl p-4">
              <div className="aspect-square bg-zinc-700 rounded-xl mb-3 flex items-center justify-center">
                <img
                  src={burger.image || "/placeholder.svg"}
                  alt={burger.name}
                  className="w-100 h-100 object-cover rounded-lg"
                />
              </div>

              <h3 className="font-semibold text-white mb-1">{burger.name}</h3>
              <p className="text-zinc-400 text-sm mb-3">{burger.description}</p>

              <div className="flex items-center justify-between">
                <span className="text-white font-bold">${burger.price.toFixed(2)}</span>
              
<button
  onClick={() => {
    addToCart(burger);
    router.push("/cart");
  }}
  className="bg-yellow-500 hover:bg-yellow-600 text-black w-8 h-8 rounded-full p-0"
>
  <Plus className="h-4 w-4" />
</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-zinc-800 px-4 py-4">
        <div className="flex items-center justify-center gap-12">
          <MapPin className="h-6 w-6 text-zinc-400" />
          <div className="bg-yellow-500 rounded-full p-3">
            <Home className="h-6 w-6 text-black" />
          </div>
          <Home className="h-6 w-6 text-zinc-400" />
        </div>
      </div>
    </div>
  )
}
