import Planet from "./Planet"

export default function Section() {
  return (
    <div className='w-full lg:max-w-[1280px] pt-24 md:pt-32 lg:pt-[10em] mx-auto p-8 max-h-screen flex flex-col items-center md:items-start'>
      <div className='flex gap-4 md:text-xl lg:text-[28px] uppercase tracking-[2.7px] md:tracking-[3.38px] lg:tracking-[4.72px]'><span className='opacity-25'>01</span><h2>Pick your destination</h2></div>
      <div className="w-full lg:max-w-[1280px] flex overflow-x-hidden md:scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-slate-500">
        <Planet />
      </div>
    </div>
  )
}
