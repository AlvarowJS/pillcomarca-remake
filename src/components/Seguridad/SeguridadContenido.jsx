import { Download } from '@mui/icons-material'
import { Box, Button } from '@mui/material'
import React from 'react'

const SeguridadContenido = ({ seleccion }) => {

    const abrirDoc = () => {
        window.open(seleccion, '_blank');
    }
    return (
        <>
            <Box
                sx={{
                    border: '1px solid gray',
                    width: '100%',
                    height: '100%',
                    borderRadius: 3,
                    paddingTop: 2,
                    paddingLeft: 2,
                    paddingRight: 2,
                    paddingBottom: 10,
                    boxShadow: '0 0 4px rgba(0, 0, 0, 0.1)', // Aquí establecemos la sombra y la transparencia
                    textAlign: 'center'
                }}
            >

                {
                    seleccion ? (
                        <iframe
                            src={seleccion}
                            width="100%"
                            height="100%"
                        />
                    ) : 'Aqui se cargara el archivo que escoja'
                }
                <Button
                    style={{ color: 'white', backgroundColor: '#12B1FA' }}
                    onClick={abrirDoc}
                >
                    <Download />
                    Descargar
                </Button>
            </Box>
        </>
    )
}

export default SeguridadContenido