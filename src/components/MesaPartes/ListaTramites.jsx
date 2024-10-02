import { Box, Button, Typography } from '@mui/material'
import React from 'react'


const ListaTramites = ({ tramite}) => {
    // tramitesData
    const mesaPartes = () => {
        window.open('https://facilita.gob.pe/t/5689', '_blank');
    }
    return (
        <Box
            padding={2}
            sx={{
                border: 1,
                borderColor: 'grey.300',
                boxShadow: 3,
            }}
        >
            <Typography
                sx={{
                    fontWeight: 'bold',
                    color: '#0CA75C'
                    // fontStyle: 'italic'
                }}
            >
                TRÁMITE:
            </Typography>
            <Typography
                sx={{
                    fontWeight: 'bold',
                    // fontStyle: 'italic'
                }}
            >
                {tramite?.procedimiento}
            </Typography>
            <Typography
                sx={{
                    fontWeight: 'bold',
                    color: '#0CA75C'
                    // fontStyle: 'italic'
                }}
            >
                REQUISITOS:
            </Typography>
            <Typography
                sx={{
                    // fontWeight: 'bold',
                    fontStyle: 'italic'
                }}
            >
                {tramite?.requisitos.split('\n').map((line, index) => (
                    <div key={index}>
                        <Typography>{line}</Typography>
                    </div>
                ))}
            </Typography>
            <Button
            onClick={mesaPartes}
            sx={{backgroundColor: '#0CA75C', color: 'white'}}>
                Solicitar
            </Button>
        </Box>
    )
}

export default ListaTramites