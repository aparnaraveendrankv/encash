import { Box } from "@mui/material";
import Header from "../../Components/Header";
import LineChart from "../../Components/LineChart";

const Line = () => {
  return (
    <Box m="20px">
      <Header title="Sales Status"  />
      <Box height="75vh">
        <LineChart />
      </Box>
    </Box>
  );
};

export default Line;