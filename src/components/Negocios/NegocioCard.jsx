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
    <Grid item xs={12} md={9}>
      <Box sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '2rem',
        width: { xs: '100%', sm: '336px' },
        justifyContent: 'flex-start'
      }}>
        <CardMedia
          onClick={() => verNegocio(negocio?.id)}
          component="img"
          height="150"
          image={`${URLIMAGENES}${negocio?.imagen}`} 
          alt={negocio?.nombrenegocio}
        />
        <CardContent>
          <Typography variant="h6" align="center" gutterBottom>
            {negocio?.nombrenegocio}
          </Typography>
          <Typography>Dirección: {negocio?.direccion}</Typography>
          <Typography>Lugar: {negocio?.lugar}</Typography>
          <Typography>Razón Social: {negocio?.razonsocial}</Typography>
          <Typography>Red Social: {negocio?.redsocial}</Typography>
          <Typography>Subcategoría ID: {negocio?.subcategoria.rubro}</Typography>
        </CardContent>
      </Box>

    </Grid>
  )
}

export default NegocioCard;


