import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export const chatSession = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: "Generate Travel Plan for Location: Las Vegas, for 3 Days for Couple with a Cheap budget. Give me a Hotels options list with HotelName, Hotel address, Price, Hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, rating, Time to travel each of the location for 3 days with each day plan with best time to visit, all the data for a single day should come under plan category in JSON format.\n",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "hotels": [\n    {\n      "hotelName": "The D Las Vegas",\n      "hotelAddress": "301 Fremont Street, Las Vegas, NV 89101",\n      "price": "$50-$100 per night",\n      "hotelImageUrl": "https://www.thed.com/media/images/the-d-las-vegas-exterior-day.jpg",\n      "geoCoordinates": "36.1698, -115.1425",\n      "rating": 4.0,\n      "description": "A budget-friendly hotel located in the heart of Fremont Street Experience, offering a retro vibe, live entertainment, and a casino."\n    },\n    {\n      "hotelName": "Circus Circus Hotel & Casino",\n      "hotelAddress": "2880 Las Vegas Blvd S, Las Vegas, NV 89109",\n      "price": "$40-$80 per night",\n      "hotelImageUrl": "https://media.cntraveler.com/photos/5d54c69b458c7771d193d909/master/pass/circus-circus-hotel-casino-las-vegas-exterior.jpg",\n      "geoCoordinates": "36.1144, -115.1723",\n      "rating": 3.5,\n      "description": "A classic Las Vegas hotel with a circus theme, offering budget-friendly rooms, a casino, and a variety of entertainment options."\n    },\n    {\n      "hotelName": "Golden Nugget Hotel & Casino",\n      "hotelAddress": "129 E Fremont St, Las Vegas, NV 89101",\n      "price": "$70-$150 per night",\n      "hotelImageUrl": "https://www.goldennugget.com/media/images/GN-Exterior.jpg",\n      "geoCoordinates": "36.1699, -115.1415",\n      "rating": 4.5,\n      "description": "A historic hotel located on Fremont Street, known for its luxurious amenities, an impressive aquarium, and a lively casino."\n    },\n    {\n      "hotelName": "Plaza Hotel & Casino",\n      "hotelAddress": "1 Main St, Las Vegas, NV 89101",\n      "price": "$60-$120 per night",\n      "hotelImageUrl": "https://www.plazahotelcasino.com/media/images/plaza-hotel-casino-las-vegas.jpg",\n      "geoCoordinates": "36.1694, -115.1418",\n      "rating": 4.0,\n      "description": "A modern hotel located on Fremont Street, offering stylish rooms, a casino, and a rooftop pool with city views."\n    },\n    {\n      "hotelName": "Stratosphere Hotel, Casino & Tower",\n      "hotelAddress": "2000 Las Vegas Blvd S, Las Vegas, NV 89104",\n      "price": "$40-$70 per night",\n      "hotelImageUrl": "https://www.stratospherehotel.com/media/images/stratosphere-las-vegas-hotel-exterior.jpg",\n      "geoCoordinates": "36.1315, -115.1720",\n      "rating": 3.0,\n      "description": "A towering hotel known for its thrilling rides and attractions, including the SkyJump and the Big Shot."\n    }\n  ],\n  "itinerary": [\n    {\n      "day": 1,\n      "time": "Morning (9:00 AM - 12:00 PM)",\n      "placeName": "Fremont Street Experience",\n      "placeDetails": "Explore the vibrant Fremont Street Experience, a pedestrian-friendly promenade with a canopy of lights, live entertainment, and numerous casinos.",\n      "placeImageUrl": "https://www.vegasexperience.com/media/images/freemont-street-experience.jpg",\n      "geoCoordinates": "36.1699, -115.1414",\n      "ticketPricing": "Free",\n      "rating": 4.5,\n      "timeToTravel": "2 hours"\n    },\n    {\n      "day": 1,\n      "time": "Afternoon (1:00 PM - 4:00 PM)",\n      "placeName": "The Mob Museum",\n      "placeDetails": "Learn about the history of organized crime in Las Vegas and the United States at this fascinating museum.",\n      "placeImageUrl": "https://www.themobmuseum.org/media/images/mob-museum-exterior.jpg",\n      "geoCoordinates": "36.1700, -115.1420",\n      "ticketPricing": "$25-$30 per person",\n      "rating": 4.0,\n      "timeToTravel": "2 hours"\n    },\n    {\n      "day": 1,\n      "time": "Evening (5:00 PM - 9:00 PM)",\n      "placeName": "Golden Nugget Casino",\n      "placeDetails": "Enjoy dinner and a show at the Golden Nugget, featuring a lively casino, a world-famous aquarium, and live entertainment.",\n      "placeImageUrl": "https://www.goldennugget.com/media/images/GN-Pool.jpg",\n      "geoCoordinates": "36.1699, -115.1415",\n      "ticketPricing": "Varies",\n      "rating": 4.5,\n      "timeToTravel": "4 hours"\n    },\n    {\n      "day": 2,\n      "time": "Morning (9:00 AM - 12:00 PM)",\n      "placeName": "Hoover Dam",\n      "placeDetails": "Take a day trip to the iconic Hoover Dam, a marvel of engineering that overlooks the Colorado River.",\n      "placeImageUrl": "https://www.nps.gov/hove/learn/nature/images/hooverdam_2014-04-09_1.jpg",\n      "geoCoordinates": "36.0306, -114.9498",\n      "ticketPricing": "Free (parking fee applies)",\n      "rating": 5.0,\n      "timeToTravel": "3 hours (round trip)"\n    },\n    {\n      "day": 2,\n      "time": "Afternoon (1:00 PM - 4:00 PM)",\n      "placeName": "Red Rock Canyon National Conservation Area",\n      "placeDetails": "Hike or drive through stunning desert landscapes at Red Rock Canyon, a scenic area with red sandstone cliffs and breathtaking views.",\n      "placeImageUrl": "https://www.nps.gov/redr/learn/nature/images/redrock_canyon.jpg",\n      "geoCoordinates": "36.1400, -115.2500",\n      "ticketPricing": "$15 per vehicle",\n      "rating": 4.5,\n      "timeToTravel": "2 hours"\n    },\n    {\n      "day": 2,\n      "time": "Evening (5:00 PM - 9:00 PM)",\n      "placeName": "Fremont Street Experience",\n      "placeDetails": "Enjoy the evening ambiance at Fremont Street Experience, watching the light show and taking in the lively atmosphere.",\n      "placeImageUrl": "https://www.vegasexperience.com/media/images/freemont-street-experience.jpg",\n      "geoCoordinates": "36.1699, -115.1414",\n      "ticketPricing": "Free",\n      "rating": 4.5,\n      "timeToTravel": "2 hours"\n    },\n    {\n      "day": 3,\n      "time": "Morning (9:00 AM - 12:00 PM)",\n      "placeName": "Bellagio Conservatory & Botanical Garden",\n      "placeDetails": "Admire the stunning floral displays at the Bellagio Conservatory & Botanical Garden, showcasing themed gardens and sculptures.",\n      "placeImageUrl": "https://www.bellagio.com/media/images/bellagio-conservatory-and-botanical-garden.jpg",\n      "geoCoordinates": "36.1181, -115.1747",\n      "ticketPricing": "Free",\n      "rating": 4.5,\n      "timeToTravel": "1 hour"\n    },\n    {\n      "day": 3,\n      "time": "Afternoon (1:00 PM - 4:00 PM)",\n      "placeName": "The LINQ Promenade",\n      "placeDetails": "Explore the outdoor LINQ Promenade, featuring shops, restaurants, and attractions, including the High Roller observation wheel.",\n      "placeImageUrl": "https://www.caesars.com/media/images/linq-promenade.jpg",\n      "geoCoordinates": "36.1145, -115.1730",\n      "ticketPricing": "Varies (High Roller tickets)",\n      "rating": 4.0,\n      "timeToTravel": "2 hours"\n    },\n    {\n      "day": 3,\n      "time": "Evening (5:00 PM - 9:00 PM)",\n      "placeName": "Caesars Palace",\n      "placeDetails": "Enjoy dinner and drinks at Caesars Palace, a luxurious casino resort with a Roman-themed atmosphere.",\n      "placeImageUrl": "https://www.caesars.com/media/images/caesars-palace.jpg",\n      "geoCoordinates": "36.1149, -115.1742",\n      "ticketPricing": "Varies",\n      "rating": 4.5,\n      "timeToTravel": "2 hours"\n    }\n  ]\n}\n```\n\n**Notes:**\n\n* The suggested hotels are known for their affordability and location in the heart of Las Vegas.\n* The itinerary provides a balance of free and paid attractions, catering to a cheap budget.\n* It includes both iconic landmarks and off-the-beaten-path experiences.\n* The time estimates are flexible and can be adjusted based on your preferences and pace.\n* Remember to check for the latest prices, opening hours, and availability before your trip.\n* Consider using public transportation or ride-sharing services to reduce travel costs.\n* Don\'t forget to look for deals and discounts on attractions and meals.\n* Have fun exploring Las Vegas on a budget!\n',
        },
      ],
    },
  ],
});