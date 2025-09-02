"use client";
import Image from "next/image";
export function CompleteForm({form, onChange, onChangeStep}) {
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
          <div className="mt-[162px] mb-[32px] flex justify-center items-center gap-[8px]">
            <button onClick={() => onChangeStep("alhm")}
            className="text-black bg-white border w-[128px] rounded-lg h-[44px] hover:bg-gray-600 flex items-center justify-center gap-2 font-medium">
               <span className="text-lg">‹</span>
              Back
            </button>
             <button onClick={() => onChangeStep("end")} 
            className="text-white bg-black w-full rounded-lg h-[44px] hover:bg-gray-600 flex items-center justify-center gap-2 font-medium">
              Continue 1/3
              <span className="text-lg">›</span>
            </button>
          </div>
        </div>
      </div>
    );
  }