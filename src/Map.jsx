import React, { useEffect } from "react";
import L from "leaflet";

const Map = () => {
  const mapStyles = {
    overflow: "hidden",
    width: "100%",
    height: "100vh",
  };

  const MAP_TILE = L.tileLayer(
    `https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`,
    {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }
  );
  const mapParams = {
    center: [37.0902, -95.7129],
    zoom: 3,
    zoomControl: false,
    maxBounds: L.latLngBounds(L.latLng(-150, -240), L.latLng(150, 240)),
    layers: [MAP_TILE],
  };

  useEffect(() => {
    const container = L.DomUtil.get("map2");

    if (container != null) {
      container._leaflet_id = null;
    }

    // const map = L.map("map2");
    // const layer = window.protomaps.leafletLayer({
    //   url: "http://localhost:8080/Seattle_WA.pmtiles",
    // });
    // console.log(layer);
    // layer.addTo(map);
    const map = L.map("map2", mapParams);
  }, []);

  return (
    <div>
      <div id="map2" style={mapStyles} />
    </div>
  );
};

export default Map;
