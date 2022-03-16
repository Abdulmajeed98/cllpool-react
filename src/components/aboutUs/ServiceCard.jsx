import React from "react";

const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className="group h-72 w-11/12 overflow-hidden rounded-lg bg-sky-600 py-8 text-white">
      <div className="flex w-full flex-col items-center">
        <div className="flex translate-y-1/2 flex-col items-center justify-center transition-all  duration-300 group-hover:translate-y-0">
          <div className="h-16 w-24 scale-150 transition-all  duration-300 group-hover:scale-125">
            {icon}
          </div>
          <h2 className="mt-6 text-3xl capitalize transition-all duration-300 group-hover:mt-2">
            {title}
          </h2>
        </div>
        <p className="mt-8 w-2/3 translate-y-[200%] text-center text-xl transition-all  duration-300 group-hover:translate-y-0">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
