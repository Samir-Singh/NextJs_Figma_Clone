"use client";

import Live from "@/components/Live";

export default function Page() {
  return (
    <div className="h-[100vh] w-full flex justify-center items-center text-center">
      <h1 className="text-5xl text-white">Liveblock Figma clone!</h1>

      <Live />
    </div>
  );
}
