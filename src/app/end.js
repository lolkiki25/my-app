import Image from "next/image";
export function EndForm({form, onChange, onChangeStep}) {
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
          <h1 className="font-semibold text-black text-[26px] mt-[8px]">You're All Set 🔥</h1>
          <p className="text-gray-400 mt-[8px] font-inter text-[19px] mb-[32px]">We have received your submission. Thank you!</p>
        </div>
      </div>
    );
  }