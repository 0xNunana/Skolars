'use client';

import React from 'react';
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';

const Maps = () => {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY || process.env.API_KEY;

  if (!apiKey) {
    console.error('API key for Google Maps is missing.');
    return <div>Error: Google Maps API key is missing.</div>;
  }

  return (
    <APIProvider apiKey={apiKey} onLoad={() => console.log('Maps API has loaded.')}>
      <Map
        defaultZoom={12}
        defaultCenter={{ lng: -0.1700, lat: 5.8000 }}
        // style={{ height: '100vh', width: '100%' }} // Ensure the map is visible
      >
        <Marker position={{ lat: 5.7453, lng: -0.1700 }}>
        
        </Marker>
      </Map>
    </APIProvider>
  );
};

export default Maps;
