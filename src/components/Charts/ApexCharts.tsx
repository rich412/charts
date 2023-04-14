import Chart from "react-apexcharts";
import { MAIN_COLOR, SUB_COLOR } from "./constants";

const Apexcharts: React.FC = () => {
  const data = {
    series: [
      {
        name: "before",
        data: [70, 53, 80, 52, 91, 34, 68, 58, 80],
      },
      {
        name: "after",
        data: [75, 69, 46, 55, 84, 48, 70, 69, 52],
      },
    ],
    options: {
      colors: [MAIN_COLOR, SUB_COLOR],
      plotOptions: {
        bar: {
          horizontal: false,
          // columnWidth: '100%',
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: true,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
        labels: {
          show: true,
        },
      },
      xaxis: {
        categories: [
          "Day1",
          "Day2",
          "Day3",
          "Day4",
          "Day5",
          "Day6",
          "Day7",
          "Day8",
          "Day9",
        ],
      },
      yaxis: { tickAmount: 10 },
      fill: {
        opacity: 1,
      },
      chart: {
        toolbar: { show: false },
      },
      legend: {
        markers: {
          width: 20,
          height: 20,
        },
      },
    },
  };
  return (
    <Chart
      options={data.options}
      series={data.series}
      type="bar"
      width="100%"
      height="100%"
    />
  );
};

export default Apexcharts;
