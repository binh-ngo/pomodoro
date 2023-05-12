import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';
import React from 'react';

// @ts-ignore
momentDurationFormatSetup(moment);

const TimeLeft: React.FC<Props> = ({
  handleResetButtonClick,
  handleStartStopClick,
  startStopButtonLabel,
  timeLeft,
  timerLabel,
}) => {
  const formattedTimeLeft = moment.duration(timeLeft, 's').format('mm:ss', { trim: false });
  return (
    <div className="flex flex-col justify-evenly items-center w-64 h-64 bg-inherit rounded-full">
      <div className='flex-row justify-center'>
      <button
        className="my-3 mx-2 text-3xl sm-phones:text-sm phones:text-lg text-blue-600 font-bold active:bg-inherit bg-inherit border-2 hover:bg-white border-white px-4 py-2 rounded-full"
        id="start_stop"
        onClick={handleStartStopClick}
        >
        {startStopButtonLabel}
      </button>
      <button
        className="border-2 text-3xl sm-phones:text-sm phones:text-lg text-blue-600 font-bold rounded-full active:bg-inherit hover:bg-white border-white border-solid px-3 py-2"
        id="reset"
        onClick={handleResetButtonClick}
      >
        Reset
      </button>
        </div>
      <p className="text-blue-600 text-3xl" id="timer-label">
        {timerLabel}
      </p>
      <p className="font-clock text-9xl phones:text-7xl text-blue-600 font-bold" id="time-left">
        {formattedTimeLeft}
      </p>
    </div>
  );
};

type Props = {
  handleResetButtonClick: () => void;
  handleStartStopClick: () => void;
  startStopButtonLabel: string;
  timeLeft: number;
  timerLabel: string;
};

export default TimeLeft;