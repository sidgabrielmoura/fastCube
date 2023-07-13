import Link from "next/link";

export function Navbar(){
    return(
        <>
            <main className="w-[100%] h-[60px] bg-[#8c6bfc] flex items-center justify-around fixed opacity-90">
                <Link href={"/f2l"} className="text-white text-lg hover:text-gray-200">F2L</Link>
                <Link href={"/oll"} className="text-white text-lg hover:text-gray-200">OLL</Link>
                <Link href={"/pll"} className="text-white text-lg hover:text-gray-200">PLL</Link>
            </main>
        </>
    )
}