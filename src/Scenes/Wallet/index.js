import React from "react";
import { Box, Typography, useTheme, Card, Grid, IconButton } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../Theme";
import { mockDataInvoices } from "../../data/Mockdata";
import Header from "../../Components/Header";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import WithdrawIcon from '@mui/icons-material/MoneyOff';
const Wallet = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "phone",
      headerName: "Phone No.",
      flex: 1,
    },
    // {
    //   field: "email",
    //   headerName: "Email",
    //   flex: 1,
    // },
    {
      field: "cost",
      headerName: "Cost",
      flex: 1,
      renderCell: (params) => (
        <Typography color="#009744">
          ${params.row.cost}
        </Typography>
      ),
    },
    {
      field: "date",
      headerName: "Date",
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
      <Header title="Wallet" subtitle="Transaction Details" />
      <Card sx={{ backgroundColor: "#009744", p: 2, mt: 2 }}>
        <Typography variant="h6" color="white">
          Wallet Balance
        </Typography>
        <Typography variant="h4" color="white">
        ₹500 {/* Replace this with your actual wallet balance using api */}
        </Typography>
      </Card>
      <Grid container spacing={2} mt={2}>
        <Grid item xs={12} sm={4}>
          <Card sx={{ backgroundColor: "#1976d2", p: 2 }}>
            <IconButton color="primary">
              <AddCircleIcon fontSize="large" />
            </IconButton>
            <Typography variant="h6" color="white">
              Add Balance
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ backgroundColor: "#fbc02d", p: 2 }}>
            <IconButton color="warning">
              <SwapHorizIcon fontSize="large" />
            </IconButton>
            <Typography variant="h6" color="black">
              Wallet Transfer
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ backgroundColor: "#d32f2f", p: 2 }}>
            <IconButton color="black">
              <WithdrawIcon fontSize="large" />
            </IconButton>
            <Typography variant="h6" color="white">
              Withdrawal Request
            </Typography>
          </Card>
        </Grid>
      </Grid>
      <Box m="40px 0 0 0" height="75vh">
        <DataGrid checkboxSelection rows={mockDataInvoices} columns={columns} />
      </Box>
    </Box>
  );
};

export default Wallet;
