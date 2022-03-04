import data from "../../data.json";
import SectionTitle from "../global/SectionTitle";
import CustomMap from "./CustomMap";

const VisitUs = () => {
  return (
    <>
      <SectionTitle title={"visit us"} />

      {/* map component */}
      <div className="h-128 w-full">
        <CustomMap
          latitude={data.CLLPOOL_COORDINATES.latitude}
          longitude={data.CLLPOOL_COORDINATES.longitude}
          mapStyle="mapbox://styles/mapbox/dark-v10"
        />
      </div>
    </>
  );
};

export default VisitUs;
