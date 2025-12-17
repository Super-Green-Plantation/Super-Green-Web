'use client'

import { ArrowRight, Lock, Mail, Phone, ShieldCheck, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const RegisterPage = () => {
  return (
    <div className="min-h-screen w-screen grid grid-cols-1 lg:grid-cols-2">
      
      {/* Left Side: Visual/Branding (Hidden on Mobile) */}
      <div className="relative hidden lg:flex items-center justify-center bg-green-900">
        <Image
          src="/inquiry.png" // Replace with a high-quality field or seedling image
          alt="Sustainable farming"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="relative z-10 p-12 text-white max-w-lg">
          <div className="bg-white/20 backdrop-blur-md p-2 w-fit rounded-lg mb-6">
            <ShieldCheck size={32} className="text-green-300" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Join the SuperGreen Community</h1>
          <p className="text-lg text-green-50 mb-8 font-light leading-relaxed">
            Create an account to manage your orders, track sustainability impact, and access exclusive agricultural insights.
          </p>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-6 h-6 rounded-full bg-green-500/30 flex items-center justify-center shrink-0">
                <div className="w-2 h-2 rounded-full bg-green-400"></div>
              </div>
              <p className="text-sm">Access to premium wholesale pricing</p>
            </div>
            <div className="flex gap-4">
              <div className="w-6 h-6 rounded-full bg-green-500/30 flex items-center justify-center shrink-0">
                <div className="w-2 h-2 rounded-full bg-green-400"></div>
              </div>
              <p className="text-sm">Real-time logistics and farm-to-table tracking</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side: Registration Form */}
      <div className="flex items-center justify-center p-8 bg-gray-50">
        <div className="w-full max-w-md">
          {/* Mobile Logo / Branding */}
          <div className="lg:hidden mb-8 text-center">
            <h2 className="text-3xl font-bold text-green-700">SuperGreen</h2>
            <p className="text-gray-500 mt-2">Grow your future with us</p>
          </div>

          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Create Account</h2>
              <p className="text-gray-500 text-sm mt-1">Already have an account? 
                <Link href="/auth/login" className="text-green-600 font-semibold hover:underline ml-1">Log in</Link>
              </p>
            </div>

            <form className="space-y-5">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2 ml-1">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2 ml-1">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                    required
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2 ml-1">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="tel"
                    placeholder="+94 77 123 4567"
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2 ml-1">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                    required
                  />
                </div>
              </div>

              {/* Terms Checkbox */}
              <div className="flex items-start gap-3 mt-2">
                <input type="checkbox" id="terms" className="mt-1 accent-green-600 rounded" required />
                <label htmlFor="terms" className="text-xs text-gray-500 leading-tight">
                  I agree to the <Link href="/terms" className="text-green-600 hover:underline">Terms of Service</Link> and <Link href="/privacy" className="text-green-600 hover:underline">Privacy Policy</Link>.
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full group bg-green-700 hover:bg-green-800 text-white font-bold py-4 rounded-xl shadow-lg shadow-green-200 transition-all flex items-center justify-center gap-2"
              >
                Create Account
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>

            {/* Social Login Divider */}
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-gray-100"></span></div>
              <div className="relative flex justify-center text-xs uppercase"><span className="bg-white px-2 text-gray-400">Or register with</span></div>
            </div>

            {/* Social Buttons */}
            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-2 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors text-sm font-medium">
                <img src="/google.jpg" alt="Google" className="w-5 h-5" /> Google
              </button>
              <button className="flex items-center justify-center gap-2 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors text-sm font-medium">
                <img src="/fb.webp" alt="Facebook" className="w-5 h-5" /> Facebook
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;