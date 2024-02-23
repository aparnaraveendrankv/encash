import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../Theme";
// import { mockDataTeam } from "../../data/Mockdata";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import PhoneIcon from "@mui/icons-material/Phone";
import Header from "../../Components/Header";

const Newleads = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      // flex: isSmallScreen ? 1 : 2,
      // cellClassName: "name-column--cell",
    },
    {
  
      headerName: "Phone Number",
      // flex: isSmallScreen ? 1 : 2,
      // renderCell: () => (
      //   // <Box display="flex" alignItems="center">
      //     <PhoneIcon  /> 
 
      //   // </Box>
      // ),
    },
  
  ];

  return (
    <Box m="20px">
      <Header title="New Leads" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: 'black',
       
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: '#009744',
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: '#009744',
          },
          "& .MuiCheckbox-root": {
            color: `grey !important`,
          },
        }}
      >
        {/* <DataGrid checkboxSelection rows={mockDataTeam} columns={columns} /> */}
        <DataGrid  rows='' columns={columns} />
      </Box>
    </Box>
  );
};

export default Newleads;
