// app/login/page.tsx
import Image from "next/image";
import Link from "next/link";
import { Mail, Lock, ArrowRight, Eye, EyeOff } from "lucide-react";

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-[#F7F8FA] flex items-center justify-center p-4">
      {/* Main Container */}
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 bg-white rounded-2xl shadow-xl overflow-hidden">
        
        {/* Left Side - Branding & Illustration */}
        <div className="relative hidden lg:block bg-gradient-to-br from-[#E2F8FF] to-[#F2F1FF] p-12">
          <div className="absolute inset-0 bg-grid-black/[0.02] [mask-image:linear-gradient(0deg,transparent,black)]" />
          
          <div className="relative z-10 h-full flex flex-col">
            {/* Logo */}
            <div className="flex items-center gap-2 mb-12">
              <Image 
                src="/logo.png" 
                alt="SchooLama Logo" 
                width={40} 
                height={40}
                className="drop-shadow-md"
              />
              <span className="text-2xl font-bold">
                <span className="text-[#0E4F6F]">Schoo</span>
                <span className="text-[#5F5B9E]">Lama</span>
              </span>
            </div>

            {/* Illustration Area */}
            <div className="flex-1 flex flex-col items-center justify-center text-center">
              <div className="relative w-64 h-64 mb-8">
                {/* Abstract illustration - you can replace with actual illustration */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#C3EBFA] to-[#DBDAFE] rounded-full opacity-50 animate-pulse" />
                <div className="absolute inset-4 bg-white rounded-full shadow-inner flex items-center justify-center">
                  <GraduationCap size={80} className="text-[#5F5B9E]" />
                </div>
              </div>
              
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Welcome Back!
              </h2>
              <p className="text-gray-600 max-w-sm">
                Access your dashboard, manage classes, track progress, and stay connected with your educational community.
              </p>

              {/* Feature List */}
              <div className="mt-8 space-y-3 text-left">
                {[
                  "📊 Real-time analytics dashboard",
                  "📅 Interactive calendar & events",
                  "📝 Assignment management",
                  "💬 Instant messaging"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#5F5B9E]" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial */}
            <div className="mt-8 p-4 bg-white/50 backdrop-blur-sm rounded-lg border border-white/20">
              <p className="text-sm text-gray-600 italic">
                "SchooLama has transformed how we manage our school. The interface is intuitive and powerful."
              </p>
              <div className="mt-2 flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#E2F8FF] flex items-center justify-center">
                  <span className="text-xs font-bold text-[#0E4F6F]">JD</span>
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-800">John Doe</p>
                  <p className="text-xs text-gray-500">Principal, Springfields</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="p-8 lg:p-12 bg-white">
          <div className="max-w-md mx-auto w-full">
            {/* Mobile Logo */}
            <div className="lg:hidden flex items-center justify-center gap-2 mb-8">
              <Image 
                src="/logo.png" 
                alt="SchooLama Logo" 
                width={32} 
                height={32}
              />
              <span className="text-xl font-bold">
                <span className="text-[#0E4F6F]">Schoo</span>
                <span className="text-[#5F5B9E]">Lama</span>
              </span>
            </div>

            {/* Header */}
            <div className="text-center lg:text-left mb-8">
              <h1 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-2">
                Sign in to your account
              </h1>
              <p className="text-gray-500">
                Welcome back! Please enter your credentials.
              </p>
            </div>

            {/* Login Form */}
            <form className="space-y-6">
              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="email"
                    id="email"
                    placeholder="you@example.com"
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#5F5B9E] focus:ring-2 focus:ring-[#F2F1FF] transition-all"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="password"
                    id="password"
                    placeholder="••••••••"
                    className="w-full pl-10 pr-12 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#5F5B9E] focus:ring-2 focus:ring-[#F2F1FF] transition-all"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <EyeOff size={18} />
                  </button>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2">
                  <input 
                    type="checkbox" 
                    className="w-4 h-4 rounded border-gray-300 text-[#5F5B9E] focus:ring-[#F2F1FF]"
                  />
                  <span className="text-sm text-gray-600">Remember me</span>
                </label>
                <Link 
                  href="/forgot-password" 
                  className="text-sm text-[#5F5B9E] hover:underline"
                >
                  Forgot password?
                </Link>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#5F5B9E] to-[#0E4F6F] text-white py-3 rounded-lg font-medium hover:from-[#4A4780] hover:to-[#0A3F5A] transition-all transform hover:scale-[1.02] focus:ring-2 focus:ring-[#F2F1FF] flex items-center justify-center gap-2 group"
              >
                Sign In
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Demo Credentials */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-gray-500">Demo credentials</span>
                </div>
              </div>

              <div className="bg-[#F7F8FA] rounded-lg p-4">
                <p className="text-sm text-gray-600 mb-2">Use these credentials for demo:</p>
                <div className="space-y-1 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-gray-700">Email:</span>
                    <span className="text-gray-500">admin@schooLama.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-gray-700">Password:</span>
                    <span className="text-gray-500">••••••••</span>
                  </div>
                </div>
              </div>
            </form>

            {/* Sign Up Link */}
            <p className="mt-8 text-center text-sm text-gray-500">
              Don't have an account?{' '}
              <Link href="/register" className="text-[#5F5B9E] font-medium hover:underline">
                Sign up for free
              </Link>
            </p>

            {/* Social Login */}
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-gray-500">Or continue with</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                {[
                  { icon: "G", name: "Google", color: "text-red-500" },
                  { icon: "f", name: "Facebook", color: "text-blue-600" },
                  { icon: "in", name: "LinkedIn", color: "text-blue-700" }
                ].map((provider) => (
                  <button
                    key={provider.name}
                    className="flex items-center justify-center px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors group"
                  >
                    <span className={`font-bold ${provider.color} group-hover:scale-110 transition-transform`}>
                      {provider.icon}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

// Add missing import
import { GraduationCap } from "lucide-react";