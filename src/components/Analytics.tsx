import React from "react";
import Leaflet from "./Leaflet";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import Sidebar from "./Sidebar";
import LineGraph from "./LineGraph";
export default function Analytics() {
  const { isLoading, error, data } = useQuery("repoData", () =>
    fetch("https://disease.sh/v3/covid-19/countries").then((res) => res.json())
  );
  if (isLoading) return <h1>Loading...</h1>;
  let labels: Array<string> = [];
  let cases_data: Array<string> = [];
  let deaths: Array<string> = [];
  let recovered: Array<string> = [];
  if (data) {
    labels = data.map((country_data: any) => {
      return country_data.country;
    });
    labels = labels.slice(220);
    cases_data = data.map((country_data: any) => {
      return country_data.active;
    });
    cases_data = cases_data.slice(220);

    deaths = data.map((country_data: any) => {
      return country_data.deaths;
    });
    deaths = deaths.slice(220);

    recovered = data.map((country_data: any) => {
      return country_data.recovered;
    });
    recovered = recovered.slice(220);
  }
  console.log("in analytics");
  return (
    <div className="flex ">
      <Sidebar />
      <div className="flex">
        {!isLoading && (
          <LineGraph
            deaths={deaths}
            recovered={recovered}
            labels={labels}
            cases_data={cases_data}
          />
        )}
        <Leaflet />
      </div>
    </div>
  );
}
