"use client";
import Image from "next/image";
import { useState } from "react";

export function AlhmForm({ form, onChange, onChangeStep }) {
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);


  function goToNext() {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{8}$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (form.email === "") {
      newErrors.email = "You must enter your email";
    } else if (!emailRegex.test(form.email)) {
      newErrors.email = "Invalid email format";
    } else {
      newErrors.email = null;
    }
    if (form.phone === "") {
      newErrors.phone = "You must enter your phone number";
    } else if (!phoneRegex.test(form.phone)) {
      newErrors.phone = "Invalid phone number format";
    } else {
      newErrors.phone = null;
    }
    if (!form.password) {
      newErrors.password = "You must enter a password";
    } else if (!passwordRegex.test(form.password)) {
      newErrors.password =
        "Password must be at least 8 characters, include upper, lower, number, and special character";
    } else {
      newErrors.password = null;
    }
    if (!form.passwords) {
      newErrors.passwords = "You must confirm your password";
    } else if (form.passwords !== form.password) {
      newErrors.passwords = "Passwords do not match";
    } else {
      newErrors.passwords = null;
    }

    setErrors(newErrors);
    if (!newErrors.email && !newErrors.phone && !newErrors.password && !newErrors.passwords) {
      onChangeStep("complete");
    }
  }
  return (
    <div className="flex justify-center items-center bg-gray-300 w-full h-200">
      <div className="w-[480px] bg-white border-black px-8 pt-8 rounded-lg">
        <div>
          <Image
            src="/logo.svg"
            alt="App Logo"
            width={60}
            height={60}
          />
        </div>
        <h1 className="font-semibold text-black text-[26px] mt-[8px]">Join Us! 😎</h1>
        <p className="text-gray-400 mt-[8px] font-inter text-[19px]">Please provide all current information accurately.</p>
        <div className="mt-[28px]">
          <label className=" text-black font-inter text-[14px]">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Placeholder"
            className={`border w-full px-3 py-1 rounded-lg h-[44px] placeholder:text-gray-400 focus:outline-none focus:ring-1
            ${errors.email
                ? "border-red-500 focus:ring-red-500 text-red-500"
                : "border-gray-300 focus:ring-blue-400 text-black"
              }`}
            value={form.email}
            onChange={(e) =>
              onChange({
                ...form,
                email: e.target.value,
              })
            } />
             {errors.email && <div className="text-red-500 text-sm mt-1">{errors.email}</div>}
        </div>
        <div className="mt-[12px]">
          <label className="text-black font-inter text-[14px]">
            Phone number <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Placeholder"
            className={`border w-full px-3 py-1 rounded-lg h-[44px] placeholder:text-gray-400 focus:outline-none focus:ring-1
    ${errors.phone
                ? "border-red-500 focus:ring-red-500 text-red-500"
                : "border-gray-300 focus:ring-blue-400 text-black"
              }`}
            value={form.phone}
            onChange={(e) =>
              onChange({
                ...form,
                phone: e.target.value,
              })
            } 
          />
           {errors.phone && <div className="text-red-500">{errors.phone}</div>}
        </div>
        <div className="mt-[12px] relative">
          <label className="text-black text-[14px] font-inter">
            Password <span className="text-red-500">*</span>
          </label>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            className={`border w-full px-3 py-1 rounded-lg h-[44px] placeholder:text-gray-400 focus:outline-none focus:ring-1
    ${errors.password
                ? "border-red-500 focus:ring-red-500 text-red-500"
                : "border-gray-300 focus:ring-blue-400 text-black"
              }`}
            value={form.password}
            onChange={(e) =>
              onChange({
                ...form,
                password: e.target.value,
              })
            } />
            <button
            type="button"
            className="absolute right-2 top-2 text-gray-500"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "Hide" : "Show"}
            
          </button>
           {errors.password && <div className="text-red-500">{errors.password}</div>}

        </div>
        <div className="mt-[12px] relative">
          <label className="text-black text-[14px] font-inter">
            Confirm password <span className="text-red-500">*</span>
          </label>
          <input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm password"
            className={`border w-full px-3 py-1 rounded-lg h-[44px] placeholder:text-gray-400 focus:outline-none focus:ring-1
    ${errors.passwords
                ? "border-red-500 focus:ring-red-500 text-red-500"
                : "border-gray-300 focus:ring-blue-400 text-black"
              }`}
            value={form.passwords}
            onChange={(e) =>
              onChange({
                ...form,
                passwords: e.target.value,
              })
            } />
            
            <button
            type="button"
            className="absolute right-2 top-2 text-gray-500"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? "Hide" : "Show"}
          </button>
          {errors.passwords && <div className="text-red-500">{errors.passwords}</div>}
        </div>
        <div className="mt-[162px] mb-[32px] flex justify-center items-center gap-[8px]">
          <button onClick={() => onChangeStep("basic")}
            className="text-black bg-white border w-[128px] rounded-lg h-[44px] hover:bg-gray-600 flex items-center justify-center gap-2 font-medium">
            <span className="text-lg">‹</span>
            Back
          </button>
          <button onClick={goToNext}
            className="text-white bg-black w-full rounded-lg h-[44px] hover:bg-gray-600 flex items-center justify-center gap-2 font-medium">
            Continue 1/3
            <span className="text-lg">›</span>
          </button>
        </div>
      </div>
    </div>
  );
}