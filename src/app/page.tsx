'use client';
import Birds from "./components/Birds";
import Timer from "./components/Timer"

export default function Home() {
  return (
    <div className="bg-[url('../../public/mountain.png')] bg-cover bg-center bg-no-repeat">
      <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
        <Birds />
        <Timer />
      </main>
    </div>
  )
}
