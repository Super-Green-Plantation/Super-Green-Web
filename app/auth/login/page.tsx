"use client";

import { ArrowRight, EyeOff, Lock, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import z, { email } from "zod";

const useSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<Record<string, string>>({});

  const router = useRouter();

  async function login(data: any) {
    data.e.preventDefault(); // prevent page refresh

    // Validate input data
    const validation = useSchema.safeParse({
      email: data.email,
      password: data.password,
    });

    if (!validation.success) {
      const fieldErrors: Record<string, string> = {};

      validation.error.issues.forEach((err) => {
        const fieldName = err.path[0] as string;
        fieldErrors[fieldName] = err.message;
      });
      setError(fieldErrors);
      return;
    }
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
        }),
      });

      const result = await response.json(); // parse JSON

      const token = result.token;
      localStorage.setItem("token", token);

      console.log(token);

      if (response.ok) {
        toast.success(result.message);
        router.push("/dashboard");
      } else {
        // show API's custom error message
        toast.error(result.message);
      }
    } catch (error) {
      toast.error("Login failed, try again!");
      console.error(error);
    }
  }

  return (
    <div className="w-full min-h-screen grid grid-cols-1 lg:grid-cols-2">
      {/* Left Side: Visual/Branding (Mirroring Register for consistency) */}
      <div className="relative hidden lg:flex items-center justify-center bg-green-900">
        <Image
          src="/pl2.png" // Use a calming, evening-time farm shot or a focused close-up
          alt="Sustainable agriculture focus"
          fill
          className="object-cover opacity-30"
          priority
          sizes="object-cover"
        />
        <div className="relative z-10 p-12 text-white max-w-lg">
          <h1 className="text-4xl font-bold mb-4">
            Welcome Back to SuperGreen
          </h1>
          <p className="text-lg text-green-50 mb-8 font-light leading-relaxed">
            Log in to access your dashboard, manage your supply chain, and stay
            updated with our latest harvests.
          </p>
        </div>
      </div>

      {/* Right Side: Login Form */}
      <div className="flex items-center justify-center p-8 bg-gray-50">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="lg:hidden mb-12 text-center">
            <h2 className="text-3xl font-bold text-green-700">SuperGreen</h2>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100">
            <div className="mb-10 text-center lg:text-left">
              <h2 className="text-3xl font-bold text-gray-900">Login</h2>
              <p className="text-gray-500 text-sm mt-2">
                New to the platform?
                <Link
                  href="/auth/register"
                  className="text-green-600 font-semibold hover:underline ml-1"
                >
                  Create an account
                </Link>
              </p>
            </div>

            <form
              className="space-y-6"
              onSubmit={(e) => login({ e, email, password })}
            >
              {/* Email */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 ml-1">
                  Email
                </label>
                <div className="relative group">
                  <Mail
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-green-600 transition-colors"
                    size={20}
                  />
                  <input
                    type="email"
                    placeholder="name@company.com"
                    className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-green-500/20 focus:border-green-500 outline-none transition-all"
                    
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {error.email && (
                    <p className="text-red-500 text-xs mt-1">{error.email}</p>
                  )}
                </div>
              </div>

              {/* Password */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">
                    Password
                  </label>
                  <Link
                    href="/forgot-password"
                    className="text-xs font-semibold text-green-600 hover:text-green-700"
                  >
                    Forgot?
                  </Link>
                </div>
                <div className="relative group">
                  <Lock
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-green-600 transition-colors"
                    size={20}
                  />
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full pl-11 pr-12 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-green-500/20 focus:border-green-500 outline-none transition-all"
                    
                    onChange={(e) => setPassword(e.target.value)}
                  />

                  {error.password && (
                    <p className="text-red-500 text-xs mt-1">
                      {error.password}
                    </p>
                  )}
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <EyeOff size={18} />
                  </button>
                </div>
              </div>

              {/* Remember Me */}
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="remember"
                  className="w-4 h-4 accent-green-600 rounded"
                />
                <label
                  htmlFor="remember"
                  className="text-sm text-gray-600 font-medium"
                >
                  Remember me for 30 days
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-green-700 hover:bg-green-800 text-white font-bold py-4 rounded-2xl shadow-lg shadow-green-100 transition-all flex items-center justify-center gap-3 transform active:scale-[0.98]"
              >
                Sign In
                <ArrowRight size={20} />
              </button>
            </form>

            {/* Divider */}
            <div className="relative my-10">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-gray-100"></span>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-4 text-gray-400 font-medium tracking-tighter">
                  Secure Login
                </span>
              </div>
            </div>

            {/* Social Logins */}
            <div className="grid grid-cols-1 gap-3">
              <button className="flex items-center justify-center gap-3 py-3.5 border border-gray-200 rounded-2xl hover:bg-gray-50 transition-all text-sm font-semibold text-gray-700">
                <img src="/google.jpg" alt="Google" className="w-5 h-5" />
                Sign in with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
