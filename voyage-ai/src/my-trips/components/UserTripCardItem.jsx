import React from "react";
import { Link } from "react-router-dom";

function UserTripCardItem({ trip }) {
  return (
    <Link to={"/view-trip/" + trip?.id}>
      <div className=" rounded-xl hover:scale-105 hover:border-green-800 transition-all hover:text-green-800">
        <img src="/placeholder3.avif" className="rounded-xl" />
        <div className="">
          <h2 className="font-bold text-lg text-black ml-2 hover:text-green-800">
            {trip?.userSelection?.location?.label}
          </h2>
          <h2 className="text-sm text-gray-700 ml-2 mb-2  hover:text-green-800">
            {trip?.userSelection?.noOfDays} days trip with{" "}
            {trip?.userSelection?.budget} budget for{" "}
            {trip?.userSelection?.traveller}{" "}
          </h2>
        </div>
      </div>
    </Link>
  );
}

export default UserTripCardItem;
