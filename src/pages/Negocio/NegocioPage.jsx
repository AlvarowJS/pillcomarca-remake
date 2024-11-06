import React, { useRef, useEffect, useState } from 'react';
import QRCode from 'qrcode';
import { Link, useLocation, useParams } from 'react-router-dom';
import bdNegocio from '../../api/bdNegocio';
import { Box, Button, Grid, Typography, Paper } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ScanIcon from '@mui/icons-material/QrCodeScanner';

const URL = '/v1/buscar-negocio/';
const qrText = "http://localhost:5173";
const URLIMAGENES = "http://127.0.0.1:8000/storage/negocio/";

const NegocioPage = ({ negocio }) => {
  const id = useParams();
  const location = useLocation();
  const [data, setData] = useState();
  const canvasRef = useRef(null);
  const QR = `${qrText}${location.pathname}`;

  useEffect(() => {
    bdNegocio.get(`${URL}${id.id}`)
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    if (canvasRef.current) {
      QRCode.toCanvas(canvasRef.current, QR, { width: 200 }, (error) => {
        if (error) console.error(error);
      });
    }
  }, [QR]);

  // Función para detectar y mostrar el ícono de cada red social
  const getSocialMediaIcons = () => {
    if (!data?.redsocial) return null;

    const socialLinks = [
      { name: "Facebook", icon: FacebookIcon, color: '#3b5998', identifier: "facebook.com" },
      { name: "Twitter", icon: TwitterIcon, color: '#1DA1F2', identifier: "twitter.com" },
      { name: "Instagram", icon: InstagramIcon, color: '#E1306C', identifier: "instagram.com" },
      { name: "LinkedIn", icon: LinkedInIcon, color: '#0077B5', identifier: "linkedin.com" },
    ];

    return socialLinks.map(({ name, icon: Icon, color, identifier }, index) => (
      data.redsocial.includes(identifier) && (
        <Box key={index} sx={{ textAlign: 'center' }}>
          <a href={data.redsocial} target="_blank" rel="noopener noreferrer">
            <Icon fontSize="large" sx={{
              color: color,
              transition: 'transform 0.3s ease',
              cursor: 'pointer',
              '&:hover': { transform: 'scale(1.3)' }
            }} />
          </a>
          <Typography variant="caption" sx={{
            backgroundColor: '#f1f1f1',
            borderRadius: '5px',
            padding: '2px 5px',
            marginTop: '5px',
            display: 'block'
          }}>{name}</Typography>
        </Box>
      )
    ));
  };

  return (
    <>
      <Link to='/Negocios'>
        <Button sx={{ alignItems: 'center', justifyItems: 'center', marginTop: 12 }}>
          <ArrowBack />
          Volver
        </Button>
      </Link>
      <Box sx={{ marginTop: 1, textAlign: 'center' }}>
        <Box>
          <Typography variant="h2" sx={{ fontSize: '40px', marginBottom: '70px', color: '#333', fontWeight: 'bold' }}>
            {data?.nombrenegocio}
          </Typography>
        </Box>

        <Grid container spacing={2} sx={{ padding: '0.1rem' }}>
          <Grid item xs={12} md={5}>
            <Box sx={{ textAlign: 'left', maxWidth: '1000px', marginBottom: '20px' }}>
              {['Ubicación', 'Actividad Económica', 'Tipo de Negocio', 'Dirección'].map((label, index) => (
                <Typography key={index} sx={{
                  fontSize: { xs: '18px', md: '30px' },
                  lineHeight: '1.5',
                  color: '#555',
                  margin: '10px 0',
                  paddingLeft: { xs: '10px', md: '210px' }
                }}>
                  <strong>{label}:</strong> {data && [data.lugar, data.actividad_economica?.nombre, data.subcategoria?.rubro, data.direccion][index]}
                </Typography>
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <Box>
              <img
                width={500}
                height={290}
                src={`${URLIMAGENES}${data?.imagen}`}
                alt={data?.nombrenegocio}
                style={{
                  width: '100%',
                  maxWidth: '500px',
                  height: 'auto',
                  borderRadius: '6px',
                  boxShadow: '15px 15px 30px rgba(0, 0, 0, 0.5)',
                  marginBottom: '20px'
                }}
              />
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ padding: '0.1rem' }}>
          <Grid item xs={12} md={5}>
            <Box sx={{ marginTop: 5 }}>
              <Typography variant="h2" sx={{ fontSize: '22px', color: '#808080', fontWeight: '500' }}>
                Redes sociales
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '30px', gap: '20px', flexDirection: { xs: 'column', md: 'row' } }}>
              {getSocialMediaIcons()}
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <Box sx={{ marginTop: 5 }}>
              <Typography variant="h2" sx={{ fontSize: '22px', color: '#808080', fontWeight: '500', textAlign: 'center' }}>
                Escanea este QR
                <ScanIcon sx={{ fontSize: '26px', marginLeft: '8px', color: '#808080' }} />
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '30px', gap: '20px', flexDirection: { xs: 'column', md: 'row' } }}>
              <canvas ref={canvasRef} style={{ border: '2px solid #ccc', borderRadius: '5px', padding: '5px' }}></canvas>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default NegocioPage;
