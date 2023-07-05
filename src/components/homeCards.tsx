import Link from "next/link";

export function CardsHome(){

    return (
        <>
            <main className="flex gap-[134px]">
                <div>
                    <Link href={"/f2l"}>
                        <div className="bg-[url(../assets/f2l-caso-34.webp)] w-[200px] h-[180px] rounded-2xl
                        bg-cover bg-center cursor-pointer hover:rotate-12 transition-all duration-200" />                   
                    </Link>
                    <h1 className="text-[28px] font-extrabold text-neutral-500 text-center pt-4">F2L</h1>
                </div>
                <div>
                    <Link href={"/oll"}>
                        <div className="bg-[url(../assets/cube-image-oll.webp)] w-[200px] h-[180px] rounded-2xl
                        bg-cover bg-center cursor-pointer hover:rotate-12 transition-all duration-200"/> 
                    </Link>                    
                    <h1 className="text-[28px] font-extrabold text-neutral-500 text-center pt-4">OLL</h1>
                </div>
                <div>
                    <Link href={"/pll"}>
                        <div className="bg-[url(../assets/cube-image-pll.webp)] w-[200px] h-[180px] rounded-2xl
                        bg-cover bg-center cursor-pointer hover:rotate-12 transition-all duration-200"/>
                    </Link>
                    <h1 className="text-[28px] font-extrabold text-neutral-500 text-center pt-4">PLL</h1>
                </div>
            </main>
            
        </>
        
    )
}