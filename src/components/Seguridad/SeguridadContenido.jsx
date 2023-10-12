import { Box } from '@mui/material'
import React from 'react'

const SeguridadContenido = ({ seleccion }) => {
    return (
        <>
            <Box
                sx={{
                    border: '1px solid gray',
                    width: '100%',
                    height: '100%',
                    borderRadius: 3,
                    padding: 5,
                    boxShadow: '0 0 4px rgba(0, 0, 0, 0.1)', // Aquí establecemos la sombra y la transparencia
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

            </Box>
        </>
    )
}

export default SeguridadContenido