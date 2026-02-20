import React from "react";

interface ScribbleArrowProps {
  text: string;
  className?: string; // for positioning: e.g. "absolute top-96 right-15"
  rotation?: number; // degrees, e.g. 270
  textPosition?: "above" | "below"; // whether label is above or below the arrow
  color: string;
}

const ScribbleArrow: React.FC<ScribbleArrowProps> = ({
  text,
  className = "",
  rotation = 270,
  textPosition = "above",
  color,
}) => {
  const arrow = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="42"
      height="42"
      viewBox="0 0 26 26"
      fill="none"
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <path
        d="M0.678041 -2.21372e-06L0.503765 1.04942L-2.38451e-06 1.36727C1.63383 1.22478 2.39629 3.78396 3.94843 4.3758C4.4168 4.5539 4.49577 4.00316 4.34872 3.83602C4.31332 3.79492 3.74148 3.636 3.39021 3.29898C3.09067 3.00853 1.642 1.70155 1.90342 1.37001C6.1296 1.79471 10.0045 2.80851 13.6834 4.98135C21.1799 9.40373 25.289 17.4046 25.9807 26C26.5144 13.3055 15.9108 2.29887 3.53725 1.09052C3.82317 0.37264 6.14049 1.13984 5.98528 -1.74974e-06L0.680763 -2.21348e-06L0.678041 -2.21372e-06Z"
        fill="currentColor"
      />
    </svg>
  );

  const label = <div className="text-lg font-homemade">{text}</div>;

  return (
    <div className={`flex flex-col gap-1 ${className} text-${color}`}>
      {textPosition === "above" ? (
        <>
          {label}
          {arrow}
        </>
      ) : (
        <>
          {arrow}
          {label}
        </>
      )}
    </div>
  );
};

export default ScribbleArrow;
