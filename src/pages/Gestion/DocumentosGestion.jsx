import axios from 'axios'
import React, { useEffect, useState } from 'react'
import bdMuni from '../../api/bdMuni'
import CardGestion from '../../components/Gestion/CardGestion'
import { Box, Grid } from '@mui/material'
import { Folder } from '@mui/icons-material'

const DocumentosGestion = () => {
    const [documentos, setDocumentos] = useState()

    useEffect(() => {
        bdMuni.get('/v1/gestion')
            .then(res => setDocumentos(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <>
            <Box
                sx={{ marginTop: 12 }}
            >
                <Box sx={{
                    backgroundColor: '#12B1FA',                    
                    width: {sn: '50%', xs: '80%'},
                    borderTopRightRadius: 10,
                    borderBottomRightRadius: 10,
                    marginBottom: 3
                }}>
                    <h1 style={{ color: 'white', paddingLeft: 10 }}>
                        <Folder />
                        Documentos de Gestión
                    </h1>
                </Box>
                <Grid container spacing={3} padding={2} justifyContent='center'>
                    {
                        documentos?.map(documento => (
                            <CardGestion
                                key={documento.id}
                                documento={documento}
                            />
                        ))
                    }

                </Grid>

            </Box>
        </>
    )
}

export default DocumentosGestion