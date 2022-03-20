import React, { useState } from "react";
import Map, { Marker } from "react-map-gl";
import { FaMapMarkerAlt } from "react-icons/fa";
import PropTypes from "prop-types";
const CustomMap = ({ latitude, longitude, mapStyle = "" }) => {
  const [viewPort, setViewPort] = useState({
    latitude,
    longitude,
    zoom: 15,
    maxZoom: 17,
    minZoom: 10,
  });
  return (
    <Map
      {...viewPort}
      mapboxAccessToken={import.meta.env.VITE_MAPBOX_API_TOKEN}
      onMove={setViewPort}
      mapStyle={mapStyle}
      width={"100%"}
      height={"100%"}>
      <Marker
        latitude={latitude}
        longitude={longitude}
        anchor={"bottom"}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
        }}
        onClick={() => {
          window.open("https://www.google.com/maps/search/?api=1&query=36.197397, 44.038539", "_blank");
        }}>
        <p className="text-sm text-sky-400">CLLPOOL Company</p>
        <FaMapMarkerAlt className="text-2xl text-sky-400" />
      </Marker>
    </Map>
  );
};

CustomMap.propTypes = {
  latitude: PropTypes.number,
  longitude: PropTypes.number,
  mapStyle: PropTypes.string,
};

export default CustomMap;
