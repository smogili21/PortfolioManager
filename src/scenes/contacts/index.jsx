import { Box,Typography} from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { token_mode } from "../../theme";
import {mockDataContacts} from "../../data/mockData"
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import { useTheme } from "@mui/material";

const Contacts = () =>{
    const [rows,setRows]=useState([])
    const theme = useTheme()
    const colors= token_mode(theme.palette.mode);

    //columns
    const columns = [
        { field: "registrarId", headerName: "Registred Client ",flex:0.3 },
        {
          field: "name",
          headerName: "Full Name",
          flex: 0.5,
          cellClassName: "name-column--cell",
        },
        {
            field: "age",
            headerName: "Age Bracket",
            type: "number",
            headerAlign: "left",
            align: "left",
            renderCell: ({ row: { age } }) => {
              const textColor = age > 40 ? colors.redAccent[500] : colors.greenAccent[100];
              return (
                <Typography color={textColor} sx={{ ml: "6px" }}>
                  {age}
                </Typography>
              );
            }
          },
          
        {
          field: "phone",
          headerName: "Contact",
          flex: 0.5,
        },
        {
          field: "city",
          headerName: "City",
          flex: 0.5,
        }
      ];


      return (
        <Box m="20px">
          <Header
            title="CONTACTS"
            subtitle="Contact Information of Clients"
          />
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
                color: colors.greenAccent[300],
              },
              "& .MuiDataGrid-columnHeaders": {
                backgroundColor: colors.greenAccent[700],
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
              "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                color: `${colors.grey[100]} !important`,
              },
            }}
          >
            <DataGrid 
              rows={mockDataContacts}
              columns={columns}
              components={{ Toolbar: GridToolbar }}
            />
          </Box>
        </Box>
      );
    };
    
    export default Contacts;
    