import {Box,useTheme} from "@mui/material"
import Header from "../../components/Header"
import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import Typography from '@mui/material/Typography';
import ExpandIcon from '@mui/icons-material/Expand';
import { token_mode } from "../../theme"

const FAQ = () => {
    const theme=useTheme()
    const colors=token_mode(theme.palette.mode)
    return (
    <Box m = "20px">
        <Header title="FAQ" subtitle="Frequently Asked Questions Page"/>
        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandIcon/>}>
            <Typography color={colors.greenAccent[400]} variant="h5">What is a hedge fund?</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography color={colors.greenAccent[400]} variant="h5">A hedge fund is a type of investment fund that pools capital from accredited individuals or institutional investors and invests in a diverse range of assets with the aim of generating high returns while minimizing risk.</Typography>   
            </AccordionDetails>
        </Accordion>

        <Accordion>
            <AccordionSummary expandIcon={<ExpandIcon/>}>
            <Typography color={colors.greenAccent[400]} variant="h5">How do hedge funds differ from mutual funds?</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography color={colors.greenAccent[400]} variant="h5">Hedge funds differ from mutual funds in several ways, including their investment strategies, level of regulation, and minimum investment requirements. Hedge funds typically have more flexibility in their investment strategies and are subject to less regulatory oversight than mutual funds. They also typically require higher minimum investments and are only open to accredited investors.</Typography>   
            </AccordionDetails>
        </Accordion>

        <Accordion>
            <AccordionSummary expandIcon={<ExpandIcon/>}>
            <Typography color={colors.greenAccent[400]} variant="h5">What is the investment strategy of the hedge fund portfolio?</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography color={colors.greenAccent[400]} variant="h5">The investment strategy of our hedge fund can vary widely depending on the specific fund and its objectives. Common strategies include long/short equity, global macro, event-driven, and quantitative trading.</Typography>   
            </AccordionDetails>
        </Accordion>

        <Accordion>
            <AccordionSummary expandIcon={<ExpandIcon/>}>
            <Typography color={colors.greenAccent[400]} variant="h5">What fees are associated with investing in the hedge fund portfolio?</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography color={colors.greenAccent[400]} variant="h5">We typically charge management fees and performance fees which varies based on your net asset value. </Typography>   
            </AccordionDetails>
        </Accordion>

        <Accordion>
            <AccordionSummary expandIcon={<ExpandIcon/>}>
            <Typography color={colors.greenAccent[400]} variant="h5">How can I invest in the hedge fund portfolio?</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography color={colors.greenAccent[400]} variant="h5">You can Navigate to (Side Bar &gt; Form ) and enter your details. Someone from the Team will contact you.</Typography>   
            </AccordionDetails>
        </Accordion>

        <Accordion>
            <AccordionSummary expandIcon={<ExpandIcon/>}>
            <Typography color={colors.greenAccent[400]} variant="h5">How can I schedule call with Hedge Fund Manager?</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography color={colors.greenAccent[400]} variant="h5">You can Navigate to (Side Bar &gt; Schedule )and find available date and time and schedule a meeting time.</Typography>   
            </AccordionDetails>
        </Accordion>

        <Accordion>
            <AccordionSummary expandIcon={<ExpandIcon/>}>
            <Typography color={colors.greenAccent[400]} variant="h5">What is the track record of the hedge fund manager?</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography color={colors.greenAccent[400]} variant="h5">Deepshika has over 15 years of experience in the financial industry, with a focus on managing hedge funds. She has successfully managed several funds with varying investment strategies, including long/short equity, global macro, and event-driven.
            Throughout her career, Deepshika has demonstrated her ability to generate strong returns for her investors, with an average annual return of 12%. She has also shown her skill in navigating challenging market conditions and mitigating risk.
            In addition to her experience managing hedge funds, Deepshika holds an MBA from a top-ranked business school and has published research on hedge fund investing in industry journals.
            Investors considering investing in Deepshika's hedge fund would likely view her extensive experience, track record of success, and strong educational background as positive factors, as well as her being a female in a traditionally male-dominated industry.</Typography>   
            </AccordionDetails>
        </Accordion>

    </Box>
    )
    
}

export default FAQ;