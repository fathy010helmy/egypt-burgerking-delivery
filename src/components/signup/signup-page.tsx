"use client"

import { useState } from "react"
import { User, Menu, MoreHorizontal } from "lucide-react"
import { useRouter } from "next/navigation"; // استدعاء الراوتر فوق

export default function SignupPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
const router = useRouter(); // داخل الكومبوننت

  const handleSignup = async () => {
  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  try {
    // التأكد من أن الإيميل مش مكرر
    const existingUser = await fetch(`http://localhost:8000/users?email=${email}`);
    const users = await existingUser.json();
    if (users.length > 0) {
      alert("This email is already registered");
      return;
    }

    const response = await fetch("http://localhost:8000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password, role: "user" })
    });

    if (response.ok) {
      alert("Signup successful!");
      router.push("/");
    } else {
      alert("Signup failed");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Something went wrong");
  }
};

  return (
    <div className="min-h-screen bg-zinc-800 text-white">
      {/* Header */}
      <div className="flex items-center justify-between p-4">
        <Menu className="h-6 w-6" />
        <MoreHorizontal className="h-6 w-6" />
      </div>

      {/* Main Content */}
      <div className="px-6 pt-8 max-w-md mx-auto">
        <div className="space-y-6 text-center">
          <div className="space-y-4">
            <div className="space-y-2">
              <h2 className="text-xl font-medium">Name</h2>
              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-zinc-700 text-center border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 w-full text-white placeholder:text-zinc-400 h-12 rounded-lg"
              />
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-medium">E-mail ID</h2>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-zinc-700 text-center border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 w-full text-white placeholder:text-zinc-400 h-12 rounded-lg"
              />
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-medium">Password</h2>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-zinc-700 text-center border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 w-full text-white placeholder:text-zinc-400 h-12 rounded-lg"
              />
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-medium">Confirm Password</h2>
              <input
                type="password"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="bg-zinc-700 text-center border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 w-full text-white placeholder:text-zinc-400 h-12 rounded-lg"
              />
            </div>
          </div>

          <div className="pt-8">
            <button
              onClick={handleSignup}
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-medium h-12 rounded-full flex items-center justify-center gap-3"
            >
              <User className="h-5 w-5" />
              Create account
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
