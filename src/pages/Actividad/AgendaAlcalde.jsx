import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { Box } from '@mui/material'
import esLocale from '@fullcalendar/core/locales/es';

import { CalendarMonth } from '@mui/icons-material';


const events = [
  {
    title: 'Reunion con consejo municipal',
    start: '2024-04-03T10:00:00',
    end: '2024-04-03T12:00:00'
  },
  {
    title: 'Reunion con consejo municipal',
    start: '2024-04-03T15:30:00',
    end: '2024-04-03T12:00:00'
  },
  {
    title: 'Reunion con consejo municipal',
    start: '2024-04-03T10:00:00',
    end: '2024-04-03T12:00:00'
  },
  {
    title: 'Reunion con consejo municipal',
    start: '2024-04-03T15:30:00',
    end: '2024-04-03T12:00:00'
  },
  {
    title: 'Reunion con consejo municipal',
    start: '2024-04-03T10:00:00',
    end: '2024-04-03T12:00:00'
  },
  {
    title: 'Reunion con consejo municipal',
    start: '2024-04-03T15:30:00',
    end: '2024-04-03T12:00:00'
  },
  {
    title: 'Entrevista',
    start: '2024-04-05T14:00:00',
    end: '2024-04-05T15:30:00'
  },
]

export function AgendaAlcalde() {
  return (
    <>
      <Box sx={{ marginTop: 15 }}>
        <Box sx={{
          backgroundColor: '#12B1FA',
          width: '50%',
          borderTopRightRadius: 10,
          borderBottomRightRadius: 10,
          marginBottom: 3
        }}>
          <h1 style={{ color: 'white', paddingLeft: 10 }}>
            <CalendarMonth />
            Calendario
          </h1>
        </Box>
      </Box>
      <h2>Agenda Pública de la Alcade</h2>
      <Box
        sx={{
          marginTop: 10,
          marginX: { xs: 3, md: 10 }
        }}
      >
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView='dayGridMonth'
          dayMaxEvents= {true}
          weekends={false}
          events={events}
          eventContent={renderEventContent}
          locales={[esLocale]}
          
        />
      </Box>
    </>
  )
}

// a custom render function
function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  )
}