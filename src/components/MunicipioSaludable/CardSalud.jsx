import { IconButton, ImageListItem, ImageListItemBar } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const CardSalud = ({ item }) => {
    const navigate = useNavigate()

    const handleRedirect = () => {
        navigate(`/municipio-saludable${item.link}`, { state: { detalles: item } })
    }

    return (
        <ImageListItem 
            key={item.img}
            onClick={handleRedirect}
            sx={{ cursor: 'pointer', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' } }} // Animación y cursor
        >
            <img
                srcSet={`${item.img}`}
                src={`${item.img}`}
                alt={item.title}
                style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '8px' }} // Ajustar imagen y añadir border-radius
                loading="lazy"
            />
            <ImageListItemBar
                title={item.title}
                subtitle={item.author}
                actionIcon={
                    <IconButton
                        sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                        aria-label={`info about ${item.title}`}
                    >
                        {/* Aquí puedes añadir un ícono si es necesario */}
                        {/* <InfoIcon /> */}
                    </IconButton>
                }
                sx={{
                    background: 'rgba(0, 0, 0, 0.7)', // Fondo semi-transparente para el texto
                    borderBottomLeftRadius: '8px', // Mantener el border-radius consistente
                    borderBottomRightRadius: '8px'
                }}
            />
        </ImageListItem>
    )
}

export default CardSalud
