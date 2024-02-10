import React from "react";
import { About, HomeHero, Partners, Principles, SdgCard } from "../../components";
import { data } from "./sdgData";

const Home: React.FC = () => {
  return (
    <div className="bg-blueColor">
      <HomeHero />
      <div
        className="flex flex-col gap-6 mt-5 lg:flex-row lg:gap-20 w-[70%] mx-auto xl:absolute lg:top-[90%] lg:left-[15%]"
      >
        <div className="bg-gradient text-white p-5 text-center rounded-md">
          <h2 className="font-playfair text-2xl mb-5">Our mission</h2>
          <p className="font-montserrat">
            To build and support successful sustainable community-based
            conservation outcomes in Tanzania.
          </p>
        </div>
        <div className="bg-gradient text-white p-5 text-center rounded-md">
          <h2 className="font-playfair text-2xl mb-5">Our vision</h2>
          <p className="font-montserrat">
            Communities and wildlife in Tanzania benefit from each other’s
            existence and thrive for generations to come.
          </p>
        </div>
      </div>

      {/* about */}
      <div className="mt-20 px-4 xl:mt-80 mb-20">
        <About />
      </div>

      {/* our SDG */}
      <div className="bg-blue text-white py-10">
        <div className="flex items-center gap-3 justify-center">
          <p className="w-20 border-b-2 border-orange"></p>
          <p className="text-center text-xl font-playfair">Our SDG’s</p>
        </div>
        
        <h2 className="text-center mt-2 font-bold text-4xl font-playfair">THIS ARE OUR SDGs</h2>

        <div className="flex gap-5 flex-wrap justify-center items-center mt-10">
          {data.map((data, index) => (
          <SdgCard title={data.title} desc={data.desc} index={index} />
        ))}
        </div>        
        
      </div>

      {/* Our principles */}
      <Principles/>

      {/* partners */}
      <Partners/>
    </div>
  );
};

export default Home;
