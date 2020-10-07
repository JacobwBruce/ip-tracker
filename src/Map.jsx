import React from 'react';
import './Map.css';
import { Map, TileLayer, Marker } from 'react-leaflet';
// import { Icon } from 'leaflet';

export default function ({ data }) {
    const zoom = 17;
    // const icon = new Icon({ iconUrl: './images/icon-location.svg' });
    const { lat, lng } = data;
    return (
        <Map id='mapid' center={[lat, lng]} zoom={zoom}>
            <TileLayer
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>
            contributors'
            />
            <Marker position={[lat, lng]} />
        </Map>
    );
}
