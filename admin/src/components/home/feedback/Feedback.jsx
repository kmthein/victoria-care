import React from "react";
import MenuPill from "../../MenuPill";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import feed1 from "../../../assets/images/feed1.jpg";
import feed2 from "../../../assets/images/feed2.jpg";
import feed3 from "../../../assets/images/feed3.jpg";
import "@splidejs/react-splide/css";

const Feedback = () => {
  return (
    <div className="py-8 ">
      <div className="text-center">
        <MenuPill title={"Feedback"} style="text-gray-500 border-gray-500" />
        <h2 className=" my-6 text-[#0C3C5F] font-semibold text-3xl inter">
          Our Patient Feedbacks
        </h2>
      </div>
      <div className=" flex justify-center ">
      <Splide
        options={{
          rewind: true,
          width: 800,
          gap: "1rem",
          autoplay: 'true',
          speed: 2000
        }}
      >
        <SplideSlide>
          <div className=" py-20">
            <div className="relative bg-[#D9D9D9] w-[370px] rounded-lg mx-auto py-8 px-5">
              <img
                src={feed1}
                className="top-[-45px] left-[140px] w-[90px] h-[90px] absolute object-cover object-center rounded-full"
                alt="feed"
              />
              <p className=" mt-6 text-[14px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias corrupti quidem ut placeat eaque cumque pariatur esse,
                similique repellat saepe eligendi itaque nihil voluptas rem cum
                minima aperiam provident tempora.
              </p>
              <span className="mt-2 block text-right font-bold">Sarah</span>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="py-20">
            <div className="relative bg-[#D9D9D9] w-[370px] rounded-lg mx-auto py-8 px-5">
              <img
                src={feed2}
                className="top-[-45px] left-[140px] w-[90px] h-[90px] absolute object-cover object-center rounded-full"
                alt="feed"
              />
              <p className=" mt-6 text-[14px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias corrupti quidem ut placeat eaque cumque pariatur esse,
                similique repellat saepe eligendi itaque nihil voluptas rem cum
                minima aperiam provident tempora.
              </p>
              <span className="mt-2 block text-right font-bold">Johnson</span>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="py-20">
            <div className="relative bg-[#D9D9D9] w-[370px] rounded-lg mx-auto py-8 px-5">
              <img
                src={feed3}
                className="top-[-45px] left-[140px] w-[90px] h-[90px] absolute object-cover object-center rounded-full"
                alt="feed"
              />
              <p className=" mt-6 text-[14px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias corrupti quidem ut placeat eaque cumque pariatur esse,
                similique repellat saepe eligendi itaque nihil voluptas rem cum
                minima aperiam provident tempora.
              </p>
              <span className="mt-2 block text-right font-bold">George</span>
            </div>
          </div>
        </SplideSlide>
      </Splide>
      </div>
    </div>
  );
};

export default Feedback;
