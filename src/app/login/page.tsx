"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const page = () => {
  const router = useRouter();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [flag, setFlag] = useState(false);
  const getFunction = () => {
    if (name === "nikhil" && password === "111") router.push("/");
    else console.log("false", name);
  };
  console.log(flag);
  const rememberFunction = () => {
    if (flag) {
      setFlag(false);
    } else {
      setFlag(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen ">
      <div className="gap-10 h-[30rem] w-[30rem] border-2 border-black rounded-3xl flex flex-col items-center justify-center">
        <h1 className="font-bold text-8xl">Login</h1>
        <div className="flex flex-col items-start gap-5">
          <input required type="text" placeholder="your name" value={name} onChange={(e) => setName(e.target.value)} className="p-2 border-2 border-blue-400 rounded-2xl" />
          <input required type="password" placeholder="your password" value={password} onChange={(e) => setPassword(e.target.value)} className="p-2 border-2 border-blue-400 rounded-2xl" />
          <div className="flex gap-3">
            <input type="checkbox" onClick={rememberFunction} /> <label>Remember me</label>
          </div>
          <button onClick={getFunction} className="cursor-pointer p-3 bg-gradient-to-l from-blue-400 to-blue-500 rounded-2xl w-40">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
