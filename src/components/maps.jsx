import React, { Component, useEffect, useState } from 'react';
import { GeoJSON, MapContainer } from 'react-leaflet';
import mapData from '../data/mapData.json';
import 'leaflet/dist/leaflet.css';

const Maps = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    setCountries(mapData.features);
  }, []);

  const countryColor = ['white', 'red', 'blue', 'green'];

  const countryStyle = {
    fillColor: countryColor[0],
    color: 'gray',
    weight: 1,
  };

  const onEachCountry = (country, layer) => {
    const countryName = country.properties.ADMIN;
    layer.bindPopup(countryName);
  };

  return (
    <div style={{ margin: 0 }}>
      {countries.length === 0 ? (
        <div></div>
      ) : (
        <div style={{ margin: 0, height: '100vh' }}>
          <MapContainer
            style={{ height: '100vh' }}
            zoom={5}
            center={[40, 125]}
            noWrap={true}
            options={{ worldCopyJump: true }}
          >
            <GeoJSON
              style={countryStyle}
              data={countries}
              onEachFeature={onEachCountry}
              noWrap={true}
            />
          </MapContainer>
        </div>
      )}
    </div>
  );
};

export default Maps;
