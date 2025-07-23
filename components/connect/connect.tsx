import MovingDots from "./moving-dots";

export default function Connect() {
  return (
    <div className="h-screen flex items-center justify-center bg-[#583be9] p-4 sm:p-10 relative">
      <MovingDots />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="pointer-events-auto max-w-3xl space-y-3 text-center w-full">
          <div className="text-4xl sm:text-[87px] font-satoshi text-white font-semibold leading-tight sm:leading-[90px] tracking-tighter">
            Ready to Transform?
          </div>
          <div className="text-white/70 text-base sm:text-lg max-w-xs sm:max-w-lg flex flex-col justify-center items-center mx-auto">
            Join the MetaMorph Hackathon and be part of the next technological
            revolution. Register now to secure your spot in this cyberpunk
            coding adventure.
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8 sm:mt-10 mx-auto max-w-[300px] md:max-w-[500px] w-full">
            {/* <AnimatedButton
              className={"bg-white text-black w-48 h-14"}
              beforeText="Why Choose Us"
              afterText="Why Choose Us"
            /> */}
            <button className="bg-[#583be9] text-black font-bold text-lg sm:text-xl px-6 py-2 rounded-lg w-full sm:w-auto">
              Community Partner?
            </button>
            <button className="bg-white text-black font-bold text-lg sm:text-xl px-6 py-2 rounded-lg w-full sm:w-auto">
              Sponsor Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
