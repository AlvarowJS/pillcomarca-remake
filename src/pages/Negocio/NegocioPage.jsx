import React, { useRef, useEffect, useState } from 'react';
import QRCode from 'qrcode';
import { Link, useLocation, useParams } from 'react-router-dom';
import bdNegocio from '../../api/bdNegocio';
import { Box, Button, Grid, Typography, Paper } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
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
                Red social del negocio
              </Typography>
            </Box>
            <Grid item xs={12} lg={16} sx={{ paddingLeft: { xs: '1px', md: '21px' } }}>
              <Box sx={{
                width: '100%', overflowX: 'auto', marginTop: '30px',
              }}>
                <div dangerouslySetInnerHTML={{ __html: data?.redsocial }} />

              </Box>
            </Grid>
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
