import React from "react";
const LoadingIndicator = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-white bg-opacity-90">
      <div className="absolute h-36 w-36 animate-circular-color rounded-[50%] bg-transparent before:absolute before:top-0 before:left-0 before:h-full before:w-full before:rounded-[50%] before:shadow-loading-ring" />
      <span className="animate-text-blur-out font-semibold uppercase tracking-wide text-black">loading...</span>
    </div>
  );
};

export default LoadingIndicator;
