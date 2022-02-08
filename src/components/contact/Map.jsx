import React from 'react';
import ReactMapGL, { Marker } from "react-map-gl";
import { FaMapMarkerAlt } from "react-icons/fa"

const Map = ({ viewPort, setViewPort, latitude, longitude, mapStyle = '' }) => {
    return <ReactMapGL
        ReactMapGL
        {...viewPort}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_API_KEY}
        onViewStateChange={setViewPort}
        mapStyle={mapStyle}
        width={"100%"}
        height={"100%"}
    >
        <Marker
            latitude={latitude}
            longitude={longitude}
            offsetLeft={-45}
            offsetTop={-35}
            className="flex flex-col items-center"
        >
            <p className="text-sm text-sky-500">CLLPOOL Company</p>{" "}
            <FaMapMarkerAlt className="text-2xl text-sky-500" />
        </Marker>
    </ReactMapGL>;
};

export default Map;
