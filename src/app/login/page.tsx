"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const page = () => {
  const router = useRouter();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const getFunction = () => {
    if (name === "nikhil" && password === "111") router.push("/");
    else console.log("false", name);
  };

  return (
    <div className="h-screen w-screen">
      <div className="flex flex-col items-center justify-center h-full ">
        <div className="gap-10 h-[30rem] w-[30rem] border-2 border-white rounded-3xl flex flex-col items-center justify-center">
          <h1 className="font-bold text-8xl">Login</h1>
          <div className="flex flex-col items-start gap-5">
            <input type="text" placeholder="your name" value={name} onChange={(e) => setName(e.target.value)} className="p-2 bg-gray-600" />
            <input type="password" placeholder="your password" value={password} onChange={(e) => setPassword(e.target.value)} className="p-2 bg-gray-600" />
            <button onClick={getFunction} className="cursor-pointer p-3 bg-gray-600 rounded-2xl w-40">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
