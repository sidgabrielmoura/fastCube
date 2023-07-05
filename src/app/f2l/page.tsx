import { Cards } from "@/components/cardsf2l";
import { Navbar } from "@/components/navbar";

export default function F2lPage(){
    return(
        <>
            <Navbar/>
            <main className="flex flex-col ">  
                <section className="w-[100%] h-[15vh] flex items-center justify-center">
                    <h1 className="text-[28px] text-neutral-800 font-extrabold">F2L PAGE</h1>
                </section>

                <section className="w-[100%] h-screen grid grid-cols-5 gap-3 pl-9 ">
                    <Cards/>
                </section>
            </main>
        </>      
    )
}