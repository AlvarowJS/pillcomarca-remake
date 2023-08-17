import { PictureAsPdf } from '@mui/icons-material'
import { Box, Button, Grid } from '@mui/material'
import React from 'react'

const CardGestion = ({ documento }) => {

    return (
        <Grid item xs={12} sm={12} md={4} lg={3} margin={2}
            sx={{
                border: '1px solid black', borderRadius: 5,
                paddingBottom: 2
                // paddingTop: 2
            }}
        >
            <Box
                sx={{
                    borderBottom: '1px solid black',
                    padding: 2
                }}
            >
                {documento.nombre}
            </Box>
            <Box
            >
                {
                    documento?.gestiondetalle?.map(lista => (
                        <Box key={lista?.id}>
                            <Button
                                sx={{
                                    border: '1px solid black',
                                    // padding: 2
                                }}
                                onClick={() => window.open(lista?.link)}>
                                <PictureAsPdf /> {lista?.nombre}
                            </Button>
                        </Box>
                    ))}
            </Box>
        </Grid>
    )
}

export default CardGestion