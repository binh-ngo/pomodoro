'use client';
import Birds from "./components/Birds";
import Timer from "./components/Timer"

export default function Home() {
  return (
    <div className="bg-[url('../../public/mountain.webp')] bg-cover bg-center bg-no-repeat">
      <main className="flex flex-col items-center justify-between p-20">
        <div className="sm-phones:mb-20">
        <Birds/>
        </div>
        <Timer />
      </main>
    </div>
  )
}
