"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <div className="w-full max-w-[400px]">
      {/* Logo */}
      <div className="mb-8">
        <Image
          src="/images/auth/logo.svg"
          alt="LeadingCards"
          width={140}
          height={21}
          priority
        />
      </div>

      {/* Title */}
      <h1
        style={{
          color: "#0e1011",
          fontWeight: 800,
          fontSize: "32px",
          lineHeight: "38px",
        }}
      >
        Sign In
      </h1>

      {/* Subtitle */}
      <p
        className="mt-2 mb-8"
        style={{
          color: "#6f747d",
          fontSize: "16px",
          fontWeight: 500,
        }}
      >
        Enter your credentials to access your account
      </p>

      <form onSubmit={handleSubmit}>
        {/* Email Field */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block mb-1.5"
            style={{
              color: "#191d23",
              fontWeight: 500,
              fontSize: "16px",
            }}
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full outline-none transition-colors"
            style={{
              border: "1px solid #e5eaef",
              borderRadius: "5px",
              padding: "10px 12px",
              fontSize: "14px",
              color: "#191d23",
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = "#594ed1";
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = "#e5eaef";
            }}
          />
        </div>

        {/* Password Field */}
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block mb-1.5"
            style={{
              color: "#191d23",
              fontWeight: 500,
              fontSize: "16px",
            }}
          >
            Password
          </label>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full outline-none transition-colors pr-10"
              style={{
                border: "1px solid #e5eaef",
                borderRadius: "5px",
                padding: "10px 12px",
                fontSize: "14px",
                color: "#191d23",
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = "#594ed1";
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = "#e5eaef";
              }}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
              style={{ color: "#86889a" }}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                  <line x1="1" y1="1" x2="23" y2="23" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Remember me + Forgot password */}
        <div className="flex items-center justify-between mb-6">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="sr-only peer"
            />
            <span
              className="flex items-center justify-center rounded peer-checked:bg-[#594ed1] peer-checked:border-[#594ed1] transition-colors"
              style={{
                width: "20px",
                height: "20px",
                border: "1px solid #e5eaef",
                borderRadius: "4px",
              }}
            >
              {rememberMe && (
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 3L4.5 8.5L2 6"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </span>
            <span
              style={{
                fontSize: "14px",
                color: "#191d23",
              }}
            >
              Remember me
            </span>
          </label>

          <Link
            href="/auth/forgot-password"
            style={{
              color: "#594ed1",
              fontSize: "14px",
            }}
          >
            Forgot password?
          </Link>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full cursor-pointer transition-opacity hover:opacity-90"
          style={{
            background:
              "linear-gradient(109deg, #594ed1 0.77%, #974ed1 96.36%)",
            color: "white",
            fontWeight: 600,
            fontSize: "14px",
            padding: "12px 26px",
            borderRadius: "8px",
            border: "none",
            marginTop: "24px",
          }}
        >
          Sign In
        </button>
      </form>

      {/* Sign up link */}
      <p
        className="text-center"
        style={{
          color: "#86889a",
          fontWeight: 500,
          fontSize: "14px",
          marginTop: "24px",
        }}
      >
        Don&apos;t have an account?{" "}
        <a
          href="https://form.typeform.com/to/e4ZYOiQe"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#594ed1" }}
        >
          Sign up
        </a>
      </p>
    </div>
  );
}
