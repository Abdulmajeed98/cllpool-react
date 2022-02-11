import data from "../../data.json";
import Map from "./Map";

const VisitUs = () => {
  return (
    <>
      <h2 className="text-6xl text-center py-4 mt-4"> Visit Us</h2>

      {/* map component */}
      <div className="w-full h-128">
        <Map latitude={data.CLLPOOL_COORDINATES.latitude} longitude={data.CLLPOOL_COORDINATES.longitude} mapStyle='mapbox://styles/mapbox/dark-v10' />
      </div>
    </>
  );
};

export default VisitUs;
