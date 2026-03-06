// app/login/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, Lock, ArrowRight, EyeOff, GraduationCap } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Demo credentials
    if (email === "movieclipsw1@gmail.com" && password === "12345678") {
      router.push("/home"); // redirect to homepage
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F8FA] flex items-center justify-center p-4">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Left Side */}
        <div className="relative hidden lg:block bg-gradient-to-br from-[#E2F8FF] to-[#F2F1FF] p-12">
          <div className="absolute inset-0 bg-grid-black/[0.02]" />
          <div className="relative z-10 h-full flex flex-col">
            <div className="flex items-center gap-2 mb-12">
              <Image src="/logo.png" alt="SchooLama Logo" width={40} height={40} />
              <span className="text-2xl font-bold text-[#0E4F6F]">Schoo<span className="text-[#5F5B9E]">Lama</span></span>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center text-center">
              <div className="relative w-64 h-64 mb-8">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#C3EBFA] to-[#DBDAFE] rounded-full opacity-50 animate-pulse" />
                <div className="absolute inset-4 bg-white rounded-full shadow-inner flex items-center justify-center">
                  <GraduationCap size={80} className="text-[#5F5B9E]" />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Welcome Back!</h2>
              <p className="text-gray-600 max-w-sm">Access your dashboard and manage your school efficiently.</p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="p-8 lg:p-12 bg-white">
          <div className="max-w-md mx-auto w-full">
            <div className="lg:hidden flex items-center justify-center gap-2 mb-8">
              <Image src="/logo.png" alt="SchooLama Logo" width={32} height={32} />
              <span className="text-xl font-bold text-[#0E4F6F]">Schoo<span className="text-[#5F5B9E]">Lama</span></span>
            </div>

            <div className="text-center lg:text-left mb-8">
              <h1 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-2">Sign in to your account</h1>
              <p className="text-gray-500">Use demo credentials or your account to login.</p>
            </div>

            <form className="space-y-6" onSubmit={handleLogin}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#5F5B9E] focus:ring-2 focus:ring-[#F2F1FF] transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-10 pr-12 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#5F5B9E] focus:ring-2 focus:ring-[#F2F1FF] transition-all"
                  />
                  <button type="button" className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
                    <EyeOff size={18} />
                  </button>
                </div>
              </div>

              <button type="submit" className="w-full bg-gradient-to-r from-[#5F5B9E] to-[#0E4F6F] text-white py-3 rounded-lg font-medium flex items-center justify-center gap-2">
                Sign In <ArrowRight size={18} />
              </button>

              {/* Sign Up Link */}
              <div className="text-center mt-4">
                <p className="text-sm text-gray-600">
                  Don't have an account?{" "}
                  <Link 
                    href="/sign-up" 
                    className="text-[#5F5B9E] font-semibold hover:underline hover:text-[#0E4F6F] transition-colors"
                  >
                    Sign up here
                  </Link>
                </p>
              </div>

             
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;