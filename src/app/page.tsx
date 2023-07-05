import { CardsHome } from "@/components/homeCards";

export default function Home() {
  return (
    <>
      <main className="w-[100%] h-screen bg-[#ffe7ff] flex items-center justify-center">
        <div>
          <h1 className="text-[30px] text-center font-bold mb-[87px]">qual etapa você quer aprender?</h1>

          <div>
            <CardsHome/>
          </div>
        </div>
      </main>
    </>
  )
}
 