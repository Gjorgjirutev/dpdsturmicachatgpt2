import L from "leaflet";
import { useEffect } from "react";

export default function MapView({ events }) {
  useEffect(() => {
    const map = L.map("map").setView([41.437, 22.642], 13);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")
      .addTo(map);

    events.forEach(e => {
      L.marker([e.lat, e.lng]).addTo(map)
        .bindPopup(`${e.type}<br/>${e.description}`);
    });
  }, [events]);

  return <div id="map" style={{ height: "60vh" }} />;
}