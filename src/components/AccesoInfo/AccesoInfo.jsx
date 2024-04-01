import { Typography } from '@mui/material'
import React from 'react'

const AccesoInfo = () => {
    return (
        <Typography>
            Puedes acceder a la información de las instituciones del Estado según el principio de transparencia y el Texto Único Ordenado de la
            <a href="https://www.gob.pe/institucion/congreso-de-la-republica/normas-legales/118374-27806"
                style={{
                    color: 'blue',
                    
                }}
            >
                Ley N° 27806, Ley de Transparencia y Acceso a la Información pública.
            </a>
            Las entidades públicas tienen hasta 10 días hábiles para responderte. Si no pudieran atenderte en ese tiempo por casos excepcionales (como información difícil de conseguir), tienen 2 días hábiles contados desde que presentaste tu solicitud para decirte la fecha en que te puedes acercar a recoger la información y darte los motivos por los que no pueden atenderte dentro del plazo.
        </Typography>
    )
}

export default AccesoInfo