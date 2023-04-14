import { ResponsiveBar } from "@nivo/bar";
import { MAIN_COLOR, SUB_COLOR } from "./constants";

const Nivo: React.FC = () => {
  const data = [
    {
      name: "Day1",
      before: 70,
      after: 75,
    },
    {
      name: "Day2",
      before: 53,
      after: 69,
    },
    {
      name: "Day3",
      before: 80,
      after: 46,
    },
    {
      name: "Day4",
      before: 52,
      after: 55,
    },
    {
      name: "Day5",
      before: 91,
      after: 84,
    },
    {
      name: "Day6",
      before: 34,
      after: 48,
    },
    {
      name: "Day7",
      before: 68,
      after: 70,
    },
    {
      name: "Day8",
      before: 58,
      after: 69,
    },
    {
      name: "Day9",
      before: 80,
      after: 52,
    },
  ];
  return (
    <ResponsiveBar
      data={data}
      keys={["before", "after"]}
      indexBy="name"
      margin={{ top: 10, right: 0, bottom: 60, left: 30 }}
      padding={0.3}
      groupMode="grouped"
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={[MAIN_COLOR, SUB_COLOR]}
      fill={[
        {
          match: {
            id: "fries",
          },
          id: "dots",
        },
        {
          match: {
            id: "sandwich",
          },
          id: "lines",
        },
      ]}
      borderColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      legends={[
        {
          dataFrom: "keys",
          anchor: "bottom",
          direction: "row",
          justify: false,
          translateX: 0,
          translateY: 50,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: "left-to-right",
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
            {
              on: "hover",
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      // role="application"
      // ariaLabel="Nivo bar chart demo"
      // barAriaLabel={(e) => {
      //   return `${e.id}: ${e.formattedValue} in country: ${e.indexValue}`
      // }}
    />
  );
};

export default Nivo;
