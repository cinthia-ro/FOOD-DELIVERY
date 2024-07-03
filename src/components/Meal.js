import React from "react";
import { mealData } from "../data/data";
import

const Meal = () => {
  return (
    <div className="max-w-[1520px] m-auto px-4 py-12">
      <h1 className="text-orange-500 font-bold text-center text-2xl ">
        Our Meal
      </h1>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-6 py-7">
        {mealData.map((item) => (
          <div className="border-none hover:scale-105 duration-300">
            <img
              alt={item.name}
              className="w-full h-[200px] object-cover rounded-lg"
              src={item.image}
            />
            <div className="flex justify-between py-3 px-4">
              <p className="font-bold">{item.name}</p>
              <p className="bg-orange-700  -mt-10 w-13 h-13 rounded-full py-4 px-3  text-white  border-8">
                {item.price}
              </p>
            </div>
            <div></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Meal;
