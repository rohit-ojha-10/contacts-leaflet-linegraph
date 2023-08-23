import React from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { Icon, divIcon, point } from "leaflet";
import "leaflet/dist/leaflet.css";
import { useQuery } from "react-query";
export default function Leaflet() {
  const customIcon = new Icon({
    // iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
    iconUrl: require("leaflet/dist/images/marker-icon.png"),
    iconSize: [30, 30], // size of the icon
  });
  const { isLoading, error, data } = useQuery("repoData", () =>
    fetch("https://disease.sh/v3/covid-19/countries").then((res) => res.json())
  );

  if (isLoading) return <h1>"Loading..."</h1>;

  return (
    <div className="mt-8">
      <MapContainer
        style={{ height: 536, width: 700 }}
        center={[27, 78]}
        zoom={3.8}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {!isLoading &&
          data &&
          data.map((country_data: any) => {
            return (
              <Marker
                position={[
                  country_data.countryInfo.lat,
                  country_data.countryInfo.long,
                ]}
                icon={customIcon}
              >
                <Popup>
                  <strong>
                    <strong>{country_data.country}</strong>
                  </strong>
                  <br />
                  <strong>Active</strong> : {country_data.active}
                  <br />
                  <strong>Recovered</strong> : {country_data.recovered}
                  <br />
                  <strong>Deaths</strong> : {country_data.deaths}
                </Popup>
              </Marker>
            );
          })}
      </MapContainer>
    </div>
  );
}
