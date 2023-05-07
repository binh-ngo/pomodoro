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
      <p className="text-blue-600 text-3xl" id="timer-label">
        {timerLabel}
      </p>
      <p className="font-clock text-9xl text-blue-600 font-bold" id="time-left">
        {formattedTimeLeft}
      </p>
      <div className='flex-row justify-center'>
      <button
        className="my-3 mx-2 text-blue-600 font-semibold bg-inherit border-2 hover:bg-white border-white px-4 py-2 rounded-full"
        id="start_stop"
        onClick={handleStartStopClick}
        >
        {startStopButtonLabel}
      </button>
      <button
        className="border-2 text-blue-600 font-semibold rounded-full hover:bg-white border-white border-solid px-3 py-2"
        id="reset"
        onClick={handleResetButtonClick}
      >
        Reset
      </button>
        </div>
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