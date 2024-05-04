"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Wrapper from "./Wrapper";
import { hotGamesData, offerData } from "@/lib/constants";
import { Fade } from "react-awesome-reveal";
import Image from "next/image";

//30 day money back guarantee
//24/7 customer support
//Secure payment
//Fast delivery

const WhatWeOffer = () => {
  return (
    <>
      <Fade triggerOnce={true} cascade={true} direction="up" duration={2000}>
        <Wrapper>
          <h1 className="text-center text-white text-4xl mt-10 lg:mt-32">
            What we offer
          </h1>
          <div className="flex w-full flex-wrap gap-2 justify-center my-10">
            {offerData.map((item) => (
              <Card className="max-w-[250px]" key={item.title}>
                <CardContent className="flex flex-col items-center text-center">
                  <i>{item.icon}</i>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </Wrapper>
      </Fade>
      <div className="bg-third pb-6 ">
        <Fade triggerOnce={true} direction="left" duration={2000} damping={10}>
          <Wrapper className="max-w-[1000px]">
            <h1 className="text-center text-white text-4xl mt-10 lg:mt-32 pt-3">
              Hot Games
            </h1>
            <div className=" flex w-full flex-wrap gap-y-5 gap-x-2 justify-center my-10 text-white">
              {hotGamesData.map((item) => (
                <div key={item.title} className=" max-w-[200px] max-h-[100px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={1000}
                    height={1000}
                    className="object-cover rounded-xl  custom-shadow-games"
                  />
                  <p className="text-center mt-[-2rem] line-clamp-1 text-white">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </Wrapper>
        </Fade>
      </div>
    </>
  );
};

export default WhatWeOffer;
