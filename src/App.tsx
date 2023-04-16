import "./App.css";
import { Stack } from "@mui/material";
import Recharts from "./components/Charts/Recharts";
import Nivo from "./components/Charts/Nivo";
import Apexcharts from "./components/Charts/ApexCharts";
import Card from "./components/Card";

function App() {
  return (
    <Stack direction="column" gap={2} width="100%">
      <Card title={"Recharts"}>
        <Recharts />
      </Card>
      <Card title={"Nivo.rocks"}>
        <Nivo />
      </Card>
      <Card title={"Apexcharts"}>
        <Apexcharts />
      </Card>
    </Stack>
  );
}

export default App;
