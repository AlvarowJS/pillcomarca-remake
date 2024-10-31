import { Grid, Card, CardContent, Typography, CardMedia, Box } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const URL = "v1/negocios";
const URLIMAGENES = "http://127.0.0.1:8000/storage/negocio/"
const NegocioCard = ({ negocio }) => {

  const navigate = useNavigate()

  const verNegocio = (id) => {
    navigate(`/negocios/${id}`)
  }

  return (
    <Card variant="outlined" sx={{ width: 300, margin: 2 }}>
      {/* Mostrar la imagen en la parte superior de la tarjeta */}
      <CardMedia
        onClick={() => verNegocio(negocio?.id)}
        component="img"
        height="150"
        image={`${URLIMAGENES}${negocio?.imagen}`} // Aquí debe ir la URL de la imagen
        alt={negocio?.nombrenegocio}
      />
      <CardContent>
        {/* Nombre del negocio centrado */}
        <Typography variant="h6" align="center" gutterBottom>
          {negocio?.nombrenegocio}
        </Typography>
        <Typography>Dirección: {negocio?.direccion}</Typography>
        <Typography>Lugar: {negocio?.lugar}</Typography>
        <Typography>Razón Social: {negocio?.razonsocial}</Typography>
        <Typography>Red Social: {negocio?.redsocial}</Typography>
        <Typography>Subcategoría ID: {negocio?.subcategoria.rubro}</Typography>
      </CardContent>
    </Card>
  )
}

export default NegocioCard;


