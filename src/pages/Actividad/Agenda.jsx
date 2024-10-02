import React from 'react'
import { Box } from '@mui/material'
import { CalendarMonth } from '@mui/icons-material';
const Agenda = () => {
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
            <Box sx={{ 
                marginX: { xs: 0, md: 10 }
             }}>
                <iframe
                    src="https://calendar.google.com/calendar/embed?src=municipalidaddepillcomarca2023%40gmail.com&ctz=America%2FLima"
                    width="100%"
                    height="800"
                    // frameborder="0"
                    // scrolling="no"
                    style={{ minHeight: 0 }}
                ></iframe>
            </Box>
        </>
    )
}

export default Agenda