import { useState } from "react";
import { ColorModeContext, useMode } from './Theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Topbar from './Scenes/Global/Topbar';
import Dashboard from './Scenes/Dashboard';
import Sidebar from "./Scenes/Global/Sidebar";
import Newleads from "./Scenes/Newleads";
import Pendingleads from "./Scenes/Pendingleads";
import Relavantleads from "./Scenes/Relavantleads";
import Missedleads from "./Scenes/Missedleads";
import Line from "./Scenes/Stats";
import Report from "./Scenes/Report";
import Wallet from "./Scenes/Wallet";
import Settings from "./Scenes/Settings/Settings";


// import Logoout from './Scenes/Global/Logout';
function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className='app'>
        <Sidebar isSidebar={isSidebar} />
          <main className='content'>
          <Topbar setIsSidebar={setIsSidebar} />
       
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/new" element={<Newleads/>} />
                <Route path="/pending" element={<Pendingleads/>}/>
                <Route path="/relavant" element={<Relavantleads/>}/>
                <Route path="/missed" element={<Missedleads/>}/>
                <Route path="/wallet" element={<Wallet/>} />
                <Route path="/stats" element={<Line />} />
                <Route path="/report" element={<Report />} />
                <Route path="/settings" element={<Settings/>} />
     
              </Routes>
        
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
