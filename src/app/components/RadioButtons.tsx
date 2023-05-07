const timers = ["pomodoro", "short break", "long break"]

export default function RadioButton(props: any) {

    return (
        <div className="radio-buttons flex flex-row items-center justify-between">
        <ul className="flex flex-row items-center justify-between">
          {timers.map((timer:string) => (
            <button key={timer}><li className="font-medium mx-7 rounded-full p-4 bg-white text-blue-600 text-2xl bg-inherit hover:bg-white border-2 border-white">{timer}</li></button>
          ))}
        </ul>
        </div>
    );
}

