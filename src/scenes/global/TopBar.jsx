import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, token_mode } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { ContactSupportOutlined } from "@mui/icons-material";


const TopBar = ()=>{
    const theme = useTheme();
    const colors = token_mode(theme.palette.mode);
    console.log(theme.palette.mode)
    //Pass value from Parent to Child Component.
    const colorMode = useContext(ColorModeContext);

    //Similar to <div> but can add css directly to it.
    //padding set to 2 ,justifyContent distributes child element evetually on main axis of flx container. 
    //InputBase is for input tags
    return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* SEARCH BAR */}
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="4px"
      >
        <InputBase sx={{ ml: 2, mr:3 }} placeholder="Portfolio Search" />
        <IconButton type="button" sx={{ p: 0.2 }}>
          <SearchIcon />
        </IconButton>
      </Box>

      {/* ICONS */}
      <Box display="flex"  color={colors.primary[100]}>
        
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>

        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>

        <IconButton>
          <PersonOutlinedIcon />
        </IconButton>

        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
      </Box>
    </Box>
  );
};
export default TopBar;