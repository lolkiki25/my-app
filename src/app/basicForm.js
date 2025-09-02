"use client";
import Image from "next/image";
export function BasicForm({ form, onChange, onChangeStep }) {
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
                        className="border  w-full px-3 py-1 rounded-lg h-[44px] placeholder:text-gray-400 text-black focus:outline-none focus:ring-1 focus:ring-blue-400 "
                        value={form.first}
                        onChange={(e) =>
                            onChange({
                                ...form,
                                first: e.target.value,
                            })
                        } />
                </div>
                <div className="mt-[12px]">
                    <label className="text-black font-inter text-[14px]">
                        Last name <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Placeholder"
                        className="border  w-full px-2 py-1 rounded-lg h-[44px] items-center placeholder:text-gray-400 text-black focus:outline-none focus:ring-1 focus:ring-blue-400"
                        value={form.last}
                        onChange={(e) =>
                            onChange({
                                ...form,
                                last: e.target.value,
                            })
                        }
                    />
                </div>
                <div className="mt-[12px]">
                    <label className="text-black text-[14px] font-inter">
                        Username <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Placeholder"
                        className="border  w-full px-2 py-1 rounded-lg h-[44px] items-center placeholder:text-gray-400 text-black focus:outline-none focus:ring-1 focus:ring-blue-400"
                        value={form.user}
                        onChange={(e) =>
                            onChange({
                                ...form,
                                user: e.target.value,
                            })
                        } />
                </div>
                <div className="mt-[162px] mb-[32px]">
                    <button onClick={() => onChangeStep("alhm")}
                        className="text-white bg-black w-full rounded-lg h-[44px] hover:bg-gray-600 flex items-center justify-center gap-2 font-medium">
                        Continue 1/3
                        <span className="text-lg">›</span>
                    </button>
                </div>
            </div>
        </div>
    );
}