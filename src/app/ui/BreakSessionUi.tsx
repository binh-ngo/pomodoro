import React from 'react';

export const BreakSessionContainer: React.FC<React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>> = ({ children, ...props }) => {
  return (
    <div className="flex flex-col items-center mx-10 phones:-mx-5 phones:mt-5 sm-phones:-mx-12 sm-phones:mt-12" {...props}>
      {children}
    </div>
  );
};

export const BreakSessionLabel: React.FC<React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
>> = ({ children, ...props }) => {
  return (
    <p className="text-lg text-blue-600 sm-phones:text-sm" {...props}>
      {children}
    </p>
  );
};

export const BreakSessionTime: React.FC<React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
>> = ({ children, ...props }) => {
  return (
    <p className="text-4xl font-bold text-blue-600" {...props}>
      {children}
    </p>
  );
};

export const PlusMinusButton: React.FC<React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>> = ({ children, ...props }) => {
  return (
    <button {...props} className="mt-2 text-2xl active:bg-inherit hover:bg-white text-blue-600 bg-inherit border-2 border-white px-4 py-2 rounded sm-phones:px-2 sm-phones:py-0">
      {children}
    </button>
  );
};

export const PlusMinusButtonContainer: React.FC<React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>> = ({ children, ...props }) => {
  return (
    <div {...props} className="grid grid-flow-col phones:mx-0 mx-10 gap-2 rounded">
      {children}
    </div>
  );
};