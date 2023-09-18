import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { topPicks } from "../data";

const TopPicks = () => {
  return (
    <div>
      <h1 className="text-orange-500  text-center hidden justify-center font-bold text-2xl py-2 lg:flex">
        Top Picks
      </h1>

      <div className="hidden lg:flex max-w-[1520px] m-auto py-2 px-2">
        <Splide options={{ perPage: 4, gap: "0.5rem" }}>
          {topPicks.map((item) => (
            <SplideSlide key={item.id}>
              <div className="rounded-3xl relative">
                <div className="absolute w-full h-full bg-black bg-opacity-50 rounded-3xl text-white">
                  <p className="px-2 pt-4 font-bold text-2xl ">{item.title}</p>
                  <p className="px-2 ">{item.price}</p>
                  <button className="border-dotted border-white text-white mx-2 absolute bottom-4 ">
                    Add to Cart
                  </button>
                </div>
                <img
                  className="h-[200px] w-full object-cover rounded-3xl cursor-pointer hover:scale-105 ease-out duration-300"
                  src={item.img}
                  alt={item.title}
                />
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default TopPicks;
