import React, { Component, useEffect, useState } from 'react';
import { GeoJSON, MapContainer } from 'react-leaflet';
import mapData from '../data/mapData.json';
import 'leaflet/dist/leaflet.css';

const Maps = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    setCountries(mapData.features);
  }, []);

  const countryStyle = {
    fillColor: 'red',
  };

  return (
    <div style={{ margin: 0 }}>
      {countries.length === 0 ? (
        <div></div>
      ) : (
        <div style={{ margin: 0, height: '100vh' }}>
          <MapContainer style={{ height: '100vh' }} zoom={5} center={[40, 125]}>
            <GeoJSON style={countryStyle} data={countries} />
          </MapContainer>
        </div>
      )}
    </div>
  );
};

export default Maps;
