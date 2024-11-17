import { db } from "@/service/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
import PlacesToVisit from "../components/PlacesToVisit";
import Footer from "../components/Footer";
import InfoSection from "../components/InfoSection";
import Hotels from "../components/Hotels";

function Viewtrip() {
  const { tripId } = useParams();
  const [trip, setTrip] = useState([]);

  useEffect(() => {
    tripId && getTripData();
  }, [tripId]);

  // Fetch trip data from Firebase
  const getTripData = async () => {
    const docRef = doc(db, "AITrip", tripId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      // console.log("Document:", docSnap.data());
      setTrip(docSnap.data());
    } else {
      // console.log("No such document!");
      toast("No trip found!");
    }
  };

  return (
    <div className="p-10 md:px-20 lg:px-44 xl:px-56">
      {/* Information section */}
      <InfoSection trip={trip} />
      {/* Hotels */}
      <Hotels trip={trip} /> {/* Pass trip data to Hotels */}
      {/* Daily Plans */}
      <PlacesToVisit trip={trip} />
      {/* Footer */}
      <Footer trip={trip} />
    </div>
  );
}

export default Viewtrip;
