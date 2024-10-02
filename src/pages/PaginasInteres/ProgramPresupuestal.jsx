import React from 'react'
import { Box, Typography } from '@mui/material'
const ProgramPresupuestal = () => {
    return (
        <>
            <Box sx={{
                backgroundColor: '#12B1FA',
                width: { xs: '80%', sm: '50%' },
                borderTopRightRadius: 10,
                borderBottomRightRadius: 10,
                // marginBottom: 3,
                marginTop: 12
            }}>
                <h1 style={{ color: 'white', paddingLeft: 10 }}>
                    PROGRAMACIÓN PRESUPUESTAL
                </h1>
            </Box>
            <iframe
                src="https://profound-squirrel-685058.netlify.app/proyectos-inversion"
                title="Página Embebida"
                width="100%"
                height="800px"
                frameBorder="0"
            />
        </>
    )
}

export default ProgramPresupuestal