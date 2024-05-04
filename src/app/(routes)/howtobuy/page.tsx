import { howToButData } from "@/lib/constants";
import React from "react";

const HowToBuyPage = () => {
  return (
    <div className="py-24 px-2 sm:px-8 max-w-5xl mx-auto flex flex-col gap-4">
      {howToButData.map((item) => (
        <div key={item.title}>
          <h1 className="text-third text-2xl">{item.title}</h1>
          <p className="text-white">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default HowToBuyPage;
