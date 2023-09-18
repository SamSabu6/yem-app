//meels (div)
import React, { useState } from "react";
import { topPicks } from "../data";
import { ArrowSmRightIcon } from "@heroicons/react/outline";

const Meal = () => {
  const [foods, setFoods] = useState(topPicks);
  const filterCat = (category) => {
    setFoods(
      topPicks.filter((item) => {
        return item.category === category;
      })
    );
  };
  return (
    <div className="max-w-[1520px] m-auto px-4 py-12 ">
      <h1 className="text-orange-500 font-bold text-2xl text-center py-2 ">
        Our Meal
      </h1>
      <div className="flex flex-col lg:flex-row justify-center ">
        <div className="flex justify-center md:justify-center">
          <button
            onClick={() => setFoods(topPicks)}
            className="m-1 border-orange-700 text-white bg-orange-700 hover:bg-white hover:text-orange-700 hover:border-orange-700 "
          >
            All
          </button>
          <button
            onClick={() => filterCat("non-veg")}
            className="m-1 border-orange-700 text-white bg-orange-700 hover:bg-white hover:text-orange-700 hover:border-orange-700 "
          >
            Non-Veg
          </button>
          <button
            onClick={() => filterCat("veg")}
            className="m-1 border-orange-700 text-white bg-orange-700 hover:bg-white hover:text-orange-700 hover:border-orange-700 "
          >
            Veg
          </button>
          <button
            onClick={() => filterCat("juice")}
            className="m-1 border-orange-700 text-white bg-orange-700 hover:bg-white hover:text-orange-700 hover:border-orange-700 "
          >
            Juice
          </button>
          <button
            onClick={() => filterCat("dessert")}
            className="m-1 border-orange-700 text-white bg-orange-700 hover:bg-white hover:text-orange-700 hover:border-orange-700 "
          >
            Dessert
          </button>
        </div>
      </div>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-6 py-4">
        {foods.map((item) => (
          <div
            key={item.id}
            className="border-none hover:scale-105 duration-300 "
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-[200px] object-cover rounded-lg "
            />
            <div className="flex justify-between py-2 px-2 ">
              <p className="font-bold first-letter:capitalize">{item.title}</p>
              <p className="bg-orange-700 h-18 w-18 rounded-full -mt-10  text-white py-4 px-2 border-8 ">
                {item.price}{" "}
              </p>
            </div>
            <div className="pl-2 py-4 -mt-7">
              <p className="flex items-center text-indigo-600 ">
                View More
                <ArrowSmRightIcon className="w-5 ml-2 "></ArrowSmRightIcon>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Meal;
