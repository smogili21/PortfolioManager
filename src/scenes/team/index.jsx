import { Box,Typography,useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { token_mode } from "../../theme";
import {mockDataTeam} from "../../data/mockData"
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import axios from "axios";

const access = ['(CFO)','RiskManager','Analyst']

const generatePhoneNumbers = ()=>{

  let phoneNumber = '';
  const areaCode = Math.floor(Math.random() * 900) + 100;
  phoneNumber += areaCode.toString() + '-';

  const exchangeCode = Math.floor(Math.random() * 900) + 100;
  phoneNumber += exchangeCode.toString() + '-';
  
  const lineNumber = Math.floor(Math.random() * 9000) + 1000;
  phoneNumber += lineNumber.toString();

  return phoneNumber;
}
const Team = () =>{

    const [rows,setRows]=useState([])
    
    const theme = useTheme()
    const colors= token_mode(theme.palette.mode);
    const columns = [
        { field: "id", headerName: "ID number" },
        {
          field: "first_name",
          headerName: "First Name",
          flex: 1, // take equal space 
          cellClassName: "name-column--val", //each cell has class name value
        },
        {
            field: "last_name",
            headerName: "Last Name",
            flex: 1, // take equal space 
            cellClassName: "name-column--val", //each cell has class name value
          },
        {
          field: "phone",
          headerName: "Contact",
          flex: 1,
          cellClassName: "name-column--val",
        },
        {
          field: "email",
          headerName: "Email Address",
          flex: 1,
          cellClassName: "name-column--val",
        },
        {
            field: "avatar",
            headerName: "Profile Photo",
            flex: 1,
            headerAlign: "center",
            renderCell:({row:{avatar}})=> {
                return(
                    <Box>
                    <img src={avatar} alt="Profile" />
                    </Box>
                    )
            }
          },
        {
            field:"access",
            headerName:"Role ",
            headerAlign: "center",
            flex:1,

            renderCell:({row :{access}})=>{
                return(
                    <Box width="90%" m ="0 auto" p="15px" display="flex" justifyContent="center" backgroundColor={
                      access==="Analyst"
                        ? colors.greenAccent[800]
                            : access === "RiskManager"
                                ? colors.greenAccent[700]
                                    : access === "(CFO)"
                                        ? colors.greenAccent[800]
                       : colors.greenAccent[100]
                    } borderRadius="5px">
                     {access==="RiskManager" && <SecurityOutlinedIcon/>}
                     {access==="(CFO)" && <AdminPanelSettingsOutlinedIcon/>}
                     {access==="Analyst" && <LockOpenOutlinedIcon/>}
                     <Typography color={colors.grey[100]} sx={{ml:"6px"}} >{access}</Typography>
                    </Box>
                )

            }
        }
    ]

    useEffect(()=>{
        const fetchData = async ()=>{

            //Rest Api call.
           const {data} = await axios.get("https://reqres.in/api/users");
           console.log(data)
           const updatedData = data.data.map((row)=>{
                row['phone']=generatePhoneNumbers();
                const randomIndex = Math.floor(Math.random() * access.length);
                row['access']=  access[randomIndex];
                return row;
           })
           setRows(updatedData)
        }
        fetchData();

    },[])


    return(
        <Box m ="20px">
            <Header title="TEAMS" subtitle="Managing Teams"></Header>
            <Box m="50px 0 0 0" height="75vh" sx={{
          //Remove the borders 
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--val": {
            color: colors.greenAccent[400],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.greenAccent[600],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.greenAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}>
                <DataGrid
                checkboxSelection
                rows = {rows}
                columns = {columns}
                />
            </Box>  
        </Box>
    )
}

export default Team;