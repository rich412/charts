import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { MAIN_COLOR, SUB_COLOR } from "./constants";

const Recharts: React.FC = () => {
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
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} barGap={0}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="name" />
        <YAxis domain={[0, "dataMax"]} tickCount={10} />
        <Tooltip />
        <Legend iconType="square" iconSize={20} />
        <Bar dataKey="before" fill={MAIN_COLOR} label={{ fill: "#121212" }} />
        <Bar dataKey="after" fill={SUB_COLOR} label={{ fill: "#121212" }} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Recharts;
