import { Cards } from "@/components/cardsf2l";
import { Navbar } from "@/components/navbar";

export default function F2lPage(){
    return(
        <>
            <Navbar/>
            <main className="flex flex-col ">  
                <section className="w-[100%] h-[15vh] flex items-center justify-center mt-12">
                    <h1 className="text-[28px] text-neutral-800 font-extrabold">F2L PAGE</h1>
                </section>

                <section className="w-[100%] h-screen flex justify-center px-4">
                    <div className="grid
                    2xl:grid-cols-5 2xl:gap-10
                    xl:grid-cols-4 xl:gap-8
                    md:grid-cols-3 md:gap-6
                    sm:grid-cols-2 sm:gap-4">
                        <Cards/>
                    </div>   
                </section>
            </main>
        </>      
    )
}