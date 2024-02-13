import Planet from "./Planet"

export default function Section() {
  return (
    <div className='w-full lg:max-w-[1280px] overflow-x-hidden md:scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-slate-500 pt-24 md:pt-32 px-8 lg:pt-[10em] mx-auto max-h-screen flex flex-col items-center md:items-start'>
      <div className='flex gap-4 md:text-xl lg:text-[28px] uppercase tracking-[2.7px] md:tracking-[3.38px] lg:tracking-[4.72px] px-8'><span className='opacity-25'>01</span><h2>Pick your destination</h2></div>
      <div className="w-full lg:max-w-[1280px] flex">
        <Planet />
      </div>
    </div>
  )
}
