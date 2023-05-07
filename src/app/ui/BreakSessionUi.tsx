import React from 'react';

export const BreakSessionContainer: React.FC<React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>> = ({ children, ...props }) => {
  return (
    <div className="flex flex-col items-center mx-10" {...props}>
      {children}
    </div>
  );
};

export const BreakSessionLabel: React.FC<React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
>> = ({ children, ...props }) => {
  return (
    <p className="text-lg text-blue-600" {...props}>
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
    <button {...props} className="mt-2 text-2xl hover:bg-white text-blue-600 bg-inherit border-2 border-white px-4 py-2 rounded">
      {children}
    </button>
  );
};

export const PlusMinusButtonContainer: React.FC<React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>> = ({ children, ...props }) => {
  return (
    <div {...props} className="grid grid-flow-col mx-20 gap-2 rounded">
      {children}
    </div>
  );
};