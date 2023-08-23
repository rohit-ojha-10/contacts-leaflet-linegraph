import React, { useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useQuery } from "react-query";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
    scales: {
      xAxes: [
        {
          title: "time",
          type: "time",
          gridLines: {
            lineWidth: 2,
          },
          time: {
            unit: "day",
            unitStepSize: 1000,
            displayFormats: {
              millisecond: "MMM DD",
              second: "MMM DD",
              minute: "MMM DD",
              hour: "MMM DD",
              day: "MMM DD",
              week: "MMM DD",
              month: "MMM DD",
              quarter: "MMM DD",
              year: "MMM DD",
            },
          },
        },
      ],
    },
  },
};

export const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
];

interface graphProps {
  labels: Array<string>;
  cases_data: Array<string>;
  deaths: Array<string>;
  recovered: Array<string>;
}
export default function App(props: graphProps) {
  const { labels, cases_data, deaths, recovered } = props;
  const cases_dataa = {
    labels,
    datasets: [
      {
        label: "Cases",
        data: cases_data,
        borderColor: "blue",
        backgroundColor: "blue",
      },
      {
        label: "Deaths",
        data: deaths,
        borderColor: "red",
        backgroundColor: "red",
      },
      {
        label: "Recovered",
        data: recovered,
        borderColor: "green",
        backgroundColor: "green",
      },
    ],
  };
  return (
    <div className="ml-8 mr-8 mt-8">
      <Line width={500} height={500} options={options} data={cases_dataa} />
    </div>
  );
}
