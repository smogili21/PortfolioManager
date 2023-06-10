import { Typography,Box,useTheme } from "@mui/material";
import { token_mode } from "../theme";

const Header = ({title,subtitle}) => {
    const theme = useTheme()
    const color_val= token_mode(theme.palette.mode);
    return (
    <Box mb="20px">
        <Typography variant="h2" color={color_val.grey[100]} fontWeight="bold" sx={{mb:"4px"}}>{title}</Typography>
        <Typography variant="h4" color={color_val.greenAccent[300]} fontWeight="bold" sx={{mb:"3px"}}>{subtitle}</Typography>


    </Box>
    )
    
}

export default Header;