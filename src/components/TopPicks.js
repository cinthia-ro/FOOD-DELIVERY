import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { topPicks } from "../data/data";

const TopPicks = () => {
  return (
    <div>
      <h1 className="text-orange-500 font-bold text-center text-2xl">
        Top Tpicks
      </h1>
      <div className="hidden lg:flex max-w[1520px] m-auto py-5  px-2">
        <Splide
          options={{ perPage: 4, gap: "0.7rem", grag: "free", arrows: false }}
        >
          {topPicks.map((item) => {
            return (
              <SplideSlide key={item.id}>
                <div className=" rounded-3xl relative">
                  <div className="absolute w-full h-full bg-black/50 rounded-3xl  text-white ">
                    <p className="px-2 font-bold text-2xl pt-2">{item.title}</p>
                    <p className="px-2 ">{item.price}</p>
                    <button className="border-dotted border-white text-white mx-2 absolute bottom-4">
                      Add to cart
                    </button>
                  </div>
                  <img
                    src={item.img}
                    className="h-[200px] w-full object-cover rounded-3xl cursor-pointer hover:scale-105"
                    alt={item.title}
                  />
                </div>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </div>
  );
};

export default TopPicks;
