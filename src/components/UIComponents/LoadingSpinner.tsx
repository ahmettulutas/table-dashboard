import React from "react";

const LoadingSpinner:React.FC = () => (
  <div>

    <div className="grid place-items-center w-full h-full backdrop-blur-sm">
      <div
        className="inline-block h-8 w-8 animate-spin rounded-full border-4
      border-solid border-current border-r-transparent align-[-0.125em]
      text-primaryBlue motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status">
      </div>
    </div>
  </div>

);

export default LoadingSpinner;