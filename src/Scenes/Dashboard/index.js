import { Box, Button, IconButton, Typography, useTheme, Divider,Grid } from "@mui/material";
import { tokens } from "../../Theme";
import { mockTransactions } from "../../data/Mockdata";
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import AddCircleOutlineIcon from "@mui/icons-material/PointOfSale";
import WarningIcon from '@mui/icons-material/Warning';
import Header from "../../Components/Header";
import { BarChart } from "@mui/icons-material";   
import StatBox from "../../Components/StatBox";
import LineChart from "../../Components/LineChart";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to Encash Mobile" />

        <Box>
          {/* <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button> */}
        </Box>
      </Box>
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 4"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="12,361"
            subtitle="New Leads"
            progress="0.75"
            increase="+14%"
            icon={
              <AddCircleOutlineIcon
                sx={{ color:'#009744', fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 4"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="431,225"
            subtitle="Progress Leads"
            progress="0.50"
            increase="+21%"
            icon={
              <QueryBuilderIcon
                sx={{color:'#009744', fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 4"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="1,325"
            subtitle="Missed Leads"
            progress="0.80"
            increase="+43%"
            icon={
              <WarningIcon
                sx={{ color:'#009744', fontSize: "26px" }}
              />
            }
          />
        </Box>

        {/* ROW 2 */}
        <Box
          gridColumn="span 12"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
     <Box>
  <Typography
    variant="h5"
    fontWeight="600"
    color={colors.grey[100]}
  >
    Revenue Generated
  </Typography>

</Box>
       </Box>
       <Box
      height={{ xs: '200px', sm: '250px', md: '300px' }} // Adjust height for different screen sizes
  >
      {/* <LineChart
        isDashboard={true}
        sx={{ width: '100%', maxWidth: '100%' }} // Adjust width for mobile view
      /> */}
    </Box>

        </Box>
        {/* <Box
          gridColumn="span 6"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        > */}
          {/* <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`1px solid ${colors.grey[100]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Recent Transactions
            </Typography>
          </Box> */}
          {/* {mockTransactions.map((transaction, i) => (
       <Box
       key={`${transaction.txId}-${i}`}
       display="flex"
       flexDirection={{ xs: 'column', sm: 'row' }} 
       justifyContent="space-between"
       alignItems={{ xs: 'flex-start', sm: 'center' }} 
       borderBottom={`1px solid ${colors.grey[100]}`}
       p={{ xs: '10px', sm: '15px' }} 
     >
       <Box mb={{ xs: '10px', sm: '0' }}> 
         <Typography
           color={'#009744'}
           variant="h5"
           fontWeight="600"
         >
   
         </Typography>
         <Typography color={colors.grey[100]}>
           {transaction.user}
         </Typography>
       </Box>
       <Box color={colors.grey[100]} mb={{ xs: '10px', sm: '0' }}>{transaction.date}</Box>
       <Box
         backgroundColor={'#009744'}
         p="5px 10px"
         borderRadius="4px"
         textAlign={{ xs: 'center', sm: 'left' }}
       >
      ₹ {transaction.cost}
       </Box>
     </Box>
     
          ))}
        </Box> */}

        {/* ROW 3 */}
        <Box
  gridColumn={{ xs: 'span 12', sm: 'span 12' }} // Adjust column span for different screen sizes
  gridRow="span 2 "
  backgroundColor={colors.primary[400]}
  p={{ xs: '20px', sm: '30px' }} 
>
  <Typography variant="h5" fontWeight="600" textAlign="center" mb="20px">
    Table
  </Typography>

</Box>

        {/* <Box
          gridColumn="span 12"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Sales Quantity
          </Typography>
          <Box height="250px" mt="-20px">

          </Box>
        </Box> */}
        {/* <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          padding="30px"
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ marginBottom: "15px" }}
          >
          Data
          </Typography>
          <Box height="200px">
        
          </Box>
        </Box> */}
      </Box>

    
    </Box>
  );
};

export default Dashboard;