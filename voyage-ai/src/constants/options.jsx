export const SelectTravelList = [
  {
    id: 1,
    title: "Just Me",
    desc: "A solo traveller in exploration",
    icon: "✈️",
    people: "1 person",
  },
  {
    id: 2,
    title: "Couple",
    desc: "Two travels in tandem",
    icon: "🥂",
    people: "2 people",
  },
  {
    id: 3,
    title: "Family",
    desc: "A group for a fun adventure",
    icon: "🏘️",
    people: "3 to 5 people",
  },
  {
    id: 4,
    title: "Friends",
    desc: "A bunch of thrill seekers",
    icon: "👯👯",
    people: "5 to 10 people",
  },
];

export const SelectBudgetOptions = [
  {
    id: 1,
    title: "Cheap",
    desc: "Stay conscious of costs",
    icon: "💴",
  },
  {
    id: 2,
    title: "Moderate",
    desc: "Keep costs average",
    icon: "💰",
  },
  {
    id: 3,
    title: "Expensive",
    desc: "A lavish trip",
    icon: "💸",
  },
];

export const AI_PROMPT =
  "Generate Travel Plan for Location: {location}, for {totalDays} Days for {traveller} with a {budget} budget. Give me a Hotels options list with HotelName, Hotel address, Price, Hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, rating, Time to travel each of the location for {totalDays} days with each day plan with best time to visit in JSON format.";
