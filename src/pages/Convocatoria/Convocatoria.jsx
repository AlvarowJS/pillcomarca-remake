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
                    width: '50%',
                    borderTopRightRadius: 10,
                    borderBottomRightRadius: 10,
                    marginBottom: 3
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