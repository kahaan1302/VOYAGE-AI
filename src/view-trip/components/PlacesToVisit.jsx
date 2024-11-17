import PlaceCardItem from "./PlaceCardItem";

function PlacesToVisit({ trip }) {
  // Group itinerary items by day
  const itineraryByDay = trip?.tripData?.itinerary?.reduce((acc, item) => {
    if (!acc[item.day]) {
      acc[item.day] = [];
    }
    acc[item.day].push(item);
    return acc;
  }, {});

  const isLoading = !itineraryByDay || Object.keys(itineraryByDay).length === 0;

  return (
    <div>
      <h2 className="mt-8 font-bold text-lg">Places to Visit</h2>

      <div>
        {isLoading
          ? // Render skeleton loaders
            Array.from({ length: 3 }).map((_, dayIndex) => (
              <div key={dayIndex}>
                <h2 className="font-medium text-lg mt-4 bg-slate-200 h-6 w-1/3 rounded-md animate-pulse"></h2>
                <div className="grid md:grid-cols-2 gap-3">
                  {Array.from({ length: 4 }).map((_, cardIndex) => (
                    <div key={cardIndex} className="ml-4 my-3">
                      <div className="font-medium text-sm bg-slate-200 h-4 w-1/4 mb-2 rounded-md animate-pulse"></div>
                      <div className="rounded-xl p-3 flex gap-5 animate-pulse bg-slate-200">
                        <div className="w-[100px] h-[130px] bg-slate-300 rounded-xl"></div>
                        <div className="flex-1">
                          <div className="h-6 w-3/4 bg-slate-300 rounded-lg mb-2"></div>
                          <div className="h-4 w-5/6 bg-slate-300 rounded-lg mb-2"></div>
                          <div className="h-4 w-1/2 bg-slate-300 rounded-lg"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))
          : // Render actual content when data is available
            itineraryByDay &&
            Object.keys(itineraryByDay).map((day) => (
              <div key={day}>
                <h2 className="font-medium text-lg mt-4">Day - {day}</h2>
                <div className="grid md:grid-cols-2 gap-3">
                  {itineraryByDay[day].map((item, index) => (
                    <div className="ml-4 my-3" key={index}>
                      <h2 className="font-medium text-sm text-orange-600">
                        {item.time}
                      </h2>
                      <PlaceCardItem place={item} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
      </div>
    </div>
  );
}

export default PlacesToVisit;
