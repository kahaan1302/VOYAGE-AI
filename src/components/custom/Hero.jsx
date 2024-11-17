import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="flex flex-col items-center mx-56 gap-9">
      <h1 className="font-extrabold text-[50px] text-center mt-16">
        <span className="text-[#f56551]">
          Discover Your Next Adventure With AI:
        </span>
        <span className="block">
          Personalized Itineraries At Your Fingertips
        </span>
      </h1>
      <p className="text-xl text-gray-500 text-center">
        Your personal trip planner and travel curator, creating custom
        itineraries tailored to your budget and interest!{" "}
      </p>
      <Link to={"/create-trip"}>
        <Button>Get Started It's Free</Button>
      </Link>
      <img src="/landing.png"></img>
    </div>
  );
}

export default Hero;
