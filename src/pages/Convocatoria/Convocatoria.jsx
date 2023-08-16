import React from 'react'
import TablaConvocatoria from '../../components/Convocatoria/TablaConvocatoria'
import { Box } from '@mui/material'

const Convocatoria = () => {
    return (
        <>
            <Box>
                <h2 style={{ fontSize: 40, marginTop: 100, color: 'black' }}>Convocatoria</h2>
                <h4>Lista de Convocatorias</h4>
                <TablaConvocatoria />
            </Box>
        </>
    )
}

export default Convocatoria