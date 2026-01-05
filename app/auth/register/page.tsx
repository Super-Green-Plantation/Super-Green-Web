"use client";

import { Spinner } from "@/components/ui/spinner";
import { createClient } from "@/lib/supabase/client";
import {
  ArrowRight,
  Eye,
  EyeOff,
  Lock,
  Mail,
  Phone,
  ShieldCheck,
  User,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";

const registerSchema = z
  .object({
    fullName: z.string().min(1, "Full name is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(10, "Phone number must be at least 10 digits"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

const RegisterPage = () => {
  const [full_name, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [load, setLoad] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const first_name = full_name.split(" ")[0] || "";
  const last_name = full_name.split(" ").slice(1).join(" ") || "";

  const router = useRouter();
  const supabase = createClient();

  async function register(data: any) {
    data.e.preventDefault();
    setLoad(true);

    const result = registerSchema.safeParse({
      fullName: data.first_name + " " + data.last_name,
      email: data.email,
      phone: data.phone,
      password: data.password,
      confirmPassword: data.confirmPassword,
    });

    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        const fieldName = issue.path[0] as string;
        fieldErrors[fieldName] = issue.message;
      });
      setLoad(false);
      setErrors(fieldErrors);
      return;
    }

    setErrors({});

    try {
      console.log("🔵 Attempting signup with:", { email: data.email });

      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: data.email,
        password: data.password,
        options: {
          data: {
            first_name: data.first_name,
            last_name: data.last_name,
            phone: data.phone,
          },
        },
      });

      console.log("🟢 Supabase auth response:", {
        user: authData?.user?.id,
        session: authData?.session,
        error: authError,
      });

      if (authError) {
        setLoad(false);
        toast.error(authError.message);
        return;
      }

      if (authData.user) {
        toast.success("Registration successful!");
        setLoad(false);

        fetch("/api/mail", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: data.email,
            username: data.first_name,
          }),
        });

        router.push("/");
      }
    } catch (error) {
      console.error("🔴 Registration error:", error);
      setLoad(false);
      toast.error("Registration failed!");
    }
  }

  const signUpWithGoogle = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${location.origin}/auth/callback`,
      },
    });

    if (error) {
      toast.error("Failed to sign in with Google");
    }
  };

  return (
    <div className="min-h-screen w-screen grid grid-cols-1 lg:grid-cols-2">
      {/* Left Side: Visual/Branding (Hidden on Mobile) */}
      <div className="relative hidden lg:flex items-center justify-center bg-green-900">
        <Image
          src="/inquiry.png"
          alt="Sustainable farming"
          fill
          className="object-cover opacity-30"
          priority
          sizes="50vw"
        />
        <div className="relative z-10 p-12 text-white max-w-lg">
          <div className="bg-white/20 backdrop-blur-md p-2 w-fit rounded-lg mb-6">
            <ShieldCheck size={32} className="text-green-300" />
          </div>
          <h1 className="text-4xl font-bold mb-4">
            Join the SuperGreen Community
          </h1>
          <p className="text-lg text-green-50 mb-8 font-light leading-relaxed">
            Create an account to manage your orders, track sustainability
            impact, and access exclusive agricultural insights.
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
              <p className="text-sm">
                Real-time logistics and farm-to-table tracking
              </p>
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
            
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                Create Account
              </h2>

            <form
              className="space-y-5"
              onSubmit={(e) =>
                register({
                  e,
                  first_name,
                  last_name,
                  email,
                  phone,
                  password,
                  confirmPassword,
                })
              }
            >
              {/* Full Name */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2 ml-1">
                  Full Name
                </label>
                <div className="relative">
                  <User
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                    size={18}
                  />
                  <input
                    type="text"
                    placeholder="John Doe"
                    value={full_name}
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                    onChange={(e) => setFullName(e.target.value)}
                  />
                  {errors.fullName && (
                    <p className="text-sm text-red-600 mt-1">
                      {errors.fullName}
                    </p>
                  )}
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2 ml-1">
                  Email Address
                </label>
                <div className="relative">
                  <Mail
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                    size={18}
                  />
                  <input
                    type="email"
                    placeholder="john@example.com"
                    value={email}
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {errors.email && (
                    <p className="text-sm text-red-600 mt-1">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2 ml-1">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                    size={18}
                  />
                  <input
                    type="tel"
                    placeholder="+94 77 123 4567"
                    value={phone}
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  {errors.phone && (
                    <p className="text-sm text-red-600 mt-1">{errors.phone}</p>
                  )}
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2 ml-1">
                  Password
                </label>
                <div className="relative">
                  <Lock
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                    size={18}
                  />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={password}
                    className="w-full pl-10 pr-12 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 outline-none transition-all"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-green-600 transition-colors"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-sm text-red-600 mt-1">{errors.password}</p>
                )}
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2 ml-1">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                    size={18}
                  />
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={confirmPassword}
                    className="w-full pl-10 pr-12 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 outline-none transition-all"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-green-600 transition-colors"
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p className="text-sm text-red-600 mt-1">
                    {errors.confirmPassword}
                  </p>
                )}
              </div>

              {/* Terms Checkbox */}
              <div className="flex items-start gap-3 mt-2">
                <input
                  type="checkbox"
                  id="terms"
                  className="mt-1 accent-green-600 rounded"
                  required
                />
                <label
                  htmlFor="terms"
                  className="text-xs text-gray-500 leading-tight"
                >
                  I agree to the{" "}
                  <Link
                    href="/terms"
                    className="text-green-600 hover:underline"
                  >
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/privacy"
                    className="text-green-600 hover:underline"
                  >
                    Privacy Policy
                  </Link>
                  .
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={load}
                className="w-full group bg-green-700 hover:bg-green-800 text-white font-bold py-4 rounded-xl shadow-lg shadow-green-200 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {load ? (
                  <>
                    Registering ...
                    <Spinner className="w-5 h-5 border-white" />
                  </>
                ) : (
                  <>
                    Create Account
                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </>
                )}
              </button>
            </form>

            {/* Social Login Divider */}
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-gray-100"></span>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-gray-400">
                  Or register with
                </span>
              </div>
            </div>

            {/* Social Buttons */}
            <div className="grid grid-cols-1 gap-4">
              <button
                onClick={signUpWithGoogle}
                className="flex items-center justify-center gap-2 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors text-sm font-medium"
              >
                <img src="/google.jpg" alt="Google" className="w-5 h-5" />{" "}
                Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
