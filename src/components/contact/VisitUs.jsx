import { useState } from "react";
import data from "../../data.json";
import Map from "./Map";

const VisitUs = () => {
  const [viewPort, setViewPort] = useState({
    latitude: data.CLLPOOL_COORDINATES.latitude,
    longitude: data.CLLPOOL_COORDINATES.longitude,
    zoom: 15.5,
    maxZoom: 16,
    minZoom: 15,
  });
  return (
    <>
      <h2 className="text-6xl text-center py-4 mt-4"> Visit Us</h2>

      {/* map component */}
      <div className="w-full h-128">
        <Map latitude={data.CLLPOOL_COORDINATES.latitude} longitude={data.CLLPOOL_COORDINATES.longitude} viewPort={viewPort} setViewPort={setViewPort} mapStyle='mapbox://styles/mapbox/dark-v10' />
      </div>
    </>
  );
};

export default VisitUs;
