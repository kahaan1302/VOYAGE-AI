import { Link } from "react-router-dom";

function PlaceCardItem({ place }) {
  const isLoading = !place;

  return (
    <div>
      {isLoading ? (
        // Skeleton Loading State
        <div className="rounded-xl p-3 mt-1 flex gap-5 animate-pulse bg-slate-200">
          <div className="w-[100px] h-[130px] bg-slate-300 rounded-xl"></div>
          <div className="flex-1">
            <div className="h-6 w-3/4 bg-slate-300 rounded-lg mb-2"></div>
            <div className="h-4 w-5/6 bg-slate-300 rounded-lg mb-2"></div>
            <div className="h-4 w-1/2 bg-slate-300 rounded-lg"></div>
          </div>
        </div>
      ) : (
        // Actual Content
        <Link
          to={
            "https://www.google.com/maps/search/?api=1&query=" +
            place?.placeName
          }
          target="_blank"
          className="text-black no-underline"
        >
          <div className="rounded-xl p-3 mt-1 flex gap-5 hover:scale-105 transition-all hover:shadow-md cursor-pointer hover:text-green-800 hover:border-green-600">
            <img
              src="/placeholder6.webp"
              className="w-[100px] h-[130px] rounded-xl"
              alt="Place"
              onError={(e) => {
                e.target.src = "/placeholder5.avif";
              }}
            ></img>
            {/* <img src={"/placeholder6.webp" ?? "placeholder5.avif"}></img> */}
            <div>
              <h2 className="font-bold text-lg ">{place.placeName}</h2>
              <p className="text-sm text-gray-700">{place.placeDetails}</p>
              <h2 className="mt-2">🕝 {place.timeToTravel}</h2>
            </div>
          </div>
        </Link>
      )}
    </div>
  );
}

export default PlaceCardItem;
