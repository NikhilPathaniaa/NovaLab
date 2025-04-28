"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/login");
    }, 2000);
  }, []);
  return (
    <div className="h-screen w-screen">
      <h1 className="text-white text-9xl">Hi</h1>
    </div>
  );
}
