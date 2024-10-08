import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex flex-col items-center pt-36">
      <h1 className=" md:text-6xl text-3xl text-bold tracking-tight">Find More Events Around You</h1>
        <p className="mb-12 mt-7 text-2xl md:text-3xl opacity-75 ">browse more than   <span className="font-bold text-accent italic underline">10,000 events</span> around you</p>
        <form className="w-full sm:w-[580px] ">
            <input
                className="w-full h-16 text-lg rounded-lg bg-white/[7%] ring-accent/50 transition focus:ring-2  focus:bg-white/20  px-6 outline-none"

                spellCheck={false} placeholder="Search for events in any city" />
        </form>
        <section className="mt-4 flex gap-x-4 text-sm text-white/50">
            <h2>Popular:</h2>
             <div className="space-x-2 font-semibold   ">
                 <Link href="events/austin">Austin</Link>
                 <Link href="events/seattle">Seattle</Link>
             </div>
        </section>
    </main>

  )
}
