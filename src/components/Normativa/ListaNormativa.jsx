import { FileDownload, PictureAsPdfOutlined } from '@mui/icons-material'
import { Badge, Box, Button, Chip, Container, Typography } from '@mui/material'
import React from 'react'

const ListaNormativa = ({
    normativa
}) => {
    return (
        <Box
            padding={2}
            sx={{
                border: 1,
                borderColor: 'grey.300',
                boxShadow: 3,
            }}
        >
            <Chip
                label={normativa?.attributes?.fecha}
                color="primary"
                sx={{
                    marginRight: 1,
                    backgroundColor: '#12B3F3'
                }}
            >
            </Chip>
            <Chip
                label={normativa?.attributes?.Tipodedocumento?.nombre}
                color="primary"
                sx={{
                    marginRight: 1,
                    backgroundColor: '#12B3F3'
                }}
            >
            </Chip>
            <Typography
                sx={{
                    fontWeight: 'bold',
                    // fontStyle: 'italic'
                }}
            >
                {normativa?.attributes?.nombre}
            </Typography>
            <Typography
                sx={{
                    // fontWeight: 'bold',
                    fontStyle: 'italic'
                }}
            >
                {normativa?.attributes?.descripcion}
            </Typography>
            <Button
                onClick={() => window.open(normativa?.attributes?.archivo)}
                sx={{
                    color: '#12B3F3'
                }}
            >
                <FileDownload />
                Descargar
            </Button>
        </Box>
    )
}

export default ListaNormativa