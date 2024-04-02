import { Typography, Box, Button } from '@mui/material'
import React from 'react'
import pdf from './../../assets/SOLICITUD DE ACCESO A LA INFORMACION PUBLICA MDPM.pdf'
import { Download } from '@mui/icons-material'
const AccesoInfo = () => {

    const abrirDoc = () => {
        window.open(pdf, '_blank');
    }
    return (
        <>
            <Box
                sx={{
                    paddingX: { xs: 3, md: 10 }
                }}
            >
                <Box sx={{ display: { xs: 'none', sm: 'none', md: 'none', lg: 'block', xl: 'block' } }}></Box>
                <Typography mb={4}>
                    Puedes acceder a la información de las instituciones del Estado según el principio de transparencia y el Texto Único Ordenado de la
                    <a href="https://www.gob.pe/institucion/congreso-de-la-republica/normas-legales/118374-27806"
                        style={{ color: '#12B0F0', textDecoration: 'underline' }} target="_blank"> Ley N° 27806, Ley de Transparencia y Acceso a la Información pública. </a>
                    Las entidades públicas tienen hasta 10 días hábiles para responderte. Si no pudieran atenderte en ese tiempo por casos excepcionales (como información difícil de conseguir), tienen 2 días hábiles contados desde que presentaste tu solicitud para decirte la fecha en que te puedes acercar a recoger la información y darte los motivos por los que no pueden atenderte dentro del plazo.
                    <br />
                    Recuerde enviar el formato de su solicitud a mesa de partes de forma presencial o digital.
                </Typography>
                <Button
                    style={{ color: 'white', backgroundColor: '#12B1FA', marginBottom: 15, marginTop:5 }}
                    onClick={abrirDoc}
                >
                    <Download />
                    Descargar
                </Button>
                <iframe
                    src={pdf}
                    width="100%"
                    height="500px"
                />
            </Box>
        </>
    )
}

export default AccesoInfo