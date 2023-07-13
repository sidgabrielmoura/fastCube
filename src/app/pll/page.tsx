import { Navbar } from "@/components/navbar";

export default function PllPage() {
    return (
        <>
            <Navbar />
            <main className="flex flex-col ">
                <section className="w-[100%] h-[15vh] flex items-center justify-center mt-12">
                    <h1 className="text-[28px] text-neutral-800 font-extrabold">PLL PAGE</h1>
                </section>

                <section className="w-[100%] h-screen flex justify-center px-4 ">

                    <div className="grid
                    2xl:grid-cols-5 2xl:gap-10
                    xl:grid-cols-4 xl:gap-8
                    md:grid-cols-3 md:gap-6
                    sm:grid-cols-2 sm:gap-4">

                        <div className="xl:w-[217px]
                                        md:w-[190px]
                                        sm:w-[140px]">
                            <div className="bg-[url(../assets/pll-caso-a-a-01.webp)] bg-cover bg-center
                            xl:w-[217px] xl:h-[217px]
                            md:w-[190px] md:h-[190px]
                            sm:w-[140px] sm:h-[140px]" />
                            <h1 className="text-[24px] font-bold">caso 01</h1>
                            <p className="text-[20px] font-extrabold text-neutral-400
                            xl:text-[20px]
                            md:text-[18px]
                            sm:text-[14px]">R' U R' U' R' U' R' U R U R2</p>
                        </div>

                        <div className="xl:w-[217px]
                                        md:w-[190px]
                                        sm:w-[140px]">
                            <div className="bg-[url(../assets/pll-caso-a-h-01.webp)] bg-cover bg-center
                            xl:w-[217px] xl:h-[217px]
                            md:w-[190px] md:h-[190px]
                            sm:w-[140px] sm:h-[140px]" />
                            <h1 className="text-[24px] font-bold">caso 02</h1>
                            <p className="text-[20px] font-extrabold text-neutral-400
                            xl:text-[20px]
                            md:text-[18px]
                            sm:text-[14px]">R2 U' R' U' R U R U R U' R</p>
                        </div>

                        <div className="xl:w-[217px]
                                        md:w-[190px]
                                        sm:w-[140px]">
                            <div className="bg-[url(../assets/pll-caso-e-01.webp)] bg-cover bg-center w
                            xl:w-[217px] xl:h-[217px]
                            md:w-[190px] md:h-[190px]
                            sm:w-[140px] sm:h-[140px]"/>
                            <h1 className="text-[24px] font-bold">caso 03</h1>
                            <p className="text-[20px] font-extrabold text-neutral-400
                            xl:text-[20px]
                            md:text-[18px]
                            sm:text-[14px]">x R' U R' D2R U' R' D2 R2 x'</p>
                        </div>

                        <div className="xl:w-[217px]
                                        md:w-[190px]
                                        sm:w-[140px]">
                            <div className="bg-[url(../assets/pll-caso-f-01.webp)] bg-cover bg-center w
                            xl:w-[217px] xl:h-[217px]
                            md:w-[190px] md:h-[190px]
                            sm:w-[140px] sm:h-[140px]"/>
                            <h1 className="text-[24px] font-bold">caso 04</h1>
                            <p className="text-[20px] font-extrabold text-neutral-400
                            xl:text-[20px]
                            md:text-[18px]
                            sm:text-[14px]">x R2' D2 R U R' D2 R U' R x'</p>
                        </div>

                        <div className="xl:w-[217px]
                                        md:w-[190px]
                                        sm:w-[140px]">
                            <div className="bg-[url(../assets/pll-caso-g1-01.webp)] bg-cover bg-center 
                            xl:w-[217px] xl:h-[217px]
                            md:w-[190px] md:h-[190px]
                            sm:w-[140px] sm:h-[140px]"/>
                            <h1 className="text-[24px] font-bold">caso 05</h1>
                            <p className="text-[20px] font-extrabold text-neutral-400
                            xl:text-[20px]
                            md:text-[18px]
                            sm:text-[14px]">M2 U M2 U2 M2 U M2</p>
                        </div>

                        <div className="xl:w-[217px]
                                        md:w-[190px]
                                        sm:w-[140px]">
                            <div className="bg-[url(../assets/pll-caso-g2-01.webp)] bg-cover bg-center 
                            xl:w-[217px] xl:h-[217px]
                            md:w-[190px] md:h-[190px]
                            sm:w-[140px] sm:h-[140px]"/>
                            <h1 className="text-[24px] font-bold">caso 06</h1>
                            <p className="text-[20px] font-extrabold text-neutral-400
                            xl:text-[20px]
                            md:text-[18px]
                            sm:text-[14px]">M2 U M2 U M' U2 M2 U2 M'</p>
                        </div>

                        <div className="xl:w-[217px]
                                        md:w-[190px]
                                        sm:w-[140px]">
                            <div className="bg-[url(../assets/pll-caso-g3-01.webp)] bg-cover bg-center 
                            xl:w-[217px] xl:h-[217px]
                            md:w-[190px] md:h-[190px]
                            sm:w-[140px] sm:h-[140px]"/>
                            <h1 className="text-[24px] font-bold">caso 07</h1>
                            <p className="text-[20px] font-extrabold text-neutral-400
                            xl:text-[20px]
                            md:text-[18px]
                            sm:text-[14px]">R2 D' R U2 R' D R U2 R</p>
                        </div>

                        <div className="xl:w-[217px]
                                        md:w-[190px]
                                        sm:w-[140px]">
                            <div className="bg-[url(../assets/pll-caso-g4-01.webp)] bg-cover bg-center 
                            xl:w-[217px] xl:h-[217px]
                            md:w-[190px] md:h-[190px]
                            sm:w-[140px] sm:h-[140px]"/>
                            <h1 className="text-[24px] font-bold">caso 08</h1>
                            <p className="text-[20px] font-extrabold text-neutral-400
                            xl:text-[20px]
                            md:text-[18px]
                            sm:text-[14px]">R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R</p>
                        </div>

                        <div className="xl:w-[217px]
                                        md:w-[190px]
                                        sm:w-[140px]">
                            <div className="bg-[url(../assets/pll-caso-h-01.webp)] bg-cover bg-center w
                            xl:w-[217px] xl:h-[217px]
                            md:w-[190px] md:h-[190px]
                            sm:w-[140px] sm:h-[140px]"/>
                            <h1 className="text-[24px] font-bold">caso 09</h1>
                            <p className="text-[20px] font-extrabold text-neutral-400
                            xl:text-[20px]
                            md:text-[18px]
                            sm:text-[14px]">F R U' R' U' R U R' F'R U R' U' R' F R F'</p>
                        </div>

                        <div className="xl:w-[217px]
                                        md:w-[190px]
                                        sm:w-[140px]">
                            <div className="bg-[url(../assets/pll-caso-j1-01.webp)] bg-cover bg-center 
                            xl:w-[217px] xl:h-[217px]
                            md:w-[190px] md:h-[190px]
                            sm:w-[140px] sm:h-[140px]"/>
                            <h1 className="text-[24px] font-bold">caso 10</h1>
                            <p className="text-[20px] font-extrabold text-neutral-400
                            xl:text-[20px]
                            md:text-[18px]
                            sm:text-[14px]">x' R U' R' D R U R' D' R U R' D R U' R' D' x</p>
                        </div>

                        <div className="xl:w-[217px]
                                        md:w-[190px]
                                        sm:w-[140px]">
                            <div className="bg-[url(../assets/pll-caso-j2-01.webp)] bg-cover bg-center 
                            xl:w-[217px] xl:h-[217px]
                            md:w-[190px] md:h-[190px]
                            sm:w-[140px] sm:h-[140px]"/>
                            <h1 className="text-[24px] font-bold">caso 11</h1>
                            <p className="text-[20px] font-extrabold text-neutral-400
                            xl:text-[20px]
                            md:text-[18px]
                            sm:text-[14px]">R' U R' Dw' R' F' R2 U' R' U R' F R F</p>
                        </div>

                        <div className="xl:w-[217px]
                                        md:w-[190px]
                                        sm:w-[140px]">
                            <div className="bg-[url(../assets/pll-caso-n1-01.webp)] bg-cover bg-center 
                            xl:w-[217px] xl:h-[217px]
                            md:w-[190px] md:h-[190px]
                            sm:w-[140px] sm:h-[140px]"/>
                            <h1 className="text-[24px] font-bold">caso 12</h1>
                            <p className="text-[20px] font-extrabold text-neutral-400
                            xl:text-[20px]
                            md:text-[18px]
                            sm:text-[14px]">R U' R' U' R U R D R' U' R D' R' U2 R' U'</p>
                        </div>

                        <div className="xl:w-[217px]
                                        md:w-[190px]
                                        sm:w-[140px]">
                            <div className="bg-[url(../assets/pll-caso-n2-01.webp)] bg-cover bg-center 
                            xl:w-[217px] xl:h-[217px]
                            md:w-[190px] md:h-[190px]
                            sm:w-[140px] sm:h-[140px]"/>
                            <h1 className="text-[24px] font-bold">caso 13</h1>
                            <p className="text-[20px] font-extrabold text-neutral-400
                            xl:text-[20px]
                            md:text-[18px]
                            sm:text-[14px]">R' U2 R U2' R' F R U R' U' R' F' R2 U'</p>
                        </div>

                        <div className="xl:w-[217px]
                                        md:w-[190px]
                                        sm:w-[140px]">
                            <div className="bg-[url(../assets/pll-caso-r1-01.webp)] bg-cover bg-center 
                            xl:w-[217px] xl:h-[217px]
                            md:w-[190px] md:h-[190px]
                            sm:w-[140px] sm:h-[140px]"/>
                            <h1 className="text-[24px] font-bold">caso 14</h1>
                            <p className="text-[20px] font-extrabold text-neutral-400
                            xl:text-[20px]
                            md:text-[18px]
                            sm:text-[14px]">x R2 F R F' R U2 Rw' U Rw U2 x</p>
                        </div>

                        <div className="xl:w-[217px]
                                        md:w-[190px]
                                        sm:w-[140px]">
                            <div className="bg-[url(../assets/pll-caso-r2-01.webp)] bg-cover bg-center 
                            xl:w-[217px] xl:h-[217px]
                            md:w-[190px] md:h-[190px]
                            sm:w-[140px] sm:h-[140px]"/>
                            <h1 className="text-[24px] font-bold">caso 15</h1>
                            <p className="text-[20px] font-extrabold text-neutral-400
                            xl:text-[20px]
                            md:text-[18px]
                            sm:text-[14px]">R U R' F' R U R' U' R' F R2 U' R' U'</p>
                        </div>

                        <div className="xl:w-[217px]
                                        md:w-[190px]
                                        sm:w-[140px]">
                            <div className="bg-[url(../assets/pll-caso-t-01.webp)] bg-cover bg-center w
                            xl:w-[217px] xl:h-[217px]
                            md:w-[190px] md:h-[190px]
                            sm:w-[140px] sm:h-[140px]"/>
                            <h1 className="text-[24px] font-bold">caso 16</h1>
                            <p className="text-[20px] font-extrabold text-neutral-400
                            xl:text-[20px]
                            md:text-[18px]
                            sm:text-[14px]">R U R' U R U R' F' R U R' U' R' F R2 U' R' U2 R U' R'</p>
                        </div>

                        <div className="xl:w-[217px]
                                        md:w-[190px]
                                        sm:w-[140px]">
                            <div className="bg-[url(../assets/pll-caso-u-a-01.webp)] bg-cover bg-center
                            xl:w-[217px] xl:h-[217px]
                            md:w-[190px] md:h-[190px]
                            sm:w-[140px] sm:h-[140px]" />
                            <h1 className="text-[24px] font-bold">caso 17</h1>
                            <p className="text-[20px] font-extrabold text-neutral-400
                            xl:text-[20px]
                            md:text-[18px]
                            sm:text-[14px]">R' U R U' R' F' U' F R U R' F R' F' R U' R</p>
                        </div>

                        <div className="xl:w-[217px]
                                        md:w-[190px]
                                        sm:w-[140px]">
                            <div className="bg-[url(../assets/pll-caso-u-h-01.webp)] bg-cover bg-center
                            xl:w-[217px] xl:h-[217px]
                            md:w-[190px] md:h-[190px]
                            sm:w-[140px] sm:h-[140px]" />
                            <h1 className="text-[24px] font-bold">caso 18</h1>
                            <p className="text-[20px] font-extrabold text-neutral-400
                            xl:text-[20px]
                            md:text-[18px]
                            sm:text-[14px]">R2' Uw R' U R' U' R Uw' R2 y' R' U R</p>
                        </div>

                        <div className="xl:w-[217px]
                                        md:w-[190px]
                                        sm:w-[140px]">
                            <div className="bg-[url(../assets/pll-caso-v-01.webp)] bg-cover bg-center w
                            xl:w-[217px] xl:h-[217px]
                            md:w-[190px] md:h-[190px]
                            sm:w-[140px] sm:h-[140px]"/>
                            <h1 className="text-[24px] font-bold">caso 19</h1>
                            <p className="text-[20px] font-extrabold text-neutral-400
                            xl:text-[20px]
                            md:text-[18px]
                            sm:text-[14px]">R' U' R U D' R2 U R' U R U' R U' R2 D U'</p>
                        </div>

                        <div className="xl:w-[217px]
                                        md:w-[190px]
                                        sm:w-[140px]">
                            <div className="bg-[url(../assets/pll-caso-y-01.webp)] bg-cover bg-center w
                            xl:w-[217px] xl:h-[217px]
                            md:w-[190px] md:h-[190px]
                            sm:w-[140px] sm:h-[140px]"/>
                            <h1 className="text-[24px] font-bold">caso 20</h1>
                            <p className="text-[20px] font-extrabold text-neutral-400
                            xl:text-[20px]
                            md:text-[18px]
                            sm:text-[14px]">R2 U' R U' R U R' U R2 D' U R U' R' D U'</p>
                        </div>

                        <div className="xl:w-[217px]
                                        md:w-[190px]
                                        sm:w-[140px]">
                            <div className="bg-[url(../assets/pll-caso-z-01.webp)] bg-cover bg-center w
                            xl:w-[217px] xl:h-[217px]
                            md:w-[190px] md:h-[190px]
                            sm:w-[140px] sm:h-[140px]"/>
                            <h1 className="text-[24px] font-bold">caso 21</h1>
                            <p className="text-[20px] font-extrabold text-neutral-400 pb-10
                            xl:text-[20px]
                            md:text-[18px]
                            sm:text-[14px]">R U R' y' R2 Uw' R U' R' U R' Uw R2</p>
                        </div>
                    </div>
                    
                </section>
            </main>
        </>
    )
}