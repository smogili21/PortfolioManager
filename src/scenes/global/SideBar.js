
import {useState} from "react";
import {Box,IconButton,Typography,useTheme} from '@mui/material';
import { ProSidebarProvider,Menu,MenuItem } from "react-pro-sidebar"; //Sidebar component in react for the Page
// import 'react-pro-sidebar/dist/css/styles.css';

import { Link , useLocation} from "react-router-dom"; //Links when we click on the nVigation items
import { token_mode } from "../../theme";
import { findAllByDisplayValue } from "@testing-library/react";
import { ArrowDropDownCircle } from "@mui/icons-material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";


//Component for each SideBarComponent.
//SideBarComponent =(props) => {}
const SideBarComponent = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = token_mode(theme.palette.mode);
  return (
    <Link to={to}>
      <MenuItem
        active={selected === title}
        style={{
          color: colors.grey[100],
        }}
        onClick={() => setSelected(title)}
        icon={icon}
      >
        <Typography>{title}</Typography>
      </MenuItem>
    </Link>
  );
};






const SideBar = () => {
    const theme= useTheme();
    const colors = token_mode(theme.palette.mode); // has value dark or light.
    const [isCollapsed, setIsCollapsed]= useState(false); // is sidebar collapsed or not.
    const [selected,setSelected] =useState("Dashboard"); //Which page is selected


    //sx is used to set inline text and & targets the child element with class pro-sidebar-inner and test properties.
    return (<Box
    sx={{
        "& .pro-sidebar-inner":{
            background : `${colors.primary[400]} !important`
        },
        "& .pro-icon-wrapper":{
            background : "transparent !important"
        },
        "& .pro-inner-item":{
            padding : "5px 35px 5px 20px !important"
        },
        "& .pro-inner-item:hover":{
            color : " #868dfb !important"
        },
        "& .pro-menu-item.active":{
            color : " #6870fa !important"
        }

    }}>
<ProSidebarProvider collapsed={isCollapsed}>
{/* Menu for Sidebar*/}
<Menu iconShape="square"> 
{/*Icon for Menu */}
<MenuItem onClick={() => setIsCollapsed(!isCollapsed)} 
    icon = {isCollapsed ? <MenuOutlinedIcon/> : undefined}
    style={{margin: "10px 0 20px 0",color: colors.grey[100]}}
 >

{/*Menu Title*/}
{!isCollapsed && (
    <Box 
    display="flex"  justifyContent="space-between" alignItems="center" ml="17px" >
        <Typography variant="h3" color={colors.grey[100]}></Typography>
        <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
         <MenuOutlinedIcon/>   
        </IconButton>
    </Box>
)}
</MenuItem>

{/* Portfolio Manager Details and Image */}
{!isCollapsed && (
<Box mb="28px">

<Box display="flex" justifyContent="center" alignItems="center">
<img alt="portfolio_manager" width="100px" height="100px" src={`https://100women.org/wp-content/uploads/2019/07/Angela-Aldrich.jpg`} style={{cursor: "pointer", borderRadius: "50%"}}/>   
</Box> 

<Box textAlign="center">  
<Typography variant="h3" color={colors.primary[300]} fontWeight="bold" sx={{m: "12px 1px 0 0" }}>Deepshika</Typography>  
</Box>  

<Box textAlign="center">
<Typography variant="h5" color={colors.greenAccent[400]}>Senior portfolio manager for Primary Assets.</Typography>  
</Box>    
</Box>
)
}

{/*Contents of Menu and Page Navigations.*/}
<Box>
    
<SideBarComponent
title="Dashboard"
to="/"
icon={<HomeOutlinedIcon />}
selected={selected}
setSelected={setSelected}
/>

<Typography variant="h6" color={colors.greenAccent[200]} sx={{m: "15px 0 5px 20px"}}>Business</Typography>
<SideBarComponent
title="Teams"
to="/team"
icon={<PeopleOutlinedIcon />}
selected={selected}
setSelected={setSelected}/>
<SideBarComponent
title="Schedule"
to="/calendar"
icon={<CalendarTodayOutlinedIcon />}
selected={selected}
setSelected={setSelected}
/>
<SideBarComponent
title="Client Contact Details"
to="/contacts"
icon={<ContactsOutlinedIcon />}
selected={selected}
setSelected={setSelected}/>
<SideBarComponent
title="Form "
to="/form"
icon={<PersonOutlinedIcon />}
selected={selected}
setSelected={setSelected}
/>

<Typography variant="h6" color={colors.greenAccent[200]} sx={{m: "15px 0 5px 20px"}}>Analytics</Typography>
<SideBarComponent
title="Column Chart"
to="/bar"
icon={<BarChartOutlinedIcon />}
selected={selected}
setSelected={setSelected}
/>          
<SideBarComponent
title="Sector Chart"
to="/pie"
icon={<PieChartOutlineOutlinedIcon />}
selected={selected}
setSelected={setSelected}
/>          
<SideBarComponent
title="Map"
to="/geography"
icon={<MapOutlinedIcon />}
selected={selected}
setSelected={setSelected}
/>
<SideBarComponent
title="Time Chart"
to="/line"
icon={<TimelineOutlinedIcon />}
selected={selected}
setSelected={setSelected}
/>

<Typography variant="h6" color={colors.greenAccent[200]} sx={{m: "15px 0 5px 20px"}}>Support</Typography>
<SideBarComponent
title="FAQ"
to="/faq"
icon={<HelpOutlineOutlinedIcon />}
selected={selected}
setSelected={setSelected}
/>

</Box>
</Menu>

</ProSidebarProvider>
</Box>
);

};

export default SideBar;