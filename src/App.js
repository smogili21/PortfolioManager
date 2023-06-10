
import { ColorModeContext,useMode } from "./theme";
import {CssBaseline,ThemeProvider,Stack} from "@mui/material"
import SideBar from "./scenes/global/SideBar";
import TopBar from "./scenes/global/TopBar";
import { useState } from "react";

import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team"
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import Calendar from "./scenes/calendar";
import {Routes,Route} from "react-router-dom";

const  App = () => {
  const [theme,colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    //Provide value to all the Component values.
    //ThemeProvider is used to apply styling for entire application.
    //CssBaseline for applying consistent look across all pages.
    <ColorModeContext.Provider value = {colorMode}>
    <ThemeProvider theme = {theme}>
    <CssBaseline/>

    <div className="app">
    <SideBar isSidebar={isSidebar} />

    <main className="content">
    
    <TopBar setIsSidebar={setIsSidebar} />

    <Routes>
      <Route path="/InvestmentProfile/" element={<Dashboard/>} />
      <Route path="/" element={<Dashboard/>} />
      <Route path="/team" element={<Team/>} />
      <Route path="/contacts" element={<Contacts/>} />
      <Route exact path="/bar" element={<Bar/>} />
      <Route exact path="/form" element={<Form/>} />
      <Route exact path="/line" element={<Line/>} />
      <Route exact path="/pie" element={<Pie/>} />
      <Route exact path="/faq" element={<FAQ/>} />
      <Route exact path="/geography" element={<Geography/>} />
      <Route exact path="/calendar" element={<Calendar/>} /> 


    </Routes>
    </main>
    </div>
    </ThemeProvider>
    </ColorModeContext.Provider>
    
  );
}

export default App;



