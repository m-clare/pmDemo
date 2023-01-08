import React, { useEffect } from "react";
import L from "leaflet";

const Map = () => {
  const mapStyles = {
    overflow: "hidden",
    width: "100%",
    height: "100vh",
  };
  useEffect(() => {
    const container = L.DomUtil.get("pmMap");
    const map = L.map("pmMap");
    if (container != null) {
      container._leaflet_id = null;
    }
    map.setView(new L.LatLng(47.608, -122.335), 16);
    var layer = window.protomaps.leafletLayer({
      url: "http://localhost:8080/Seattle_WA.pmtiles",
    });
    layer.addTo(map);
  }, []);

  return (
    <div>
      <div id="pmMap" style={mapStyles} />
    </div>
  );
};

export default Map;
