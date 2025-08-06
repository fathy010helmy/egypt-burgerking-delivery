"use client";

import { useState } from "react";
import { Menu, MoreHorizontal, User } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation"; // ✅ استدعاء التوجيه

export default function LoginPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const router = useRouter(); // ✅ إنشاء الراوتر

  const handleLogin = async () => {
    try {
      const res = await fetch(
        `http://localhost:8000/users?email=${email}&password=${password}`
      );
      const data = await res.json();

      if (data.length > 0) {
        const user = data[0];

        // حفظ البيانات في localStorage
        localStorage.setItem("user", JSON.stringify(user));

        if (user.role) {
          console.log("Login successful: " + user.role);

          // ✅ توجيه حسب الدور
          if (user.role === "admin") {
            router.push("/admin");
          } else {
            router.push("/");
          }
        } else {
          console.log("Login successful but role is missing");
          
        }
      } else {
        console.log("Invalid credentials");
      }
    } catch (error) {
      console.log("Something went wrong during login.");
      console.error(error);
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
      <div className="px-6  pt-8 max-w-md mx-auto">
        <div className="space-y-6 w-full">
          <h1 className="text-2xl  font-medium">Login</h1>

          <div className="space-y-4">
            <input
              type="text"
              placeholder="Email ID"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-zinc-700 border border-zinc-600 text-white placeholder:text-zinc-400 h-12 rounded-lg px-4 w-full"
            />

            <div className="space-y-2">
              <h2 className="text-xl font-medium">Password</h2>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-zinc-700 border border-zinc-600 text-white placeholder:text-zinc-400 h-12 rounded-lg px-4 w-full"
              />
            </div>
          </div>

          <button
            onClick={handleLogin}
            className="w-full bg-zinc-200 hover:bg-zinc-300 text-black font-medium h-12 rounded-full mt-8"
          >
            Login
          </button>
        </div>

        {/* Social Login */}
        <div className="mt-16 space-y-4">
          <button className="w-full bg-white hover:bg-gray-50 text-black border-white border h-12 rounded-full flex items-center justify-center gap-3">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Sign up with Google
          </button>

          <Link href="/signup">
            <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-medium h-12 rounded-full flex items-center justify-center gap-3">
              <User className="h-5 w-5" />
              Sign up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
