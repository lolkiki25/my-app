"use client";
import Image from "next/image";
import { useState } from "react";
export function BasicForm({ form, onChange, onChangeStep }) {
    const [errors, setErrors] = useState({});
    function goToNext() {
        const newErrors = {};
        const nameRegex = /^[A-ZÀ-ÿ][a-zà-ÿ' -]*$/i;
        const userRegex = /^[a-zA-Z0-9._]{3,15}$/;

        if (form.first === "") {
            newErrors.first = "You must enter your first name";
        } else if (!nameRegex.test(form.first)) {
            newErrors.first = "Invalid first name format";
        } else {
            newErrors.first = null;
        }
        if (form.last === "") {
            newErrors.last = "You must enter your first name";
        } else if (!nameRegex.test(form.last)) {
            newErrors.last = "Invalid last name format";
        } else {
            newErrors.last = null;
        }

        if (form.user === "") {
            newErrors.user = "You must enter your first name";
        } else if (!nameRegex.test(form.user)) {
            newErrors.user = "Username must be 3–15 characters (letters, numbers, . or _ only)";
        } else {
            newErrors.user = null;
        }

        setErrors(newErrors);
        if (!newErrors.first && !newErrors.last && !newErrors.user) {
            onChangeStep("alhm");
        }

    }
    return (
        <div className="flex justify-center items-center bg-gray-300 w-full h-screen">
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
                        First name <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Placeholder"
                        className={`border w-full px-3 py-1 rounded-lg h-[44px] placeholder:text-gray-400 text-black focus:outline-none focus:ring-1 ${errors.first ? "border-red-500 focus:ring-red-500 text-red-500" : "border-gray-300 focus:ring-blue-400 text-black"
                            }`}
                        value={form.first}
                        onChange={(e) =>
                            onChange({
                                ...form,
                                first: e.target.value,
                            })
                        } />
                    {errors.first && <div className="text-red-500">{errors.first} </div>}
                </div>
                <div className="mt-[12px]">
                    <label className="text-black font-inter text-[14px]">
                        Last name <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Placeholder"
                        className={`border w-full px-3 py-1 rounded-lg h-[44px] placeholder:text-gray-400 text-black focus:outline-none focus:ring-1 ${errors.last ? "border-red-500 focus:ring-red-500 text-red-500" : "border-gray-300 focus:ring-blue-400 text-black"
                            }`}
                        value={form.last}
                        onChange={(e) =>
                            onChange({
                                ...form,
                                last: e.target.value,
                            })
                        }
                    />
                    {errors.last && <div className="text-red-500">{errors.last}</div>}
                </div>
                <div className="mt-[12px]">
                    <label className="text-black text-[14px] font-inter">
                        Username <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Placeholder"
                        className={`border w-full px-3 py-1 rounded-lg h-[44px] placeholder:text-gray-400 text-black focus:outline-none focus:ring-1 ${errors.user ? "border-red-500 focus:ring-red-500 text-red-500" : "border-gray-300 focus:ring-blue-400 text-black"
                            }`}
                        value={form.user}
                        onChange={(e) =>
                            onChange({
                                ...form,
                                user: e.target.value,
                            })
                        } />
                    {errors.user && <div className="text-red-500">{errors.user}</div>}
                </div>
                <div className="mt-[162px] mb-[32px]">
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