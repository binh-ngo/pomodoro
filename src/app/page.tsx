'use client';
import Timer from "./components/Timer"

export default function Home() {
  const timers = ["pomodoro", "short break", "long break"]
  return (
    <div className="bg-[url('../../public/mountain.png')] bg-cover bg-center bg-no-repeat">
      <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
        {/* <RadioButton /> */}
        <Timer />
      </main>
    </div>
  )
}
