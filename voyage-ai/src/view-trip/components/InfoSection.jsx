import { Button } from "@/components/ui/button";
import React from "react";
import { IoIosSend } from "react-icons/io";

function InfoSection({ trip }) {
  const isLoading = !trip?.userSelection;

  // useEffect(() => {
  //   trip && GetPlacePhoto();
  // }, [trip]);

  // const GetPlacePhoto = async () => {
  //   const data = {
  //     textQuery: trip?.userSelection?.location?.label,
  //   };

  //   const result = await GetPlaceDetails(data).then((resp) => {
  //     // console.log(resp.data.places[0].photos[3].name);
  //   });
  // };

  return (
    <div>
      {isLoading ? (
        // Skeleton Loading State
        <div>
          <div className="h-[340px] w-full bg-slate-200 animate-pulse rounded-xl"></div>
          <div className="my-5 flex flex-col gap-3">
            <div className="h-8 w-1/2 bg-slate-200 animate-pulse rounded-lg"></div>
            <div className="flex gap-5 mt-1">
              {[1, 2, 3].map((_, index) => (
                <div
                  key={index}
                  className="h-6 w-20 bg-slate-200 animate-pulse rounded-full"
                ></div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        // Actual Content
        <div>
          <img
            src="/placeholder.jpg"
            className="h-[340px] w-full object-cover rounded-xl"
          ></img>

          <div className="flex justify-between items-center">
            <div className="my-5 flex flex-col gap-2">
              <h2 className="font-bold text-2xl">
                {trip?.userSelection?.location?.label}
              </h2>
              <div className="flex gap-5 mt-1">
                <h2 className="p-1 px-3 bg-gray-200 rounded-full xs:text-xs md:text-md">
                  📆 {trip?.userSelection?.noOfDays} Days{" "}
                </h2>
                <h2 className="p-1 px-3 bg-gray-200 rounded-full xs:text-xs md:text-md">
                  💰 {trip?.userSelection?.budget} Budget{" "}
                </h2>
                <h2 className="p-1 px-3 bg-gray-200 rounded-full xs:text-xs md:text-md">
                  🥂 {trip?.userSelection?.traveller}{" "}
                </h2>
              </div>
            </div>
            <Button>
              <IoIosSend />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default InfoSection;
