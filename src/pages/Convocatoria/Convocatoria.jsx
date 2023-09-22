import React from 'react'
import TablaConvocatoria from '../../components/Convocatoria/TablaConvocatoria'
import { Box } from '@mui/material'
import { Work } from '@mui/icons-material'

const Convocatoria = () => {
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
                        <Work />
                        Convocatoria
                    </h1>
                </Box>
                <TablaConvocatoria />
            </Box>
        </>
    )
}

export default Convocatoria