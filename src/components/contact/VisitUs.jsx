import ReactMapGL, { Marker } from 'react-map-gl';
import { useState } from 'react'
import { HiOutlineLocationMarker } from 'react-icons/hi'

const CLLPOOL_COORDINATES = {
    latitude: 36.197438,
    longitude: 44.038536,
}
const VisitUs = () => {
    const [viewPort, setViewPort] = useState({
        latitude: CLLPOOL_COORDINATES.latitude,
        longitude: CLLPOOL_COORDINATES.longitude,
        zoom: 15.5,
        maxZoom: 16,
        minZoom: 15,
    });
    return (
        <>
            <h2 className='text-6xl text-center py-4 mt-4' > Visit Us</h2 >

            {/* map component */}
            <div className='w-full h-128'>
                <ReactMapGL ReactMapGL {...viewPort} mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_API_KEY} onViewStateChange={setViewPort} mapStyle="mapbox://styles/mapbox/dark-v10" width={'100%'} height={'100%'} >
                    <Marker latitude={CLLPOOL_COORDINATES.latitude} longitude={CLLPOOL_COORDINATES.longitude} offsetLeft={-45} offsetTop={-35} className='flex flex-col items-center'>
                        <p className='text-sm text-sky-500'>CLLPOOL Company</p> <HiOutlineLocationMarker className='text-2xl text-sky-500' />
                    </Marker>
                </ReactMapGL>
            </div>
        </>
    )
}

export default VisitUs
