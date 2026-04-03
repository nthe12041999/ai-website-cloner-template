"use client";

import Image from "next/image";

export function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-dvh">
      {/* Left Panel - Hidden on mobile */}
      <div className="relative hidden md:flex md:w-[60%] items-center justify-center overflow-hidden">
        <Image
          src="/images/auth/dashboard_blurred.jpg"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30 z-[1]" />
        <div className="relative z-10">
          <Image
            src="/images/auth/logo-white.svg"
            alt="LeadingCards"
            width={200}
            height={30}
            priority
          />
        </div>
      </div>

      {/* Right Panel - Form Area */}
      <div className="flex w-full md:w-[40%] items-center justify-center bg-white px-6 py-10">
        {children}
      </div>
    </div>
  );
}
