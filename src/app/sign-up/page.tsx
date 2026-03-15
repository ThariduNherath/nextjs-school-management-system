"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { 
  Mail, Lock, User, ArrowRight, EyeOff, GraduationCap, 
  Eye
} from "lucide-react";

const SignUpPage = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();

    // 1. STRONG PASSWORD LOGIC
    const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!strongPasswordRegex.test(password)) {
      setError("අවම අකුරු 8ක්, ලොකු/කුඩා අකුරු, ඉලක්කමක් සහ විශේෂ ලකුණක් (@$!%*?&) අවශ්‍යයි.");
      return; 
    }

    // 2. SAVE DATA (Validation pass වුණොත් විතරක් මේක වැඩ කරනවා)
    const newUser = {
      firstName,
      lastName,
      email,
      password,
    };

    localStorage.setItem("registeredUser", JSON.stringify(newUser));
    localStorage.setItem("userRole", "user");
    
    router.push("/home");
  };

  const handleGoogleSignUp = () => {
    localStorage.setItem("userRole", "user");
    router.push("/home");
  };

  return (
    <div className="min-h-screen bg-[#F7F8FA] flex items-center justify-center p-4">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 bg-white rounded-2xl shadow-xl overflow-hidden">
        
        {/* Left Side (Branding) */}
        <div className="relative hidden lg:block bg-gradient-to-br from-[#E2F8FF] to-[#F2F1FF] p-12">
          <div className="absolute inset-0 bg-grid-black/[0.02] [mask-image:linear-gradient(0deg,transparent,black)]" />
          <div className="relative z-10 h-full flex flex-col">
            <div className="flex items-center gap-2 mb-12">
              <Image src="/logo.png" alt="SchooLama Logo" width={40} height={40} className="drop-shadow-md" />
              <span className="text-2xl font-bold">
                <span className="text-[#0E4F6F]">School</span><span className="text-[#5F5B9E]">Master</span>
              </span>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center text-center">
              <div className="relative w-64 h-64 mb-8">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#C3EBFA] to-[#DBDAFE] rounded-full opacity-50 animate-pulse" />
                <div className="absolute inset-4 bg-white rounded-full shadow-inner flex flex-col items-center justify-center">
                  <GraduationCap size={60} className="text-[#5F5B9E]" />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Join SchoolMaster Today!</h2>
              <p className="text-gray-600 max-w-sm">Create your account and start managing your educational journey.</p>
            </div>
          </div>
        </div>

        {/* Right Side (Form) */}
        <div className="p-8 lg:p-12 bg-white">
          <div className="max-w-md mx-auto w-full">
            <div className="text-center lg:text-left mb-8">
              <h1 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-2">Create an account</h1>
              <p className="text-gray-500 text-sm">Join our community and start learning.</p>
            </div>

            <form className="space-y-4" onSubmit={handleSignUp}>
              {/* Name Fields */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">First Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input 
                      type="text" 
                      required 
                      placeholder="John" 
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-[#5F5B9E] transition-all" 
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Last Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input 
                      type="text" 
                      required 
                      placeholder="Doe" 
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-[#5F5B9E] transition-all" 
                    />
                  </div>
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input 
                    type="email" 
                    required 
                    placeholder="name@example.com" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-[#5F5B9E] transition-all" 
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input 
                    type={showPassword ? "text" : "password"} 
                    required 
                    placeholder="••••••••" 
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                        if(error) setError(""); // Type කරද්දී error එක hide කරනවා
                    }}
                    className={`w-full pl-10 pr-10 py-2.5 border rounded-lg focus:outline-none transition-all ${error ? 'border-red-500' : 'border-gray-200 focus:border-[#5F5B9E]'}`}
                  />
                  <button 
                    type="button" 
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
                  </button>
                </div>
                {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
              </div>

              {/* Submit Button */}
              <button type="submit" className="w-full bg-gradient-to-r from-[#5F5B9E] to-[#0E4F6F] text-white py-3 rounded-lg font-medium flex items-center justify-center gap-2 group shadow-lg shadow-indigo-100 mt-2">
                Create Account <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Or continue with</span>
                </div>
              </div>

              {/* Google Button */}
              <button 
                type="button"
                onClick={handleGoogleSignUp}
                className="w-full flex items-center justify-center gap-3 bg-white border border-gray-200 text-gray-700 py-2.5 rounded-lg font-medium hover:bg-gray-50 transition-colors shadow-sm"
              >
                <svg width="20" height="20" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Google
              </button>
            </form>

            <p className="mt-8 text-center text-sm text-gray-500">
              Already have an account? <Link href="/login" className="text-[#5F5B9E] font-semibold hover:underline">Sign in</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;