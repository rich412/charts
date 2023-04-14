import "./App.css";
import { Box, Stack, Typography } from "@mui/material";
import Recharts from "./components/Charts/Recharts";
import Nivo from "./components/Charts/Nivo";
import Apexcharts from "./components/Charts/ApexCharts";
import Card from "./components/Card";

function App() {
  return (
    <Stack direction="column" gap={2} width="100%">
      <Card
        left={<Typography variant="h6">Recharts</Typography>}
        right={<Recharts />}
      />
      <Card
        left={<Typography variant="h6">Nivo.rocks</Typography>}
        right={<Nivo />}
      />
      <Card
        left={<Typography variant="h6">Apexcharts</Typography>}
        right={<Apexcharts />}
      />
    </Stack>
  );
}

export default App;
