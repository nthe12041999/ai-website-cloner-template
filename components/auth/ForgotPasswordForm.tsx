"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="w-full max-w-[400px] text-center">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <Image
            src="/images/auth/logo.svg"
            alt="LeadingCards"
            width={140}
            height={21}
            priority
          />
        </div>

        <h2
          style={{
            color: "#0e1011",
            fontWeight: 800,
            fontSize: "32px",
            lineHeight: "38px",
          }}
        >
          Check your email
        </h2>
        <p
          className="mt-3 mb-8"
          style={{
            color: "#6f747d",
            fontSize: "16px",
            fontWeight: 500,
          }}
        >
          We&apos;ve sent a password reset link to {email}
        </p>
        <Link
          href="/auth/login"
          className="inline-block w-full cursor-pointer transition-opacity hover:opacity-90"
          style={{
            background:
              "linear-gradient(109deg, #594ed1 0.77%, #974ed1 96.36%)",
            color: "white",
            fontWeight: 600,
            fontSize: "14px",
            padding: "12px 26px",
            borderRadius: "8px",
            textAlign: "center",
          }}
        >
          Back to Sign In
        </Link>
      </div>
    );
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
        Forgot Password
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
        Enter your email address and we&apos;ll send you a link to reset your
        password
      </p>

      <form onSubmit={handleSubmit}>
        {/* Email Field */}
        <div className="mb-4">
          <label
            htmlFor="forgot-email"
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
            id="forgot-email"
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
          Send Reset Link
        </button>
      </form>

      {/* Sign in link */}
      <p
        className="text-center"
        style={{
          color: "#86889a",
          fontWeight: 500,
          fontSize: "14px",
          marginTop: "24px",
        }}
      >
        Remember your password?{" "}
        <Link href="/auth/login" style={{ color: "#594ed1" }}>
          Sign in
        </Link>
      </p>
    </div>
  );
}
