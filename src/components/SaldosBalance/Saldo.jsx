import { Button, Chip, Box, Typography } from '@mui/material'
import { FileDownload, PictureAsPdfOutlined, RemoveRedEyeOutlined } from '@mui/icons-material'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Saldo = ({
    saldo
}) => {
    const navigate = useNavigate()
    const verNormativaId = (id) => {
        navigate(`/normativa/${id}`)
    }
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
                label={saldo?.attributes?.fecha}
                color="primary"
                sx={{
                    marginRight: 1,
                    backgroundColor: '#12B3F3'
                }}
            >
            </Chip>
            <Chip
                label={saldo?.attributes?.Tipodedocumento?.nombre}
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
                {saldo?.attributes?.nombre}
            </Typography>
            <Typography
                sx={{
                    // fontWeight: 'bold',
                    fontStyle: 'italic'
                }}
            >
                {saldo?.attributes?.descripcion}
            </Typography>
            <Button
                onClick={() => verNormativaId(saldo?.attributes?.id)}
                sx={{
                    color: '#12B3F3'
                }}
            >
                <RemoveRedEyeOutlined />
                Ver
            </Button>
            <Button
                onClick={() => window.open(saldo?.attributes?.archivo)}
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

export default Saldo