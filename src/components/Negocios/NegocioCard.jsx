import { Grid, Card, CardContent, Typography, CardMedia, Box } from '@mui/material';
import React from 'react';

const URL = "v1/negocios";

const NegocioCard = ({ negocio }) => (
  <Card variant="outlined" sx={{ width: 300, margin: 2 }}>
    {/* Mostrar la imagen en la parte superior de la tarjeta */}
    <CardMedia
      component="img"
      height="150"
      image={negocio.imagen} // Aquí debe ir la URL de la imagen
      alt={negocio.nombrenegocio}
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
);

export default NegocioCard;


