import { Box } from "@mui/material";
import Header from "../../Components/Header";
import PieChart from "../../Components/PieChart"

const Report = () => {
  return (
    <Box m="20px">
      <Header title="Sales Report" />
      <Box height="75vh">
        <PieChart />
      </Box>
    </Box>
  );
};

export default Report;