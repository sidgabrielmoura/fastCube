import { CardsHome } from "@/components/homeCards";

export default function Home() {
  return (
    <>
      <main className="w-[100%] h-screen bg-[#ffe7ff] flex items-center justify-center">
        <div>
          <h1 className=" text-center font-bold
          xl:mb-[87px] xl:text-[30px]
          md:text-[25px] md:mb-[100px]
          sm:text-[20px] sm:mb-[130px]">qual etapa você quer aprender?</h1>
          <div>
            <CardsHome/>
          </div>
        </div>
      </main>
    </>
  )
}
 