import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Mail, Lock, Eye, EyeOff, Phone } from "lucide-react";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
      terms: false,
    },
  });

  const password = watch("password");

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const onSubmit = (data) => {
    console.log("Registration Data Submitted:", data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 font-inter">
      <div className="bg-white shadow-xl rounded-xl p-8 md:p-12 w-full max-w-2xl">
        <h2 className="text-3xl font-bold text-center mb-10 text-primary">
          Create Your Account
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Email Input Field */}
          <div>
            <label
              className="block text-lg font-semibold text-gray-700 mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                <Mail className="h-5 w-5" />
              </span>
              <input
                id="email"
                type="email"
                placeholder="Enter your Email"
                className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary transition duration-150 ease-in-out ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  },
                })}
              />
            </div>
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label
              className="block text-lg font-semibold text-gray-700 mb-2"
              htmlFor="phoneNumber"
            >
              Phone Number
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                <Phone className="h-5 w-5" />
              </span>
              <input
                id="phoneNumber"
                type="tel"
                placeholder="Enter your Phone Number"
                className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary transition duration-150 ease-in-out ${
                  errors.phoneNumber ? "border-red-500" : "border-gray-300"
                }`}
                {...register("phoneNumber", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "Invalid phone number",
                  },
                  minLength: {
                    value: 8,
                    message: "Phone number must be at least 8 digits",
                  },
                })}
              />
            </div>
            {errors.phoneNumber && (
              <p className="mt-1 text-sm text-red-500">
                {errors.phoneNumber.message}
              </p>
            )}
          </div>

          {/* Password Input Field */}
          <div>
            <label
              className="block text-lg font-semibold text-gray-700 mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                <Lock className="h-5 w-5" />
              </span>
              <input
                id="password"
                type={passwordVisible ? "text" : "password"}
                placeholder="Create a Password"
                className={`w-full pl-10 pr-10 py-3 border rounded-lg focus:ring-2 focus:ring-primary transition duration-150 ease-in-out ${
                  errors.password ? "border-red-500" : "border-gray-300"
                }`}
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must have at least 6 characters",
                  },
                })}
              />
              <button
                type="button"
                onClick={() => setPasswordVisible(!passwordVisible)}
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-primary transition duration-150"
                aria-label={passwordVisible ? "Hide password" : "Show password"}
              >
                {passwordVisible ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>
            {errors.password && (
              <p className="mt-1 text-sm text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>

          <div>
            <label
              className="block text-lg font-semibold text-gray-700 mb-2"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                <Lock className="h-5 w-5" />
              </span>
              <input
                id="confirmPassword"
                type={confirmPasswordVisible ? "text" : "password"}
                placeholder="Confirm a Password"
                className={`w-full pl-10 pr-10 py-3 border rounded-lg focus:ring-2 focus:ring-primary transition duration-150 ease-in-out ${
                  errors.confirmPassword ? "border-red-500" : "border-gray-300"
                }`}
                {...register("confirmPassword", {
                  required: "Confirmation is required",
                  validate: (value) =>
                    value === password || "Passwords do not match",
                })}
              />
              <button
                type="button"
                onClick={() =>
                  setConfirmPasswordVisible(!confirmPasswordVisible)
                }
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-primary transition duration-150"
                aria-label={
                  confirmPasswordVisible ? "Hide password" : "Show password"
                }
              >
                {confirmPasswordVisible ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="mt-1 text-sm text-red-500">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          <div className="flex items-start text-sm pt-2">
            <input
              id="terms"
              type="checkbox"
              className="h-4 w-4 cursor-pointer text-primary border-gray-300 rounded focus:ring-primary mt-1"
              {...register("terms", {
                required: "You must agree to the terms",
              })}
            />
            <label htmlFor="terms" className="ml-3 text-gray-600">
              I agree to the
              <a
                href="#"
                className="font-medium text-primary hover:text-[#722641] ml-1"
              >
                Privacy Policy
              </a>
              <span className="mx-1">and</span>
              <a
                href="#"
                className="font-medium text-primary hover:text-[#722641]"
              >
                Terms of service
              </a>
            </label>
          </div>
          {errors.terms && (
            <p className="mt-1 text-sm text-red-500">{errors.terms.message}</p>
          )}

          <button
            type="submit"
            className="w-full cursor-pointer flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-lg text-lg font-medium text-white bg-primary hover:bg-[#722641] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition duration-200 mt-8"
          >
            Sign Up
          </button>
        </form>

        <div className="mt-8 text-center text-sm text-gray-600">
          Already Have Account?
          <a
            href="#"
            className="font-bold text-primary hover:text-[#722641] transition duration-150 ml-1"
          >
            Sign In Here
          </a>
        </div>
      </div>
    </div>
  );
};

export default Register;
// 