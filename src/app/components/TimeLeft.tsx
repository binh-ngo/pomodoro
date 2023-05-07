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
      <p className="text-blue-600 text-2xl" id="timer-label">
        {timerLabel}
      </p>
      <p className="font-clock text-4xl text-blue-600 font-bold" id="time-left">
        {formattedTimeLeft}
      </p>
      <button
        className="text-blue-600 font-semibold bg-inherit border-2 border-white px-4 py-2 rounded-lg"
        id="start_stop"
        onClick={handleStartStopClick}
      >
        {startStopButtonLabel}
      </button>
      <button
        className="border-2 text-blue-600 font-semibold rounded-lg border-white border-solid px-3 py-2"
        id="reset"
        onClick={handleResetButtonClick}
      >
        Reset
      </button>
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