import { Box ,Button,TextField,Select,MenuItem} from "@mui/material";
import * as yup from "yup"
import useMediaQuery from "@mui/material/useMediaQuery"; //conditionally reneder components based on screen size.
import Header from "../../components/Header";
import { Formik } from "formik";
import { InputLabel } from '@mui/material';
import { useState } from "react";
import Alert from '@mui/material/Alert';
import { useRef } from 'react';
import { ContactSupportOutlined } from "@mui/icons-material";

const initValues={
    "Name":" John Doe",
    "Email":" johndaoe@gmail.com",
    "Address":"125 Paterson Street Jersey heights , NJ 07670",
    "Contact":"(999) 999-9999",
    "Investment_Objective":"Growth and Capital Preservation",
    "Financial_Information":"Income of 800k/annum and Networth of 2Billion",
    "DisclosureConstent":"Acknowledge"
}


const phoneRegex= /^\(\d{3}\) \d{3}-\d{4}$/;

const clientSchema=yup.object().shape({
    Name : yup.string().required("Required Field"),
    Email : yup.string().required("Required Field"),
    Address : yup.string().required("Required Field"),
    Contact : yup.string().matches(phoneRegex, "Invalid Contact Number Format").required("Required Field"),
    DisclosureConstent : yup.string().required("Required Field")
})
const Form = ()=>{
    const notMobile = useMediaQuery("(min-width:600px)");
    const formRef = useRef(null);
    const [showAlert, setShowAlert] = useState(false);

    const handleFormSubmit = (values) => {
        console.log(values)
        setShowAlert(true);
        // additional code to handle form submission

        formRef.current.resetForm();
        
        setTimeout(() => {
          setShowAlert(false);
        }, 2000); // hide alert after 2 seconds
      }

    const handleClearForm = ()=>{
        ContactSupportOutlined.log("bsbdm")
    }

    return (
        <Box>
            <Header title="CLIENT CHECKIN" subtitle="New Client Checkin Form"></Header>
            <Formik
            innerRef={formRef}
            onSubmit={handleFormSubmit}
            initialValues={initValues}
            validationSchema={clientSchema}>
                
            {({values,errors,touched,handleBlur,handleChange,handleSubmit}) =>(
                //Manipulate values inside Form component;gridTemplateColumns split grid into 4 parts.Each
                //column has 1 fractin space.

                <form onSubmit={handleSubmit}>
                    <Box display="grid" gap="30px" gridTemplateColumns="repeat(4,minmax(0,1fr))"
                    sx={{
                        "& > div " : {gridColumn: notMobile ? undefined : "span 4"}
                    }}>
                    <TextField
                    fullWidth
                    variant="filled" 
                    type="text"
                    label="Full Name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.Name}
                    name="Name"
                    error={!!touched.Name && !!errors.Name} //!! makes it boolean and if value is empty then error thrown/
                    helperText={touched.Name && errors.Name}//mention the error name on field.
                    sx={{ gridColumn: "span 2" }}/>
                    
                    <TextField
                    fullWidth
                    variant="filled" 
                    type="text"
                    label="Email Address"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.Email}
                    name="Email"
                    error={!!touched.Email && !!errors.Email} //!! makes it boolean and if value is empty then error thrown/
                    helperText={touched.Email && errors.Email}//mention the error Email on field.
                    sx={{ gridColumn: "span 2" }}/>
                    
                    <TextField
                    fullWidth
                    variant="filled" 
                    type="text"
                    label="Address"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.Address}
                    name="Address"
                    error={!!touched.Address && !!errors.Address} //!! makes it boolean and if value is empty then error thrown/
                    helperText={touched.Address && errors.Address}//mention the error Address on field.
                    sx={{ gridColumn: "span 4" }}/>
                    
                    <TextField
                    fullWidth
                    variant="filled" 
                    type="text"
                    label="Contact Details"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.Contact}
                    name="Contact"
                    error={!!touched.Contact && !!errors.Contact} //!! makes it boolean and if value is empty then error thrown/
                    helperText={touched.Contact && errors.Contact}//mention the error Contact on field.
                    sx={{ gridColumn: "span 4" }}/>

                   <TextField
                    fullWidth
                    variant="filled" 
                    type="text"
                    label="Investment Objective"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.Investment_Objective}
                    name="Investment_Objective"
                    error={!!touched.Investment_Objective && !!errors.Investment_Objective} //!! makes it boolean and if value is empty then error thrown/
                    helperText={touched.Investment_Objective && errors.Investment_Objective}//mention the error Contact on field.
                    sx={{ gridColumn: "span 4" }}/>

                   <TextField
                    fullWidth
                    variant="filled" 
                    type="text"
                    label="Financial Information"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.Financial_Information}
                    name="Financial_Information"
                    error={!!touched.Financial_Information && !!errors.Financial_Information} //!! makes it boolean and if value is empty then error thrown/
                    helperText={touched.Financial_Information && errors.Financial_Information}//mention the error Contact on field.
                    sx={{ gridColumn: "span 2" }}/>

                    <InputLabel id="my-select-label">Disclosure Constent</InputLabel>
                    <Select name="DisclosureConstent" id="DisclosureConstent" value={values.DisclosureConstent} onChange={handleChange}>
                    <MenuItem value="Acknowledge">Acknowledge</MenuItem>
                    <MenuItem value="Discard">Discard</MenuItem>
                    </Select>

                    </Box>
                    <Box display="flex" justifyContent="center" mt="50px">
                        <Button type="submit" color="secondary" variant="contained">
                            Submit Form
                        </Button>
                    </Box>
                
                    {showAlert && ( //Show this component when hit on submit button only.
                    <Alert severity="success"> 
                     Form submitted successfully!
                    </Alert>
                    )}
                </form>
            )}
            </Formik>
        </Box>
    )


}

export default Form;