import { Footer } from "@/components/footer";
import { CardsHome } from "@/components/homeCards";

export default function Home() {
  return (
    <>
      <main>
        <div>
          <h1>qual etapa você quer aprender?</h1>

          <div>
            <CardsHome/>
          </div>
        </div>

        <Footer/>
      </main>
    </>
  )
}
 