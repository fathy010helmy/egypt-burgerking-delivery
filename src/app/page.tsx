"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import "./globals.css";
import FoodDeliveryApp from "@/components/food-delivery/food-delivery-app";

export default function Home() {
  const { isLoggedIn, user } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
  if (pathname === "/login") return; // ✅ لو واقف في login متعملش توجيه

  if (!isLoggedIn || !user) {
    router.push("/login");
    return;
  }

  try {
    const userObj = JSON.parse(user);
    if (userObj.role === "admin" && pathname !== "/admin") {
      router.push("/");
    } else if (userObj.role !== "admin" && pathname !== "/") {
  router.push("/");
}

  } catch {
    router.push("/login");
  }
}, [isLoggedIn, user, pathname, router]);


  return (
    <div className="text-center  text-lg">
      <FoodDeliveryApp />
    </div>
  );
}
