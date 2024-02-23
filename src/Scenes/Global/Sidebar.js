import React, { useState } from 'react';
import { Sidebar as  ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme, useMediaQuery, } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../Theme";
import DashboardIcon from '@mui/icons-material/Dashboard';
import NewLeadsIcon from '@mui/icons-material/EmojiObjects';
import PendingLeadIcon from "@mui/icons-material/HourglassEmpty";
import CreditCardIcon from '@mui/icons-material/CreditCard';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import WarningIcon from '@mui/icons-material/Warning';
import BarChartIcon from '@mui/icons-material/BarChart';
import StarIcon from '@mui/icons-material/Star';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import StoreIcon from '@mui/icons-material/Store';
import { LocalOffer } from '@mui/icons-material';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();

  return (
    <MenuItem
      active={selected === title}
      style={{
        color: '#009744', // Change text color to green
      }}
      onClick={() => setSelected(title)}
      icon={React.cloneElement(icon, { style: { color: 'green' } })} 
    >
      {title}
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const [showModal, setShowModal] = useState(false);
  
  const handleClose = () => setShowModal(false);
  const handleLogout = () => {
    // Perform logout actions here
    //  clear session, log out user, etc.
    setShowModal(false);
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); 
  const [isCollapsed, setIsCollapsed] = useState(isMobile);
  const [selected, setSelected] = useState('Dashboard');
  return (
    <Box
      sx={{
        // height: '100vh', 
        display: 'flex',
        flexDirection: 'column',
        '& .pro-sidebar-inner': {
          background: '#222', 
          display: 'flex',
          flexDirection: 'column',
     
        },
        '& .pro-sidebar-menu': {
          flex: '1',
        },
      }}
    >
      
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square" className="pro-sidebar-menu">
          {/* LOGO */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: '10px 0 20px 0',
              color: 'green', 
            }}
          >
            <Link to="/"style={{ textDecoration: 'none' }}>
              <img
                src="https://encashmobile.in/assests/img/logo.png"
                alt="Logo"
                style={{
                  width: isCollapsed ? '40px' : '100px', 
                  // transition: 'width 0.3s ease-in-out', 
                }}
              />
            </Link>
          </MenuItem>
     <Box paddingLeft={isCollapsed ? undefined : "10%"}>
      <Link to = "/"style={{ textDecoration: 'none' }}>
            <Item
              title="Dashboard"
              icon={<DashboardIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            </Link>
            <Link   to="/new"style={{ textDecoration: 'none' }}>
            <Item
              title="New Leads"
              icon={<NewLeadsIcon />}
              selected={selected}
              setSelected={setSelected}
            /></Link>
              <Link   to="/pending"style={{ textDecoration: 'none' }}>
            <Item
              title="Progress Leads"
              to="/pend"
              icon={<PendingLeadIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            </Link>
            <Link to ="/missed"style={{ textDecoration: 'none' }}>
               <Item
              title="Missed Leads"
              to="/wallet"
              icon={<WarningIcon/>}
              selected={selected}
              setSelected={setSelected}
            /></Link>
      <Link to ="/relavant"style={{ textDecoration: 'none' }}>
            <Item
              title="Today's Deal"

              icon={<StarIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            </Link>
            <Link to ="/deal"style={{ textDecoration: 'none' }}>
            <Item
              title="Tomorow's Deal"

              icon={<LocalOffer />}
              selected={selected}
              setSelected={setSelected}
            />
            </Link>

                     <Link to ="/wallet"style={{ textDecoration: 'none' }}>
            <Item
              title="Wallet"
              to="/wallet"
              icon={<CreditCardIcon />}
              selected={selected}
              setSelected={setSelected}
            /></Link>
             <Link to ="/stats"style={{ textDecoration: 'none' }}>
            <Item
              title="Stats"
              to="/stats"
              icon={<QueryStatsIcon />}
              selected={selected}
              setSelected={setSelected}
            /></Link>
             <Link to ="/report" style={{ textDecoration: 'none' }}>
                 <Item
              title="Report"
              to="/report"
              icon={<BarChartIcon />}
              selected={selected}
              setSelected={setSelected}
            /></Link>
                 <Item
              title="Support"
              to="/support"
              icon={<HelpOutlineIcon />}
              selected={selected}
              setSelected={setSelected}
            />
                    <Item
              title="Stores"
              to="/stores"
              icon={<StoreIcon />}
              selected={selected}
              setSelected={setSelected}
            />
         
                 {/* <Item
              title="Delivery"
              to="/delivery"
              icon={<LocalShippingIcon />}
              selected={selected}
              setSelected={setSelected}
            /> */}
                {/* <Item
              title="Customer Interaction"
              to="/customer"
              icon={<ChatIcon />}
              selected={selected}
              setSelected={setSelected}
            /> */}

<Link to ="/settings" style={{ textDecoration: 'none' }}>
           <Item
              title="Settings"
              to="/settings"
              icon={<SettingsIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            </Link>
  
               <>
        <span
          style={{ textDecoration: 'none', cursor: 'pointer' }}
          onClick={() => setShowModal(true)}
        >
                 <Item
              title="Logout"

              icon={<LogoutIcon />}
              selected={selected}
              setSelected={setSelected}
            />

        </span>
  
        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Confirm Logout</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure you want to log out?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="success" onClick={handleLogout}>
              Logout
            </Button>
          </Modal.Footer>
        </Modal>
      </>
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;