import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import {Box,List,ListItem,Typography,useTheme, ListItemText} from "@mui/material"
import Header from "../../components/Header";
import { token_mode } from "../../theme";
import { format } from 'date-fns';

const Calendar = () => {
    const theme = useTheme()
    const colors = token_mode(theme.palette.mode)
    //Update the current events in Calendar.
    const [currentEvents,setCurrentEvents]=useState([])

    //Create an event on Calendar.
    const handleCreateEvent = (selected) => {
        const title = prompt('Enter the Event Title');
        const calenApi = selected.view.calendar; //calendar object
        calenApi.unselect()

        if(title){
            calenApi.addEvent({
                id: `${selected.dateStr}-${title}`, //id = date - title
                title,
                start: selected.startStr,
                end: selected.endStr,
                allDay: selected.allDay,
            })
        }
    };
    //delete Event.
    const handleEventClick = (selected) => {
    if (
      window.confirm(
        `Are you sure to delete the event '${selected.event.title} ?'`
      )
    ) {
      selected.event.remove();
    }
  };
  return <Box m="20px">
    <Header title="CALENDAR" subtitle="Investment Schedules"/> 
    <Box display="flex" justifyContent="space-between">

    {/**List of Events Side Bar */}
    <Box flex="1 1 20%" backgroundColor={colors.primary[400]} p="15px" borderRadius="4px">
    <Typography variant="h4">Schedules</Typography>
    {/**List of Current events and map it to the List*/}
    <List> 
    {currentEvents.map((event) => (
        <ListItem
        key={event.id}
        sx={{
          backgroundColor: colors.greenAccent[500],
          margin: "10px 0",
          borderRadius: "2px",
        }}
      >
        <ListItemText
          primary={event.title} //Event title
          secondary={ //Format the Start Dates 
            <div>
              <Typography>
              {format(event.start, 'MMMM d, yyyy')}
            </Typography>
            <Typography>
              {format(event.start, 'h:mm a')}
            </Typography>
            </div>
          }
        />
      </ListItem>
            ))}
    </List>

    </Box>

    {/* CALENDAR */}
    <Box flex="1 1 100%" ml="25px">
          <FullCalendar
            height="75vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            //Organizing the header of calendar.
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay", 
            }}
            initialView="timeGridWeek" 
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true} //maimum events per day
            select={handleCreateEvent} //create an event
            eventClick={handleEventClick} // delete event when clicked again.
            eventsSet={(events) => setCurrentEvents(events)}
            //Set Initial Values for event.
            initialEvents={[
                {
                    id: 1,
                    title: 'Event 1',
                    start: '2023-04-01T10:00:00'
                  },
                  {
                    id: 2,
                    title: 'Event 2',
                    start: '2023-04-03T14:00:00'
                  },
            ]}
          />
        </Box>
    </Box>

    </Box>
  


}
export default Calendar;