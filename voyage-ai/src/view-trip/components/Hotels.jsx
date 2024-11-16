import React from "react";
import { Link } from "react-router-dom";

function Hotels({ trip }) {
  const isLoading =
    !trip?.tripData?.hotels || trip.tripData.hotels.length === 0;

  return (
    <div>
      <h2 className="font-bold text-xl mt-5 mb-2">Hotel Recommendations</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
        {!isLoading
          ? trip.tripData.hotels.map((hotel, index) => (
              <Link
                to={
                  "https://www.google.com/maps/search/?api=1&query=" +
                  hotel?.hotelName
                }
                target="_blank"
                className="text-black no-underline"
                key={index}
              >
                <div className="ml-2 gap-2 hover:scale-110 transition-all rounded-xl hover:text-green-800 hover:border-green-800">
                  <img
                    src="/placeholder4.avif"
                    className="rounded-lg"
                    alt="Hotel"
                  />
                  <div className="my-2 ml-2">
                    <h2 className="font-medium">{hotel?.hotelName}</h2>
                    <h2 className="text-sm mt-1 mb-1 text-gray-700">
                      📍 {hotel?.hotelAddress}
                    </h2>
                    <h2 className="text-sm">💵 {hotel?.price}</h2>
                    <h2 className="text-sm">⭐ {hotel?.rating}</h2>
                  </div>
                </div>
              </Link>
            ))
          : [1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
              <div
                key={index}
                className="h-[200px] w-full bg-slate-200 animate-pulse rounded-xl"
              ></div>
            ))}
      </div>
    </div>
  );
}

export default Hotels;
