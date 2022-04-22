import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import Benefit from "../Benefit/Benefit";

const PricingOption = (props) => {
  const { name, price, benefits } = props.option;
  return (
    <div className="bg-white p-4 rounded-lg">
      <h2 className="bg-indigo-300 py-2 rounded-lg text-xl font-bold">
        {name}
      </h2>
      <p>
        <span className="text-5xl font-bold"> $ {price}</span>
        <span className="text-xl font-bold text-gray-500">/month</span>
      </p>
      <div>
        <h3 className="text-xl font-bold text-left">Benefits:</h3>
        {benefits.map((benefit) => (
          <Benefit benefit={benefit}></Benefit>
        ))}
      </div>
      <button className="bg-green-500 text-white flex justify-center w-full py-2 rounded mt-6  hover:text-green-800 font-bold">
        Buy now <ArrowRightIcon className="w-6 h-6 ml-3"></ArrowRightIcon>
      </button>
    </div>
  );
};

export default PricingOption;
