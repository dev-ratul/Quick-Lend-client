import React, { useState } from "react";
import { useForm } from 'react-hook-form';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react'; // Lucide icons imported

// ইনলাইন SVG আইকন কম্পোনেন্টগুলো সরিয়ে দেওয়া হয়েছে

const Login = () => {
  // React Hook Form থেকে প্রয়োজনীয় ফাংশনগুলো নিয়ে আসা
  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false
    }
  });

  const [passwordVisible, setPasswordVisible] = useState(false);

  // ফর্ম সাবমিট হ্যান্ডলার ফাংশন - শুধুমাত্র console.log করবে
  const onSubmit = (data) => {
    // এখন শুধু ডাটা কনসোলে দেখানো হচ্ছে
    console.log("Form Data Submitted:", data);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="min-h-screen flex items-center justify-center  p-4 font-inter">
      {/* মূল লগইন কার্ড */}
      <div className="bg-white shadow-xl rounded-xl p-8 md:p-12 w-full max-w-md">
        
        {/* হেডিং */}
        <h2 className="text-4xl font-bold text-center mb-8 text-primary">
          Welcome Back
        </h2>

        {/* ফর্ম */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          
          {/* Email Input Field */}
          <div>
            <label className="block text-lg font-medium text-primary mb-2" htmlFor="email">
              Email
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                <Mail className="h-5 w-5" /> {/* Lucide Mail icon */}
              </span>
              <input
                id="email"
                type="email"
                placeholder="Enter your Email"
                className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-pink-700 transition duration-150 ease-in-out ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address"
                  }
                })}
              />
            </div>
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>

          {/* Password Input Field */}
          <div>
            <label className="block text-lg font-medium text-primary mb-2" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                <Lock className="h-5 w-5" /> {/* Lucide Lock icon */}
              </span>
              <input
                id="password"
                type={passwordVisible ? "text" : "password"}
                placeholder="Enter your password"
                className={`w-full pl-10 pr-10 py-3 border rounded-lg focus:ring-2 focus:ring-pink-700 transition duration-150 ease-in-out ${
                  errors.password ? 'border-red-500' : 'border-gray-300'
                }`}
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must have at least 6 characters"
                  }
                })}
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-pink-700 transition duration-150"
                aria-label={passwordVisible ? "Hide password" : "Show password"}
              >
                {passwordVisible ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />} {/* Lucide Eye/EyeOff icons */}
              </button>
            </div>
            {errors.password && (
              <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>
            )}
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center">
              <input
                id="remember_me"
                type="checkbox"
                className="h-4 w-4 text-pink-700 cursor-pointer border-gray-300 rounded focus:ring-pink-600"
                {...register("rememberMe")}
              />
              <label htmlFor="remember_me" className="ml-2 text-gray-600">
                Remember me
              </label>
            </div>
            <a href="#" className="font-medium text-[#E0AB0B] hover:text-pink-800 transition duration-150">
              Forgot password?
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-lg text-lg font-medium text-white bg-primary hover:bg-[#722641] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8A2E50] transition duration-200"
          >
            Sign Up
          </button>
        </form>

        {/* Sign Up Link */}
        <div className="mt-8 text-center text-gray-600">
          New To our Platform? 
          <a href="#" className="font-bold text-[#8A2E50] hover:text-[#722641] transition duration-150 ml-1">
            Sign Up Here
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
