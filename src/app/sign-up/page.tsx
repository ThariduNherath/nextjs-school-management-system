// app/register/page.tsx
import Image from "next/image";
import Link from "next/link";
import { 
  Mail, 
  Lock, 
  User, 
  ArrowRight, 
  Eye, 
  EyeOff,
  GraduationCap,
  Phone,
  Calendar,
  BookOpen
} from "lucide-react";

const RegisterPage = () => {
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
                {/* Abstract illustration */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#C3EBFA] to-[#DBDAFE] rounded-full opacity-50 animate-pulse" />
                <div className="absolute inset-4 bg-white rounded-full shadow-inner flex flex-col items-center justify-center">
                  <GraduationCap size={60} className="text-[#5F5B9E]" />
                  <div className="flex gap-1 mt-2">
                    <div className="w-2 h-2 rounded-full bg-[#0E4F6F]"></div>
                    <div className="w-2 h-2 rounded-full bg-[#5F5B9E]"></div>
                    <div className="w-2 h-2 rounded-full bg-[#C3EBFA]"></div>
                  </div>
                </div>
              </div>
              
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Join SchooLama Today!
              </h2>
              <p className="text-gray-600 max-w-sm">
                Create your account and start managing your educational journey with our comprehensive platform.
              </p>

              {/* Benefits List */}
              <div className="mt-8 space-y-3 text-left">
                {[
                  "🎓 Student & teacher management",
                  "📊 Real-time analytics dashboard",
                  "📅 Interactive calendar & events",
                  "💬 Instant messaging",
                  "📝 Assignment tracking"
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
                "The best decision we made for our school. Highly recommended!"
              </p>
              <div className="mt-2 flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#E2F8FF] flex items-center justify-center">
                  <span className="text-xs font-bold text-[#0E4F6F]">MS</span>
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-800">Mary Smith</p>
                  <p className="text-xs text-gray-500">Teacher, Lincoln High</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Registration Form */}
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
                Create an account
              </h1>
              <p className="text-gray-500">
                Join our community and start your journey.
              </p>
            </div>

            {/* Registration Form */}
            <form className="space-y-4">
              {/* Name Fields - Grid */}
              <div className="grid grid-cols-2 gap-3">
                {/* First Name */}
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    <input
                      type="text"
                      id="firstName"
                      placeholder="John"
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#5F5B9E] focus:ring-2 focus:ring-[#F2F1FF] transition-all"
                    />
                  </div>
                </div>

                {/* Last Name */}
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    <input
                      type="text"
                      id="lastName"
                      placeholder="Doe"
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#5F5B9E] focus:ring-2 focus:ring-[#F2F1FF] transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Email */}
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

              {/* Phone Number */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="tel"
                    id="phone"
                    placeholder="+1 234 567 890"
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#5F5B9E] focus:ring-2 focus:ring-[#F2F1FF] transition-all"
                  />
                </div>
              </div>

              {/* Role Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  I am a
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { value: "student", label: "Student", icon: "🎓" },
                    { value: "teacher", label: "Teacher", icon: "👩‍🏫" },
                    { value: "parent", label: "Parent", icon: "👪" }
                  ].map((role) => (
                    <label key={role.value} className="relative cursor-pointer">
                      <input type="radio" name="role" value={role.value} className="peer sr-only" />
                      <div className="flex flex-col items-center gap-1 p-3 border border-gray-200 rounded-lg peer-checked:border-[#5F5B9E] peer-checked:bg-[#F2F1FF] hover:bg-gray-50 transition-all">
                        <span className="text-lg">{role.icon}</span>
                        <span className="text-xs text-gray-600 peer-checked:text-[#5F5B9E] font-medium">
                          {role.label}
                        </span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* School/Institution */}
              <div>
                <label htmlFor="school" className="block text-sm font-medium text-gray-700 mb-2">
                  School / Institution
                </label>
                <div className="relative">
                  <BookOpen className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="text"
                    id="school"
                    placeholder="Enter your school name"
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#5F5B9E] focus:ring-2 focus:ring-[#F2F1FF] transition-all"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="password"
                    id="password"
                    placeholder="Create a password"
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

              {/* Confirm Password */}
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="password"
                    id="confirmPassword"
                    placeholder="Confirm your password"
                    className="w-full pl-10 pr-12 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#5F5B9E] focus:ring-2 focus:ring-[#F2F1FF] transition-all"
                  />
                </div>
              </div>

              {/* Password Strength Indicator */}
              <div className="space-y-1">
                <div className="flex gap-1">
                  {[1, 2, 3, 4].map((level) => (
                    <div key={level} className="h-1 flex-1 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-[#5F5B9E] to-[#0E4F6F] rounded-full"
                        style={{ width: level <= 3 ? '100%' : '0%' }}
                      ></div>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-500">Password strength: Strong</p>
              </div>

              {/* Terms and Conditions */}
              <label className="flex items-start gap-2 cursor-pointer">
                <input 
                  type="checkbox"
                  className="mt-1 w-4 h-4 rounded border-gray-300 text-[#5F5B9E] focus:ring-[#F2F1FF]"
                />
                <span className="text-sm text-gray-600">
                  I agree to the{' '}
                  <Link href="/terms" className="text-[#5F5B9E] hover:underline">
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link href="/privacy" className="text-[#5F5B9E] hover:underline">
                    Privacy Policy
                  </Link>
                </span>
              </label>

              {/* Register Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#5F5B9E] to-[#0E4F6F] text-white py-3 rounded-lg font-medium hover:from-[#4A4780] hover:to-[#0A3F5A] transition-all transform hover:scale-[1.02] focus:ring-2 focus:ring-[#F2F1FF] flex items-center justify-center gap-2 group"
              >
                Create Account
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>

            {/* Login Link */}
            <p className="mt-6 text-center text-sm text-gray-500">
              Already have an account?{' '}
              <Link href="/login" className="text-[#5F5B9E] font-medium hover:underline">
                Sign in
              </Link>
            </p>

            {/* Social Sign Up */}
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-gray-500">Or sign up with</span>
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

export default RegisterPage;