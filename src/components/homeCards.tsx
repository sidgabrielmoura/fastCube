import Link from "next/link";

export function CardsHome(){

    return (
        <>
            <main className="flex 
            xl:gap-[134px]
            md:gap-[60px]
            sm:gap-[20px]">
                <div>
                    <Link href={"/f2l"}>
                        <div className="bg-[url(../assets/f2l-caso-34.webp)] rounded-2xl
                        bg-cover bg-center cursor-pointer hover:rotate-12 transition-all duration-200
                        xl:w-[200px] xl:h-[180px]
                        md:w-[180px] md:h-[160px]
                        sm:w-[120px] sm:h-[100px]" />                   
                    </Link>
                    <h1 className="font-extrabold text-neutral-500 text-center pt-4
                    xl:text-[28px]
                    md:text-[24px]
                    sm:text-[20px]">F2L</h1>
                </div>
                <div>
                    <Link href={"/oll"}>
                        <div className="bg-[url(../assets/cube-image-oll.webp)] rounded-2xl
                        bg-cover bg-center cursor-pointer hover:rotate-12 transition-all duration-200
                        xl:w-[200px] xl:h-[180px]
                        md:w-[180px] md:h-[160px]
                        sm:w-[120px] sm:h-[100px]"/> 
                    </Link>                    
                    <h1 className="font-extrabold text-neutral-500 text-center pt-4
                    xl:text-[28px]
                    md:text-[24px]
                    sm:text-[20px]">OLL</h1>
                </div>
                <div>
                    <Link href={"/pll"}>
                        <div className="bg-[url(../assets/cube-image-pll.webp)] rounded-2xl
                        bg-cover bg-center cursor-pointer hover:rotate-12 transition-all duration-200
                        xl:w-[200px] xl:h-[180px]
                        md:w-[180px] md:h-[160px]
                        sm:w-[120px] sm:h-[100px]"/>                       
                    </Link>
                    <h1 className="font-extrabold text-neutral-500 text-center pt-4
                    xl:text-[28px]
                    md:text-[24px]
                    sm:text-[20px]">PLL</h1>
                </div>
            </main>
            
        </>
        
    )
}