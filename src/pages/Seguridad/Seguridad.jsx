import React from 'react'
import SeguridadTabla from '../../components/Seguridad/SeguridadTabla'
import { LocalPolice } from '@mui/icons-material'
import { Box } from '@mui/material'

const Seguridad = () => {
    return (
        <>
            <Box marginTop={15}>
                <Box sx={{
                    backgroundColor: '#12B1FA',
                    width: '50%',
                    borderTopRightRadius: 10,
                    borderBottomRightRadius: 10,
                    marginBottom: 3
                }}>
                    <h1 style={{ color: 'white', paddingLeft: 10 }}>
                        <LocalPolice />
                        Seguridad Ciudadana
                    </h1>
                </Box>
                

            </Box>
            <SeguridadTabla />
        </>
    )
}

export default Seguridad