import { Person } from '@mui/icons-material'
import { Typography, Box } from '@mui/material'
import React from 'react'
import AccesoInfo from '../../components/AccesoInfo/AccesoInfo'

const AccesoInfoPage = () => {
    return (
        <>
            <Box sx={{ marginTop: 12 }}>
                <Box sx={{
                    backgroundColor: '#12B1FA',
                    width: '80%',
                    borderTopRightRadius: 10,
                    borderBottomRightRadius: 10,
                    marginBottom: 3,
                    '@media screen and (min-width: 768px)': { // Media query para dispositivos grandes (ajusta el valor según sea necesario)
                        width: '30%',
                    },
                }}>
                    <h1 style={{ color: 'white', paddingLeft: 10 }}>
                        <Person />
                        Acceso a la Información
                    </h1>
                </Box>
                <AccesoInfo />
            </Box>
        </>
    )
}

export default AccesoInfoPage