import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { Box, Heading } from '@chakra-ui/layout';

const MyCalendar = () => {
  return (
    <Box 
      w="full"
      p={4}
      shadow="md"
      sx={{
        'background-color': '#FEF5ED'
      }}
    >
      <Heading textAlign="center" mb={4} sx={{'color':'#2F86A6'}}>Calendar</Heading>
      <Box bgColor="white" p={4}>
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          headerToolbar={{
            start:'title',
            center:'',
            end:'prev,next'
          }}
          views={
            {
              dayGridMonth:{
                titleFormat:{month:'long', year:'numeric'}
              }
            }
          }
        />
      </Box>
      
    </Box>
  )
};

export default MyCalendar;