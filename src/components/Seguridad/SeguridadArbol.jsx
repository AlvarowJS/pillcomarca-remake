import { ArrowBack, ArrowDownward, ArrowDownwardSharp, ArrowDropDown, ExpandMore } from '@mui/icons-material';
import { Accordion, AccordionSummary, AccordionDetails, Typography, useMediaQuery } from '@mui/material';
import React, { useState } from 'react'
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const SeguridadArbol = ({ seguridads, setSeleccion }) => {
    const [expandedSeguridad, setExpandedSeguridad] = useState({});
    const [expandedColeccion, setExpandedColeccion] = useState({});


    const pantalla = useMediaQuery((theme) => theme.breakpoints.down('lg'));

    console.log(pantalla)
    const handleAccordionChange = (categoria) => {
        setExpandedSeguridad((prevExpandedSeguridad) => ({
            ...prevExpandedSeguridad,
            [categoria]: !prevExpandedSeguridad[categoria],
        }));
    };

    const handleColeccionChange = (coleccionId) => {
        setExpandedColeccion((prevExpandedColeccion) => ({
            ...prevExpandedColeccion,
            [coleccionId]: !prevExpandedColeccion[coleccionId],
        }));
    };

    const abrirDoc = (archivo) => {
        if(pantalla){
            window.open(archivo, '_blank');
        }
        setSeleccion(archivo)
    }

    return (
        <>
            <div>
                {seguridads?.map((seguridad, index) => (
                    <Accordion
                        key={index}
                        expanded={expandedSeguridad[seguridad.categoria]}
                        onChange={() => handleAccordionChange(seguridad.categoria)}
                    >
                        <AccordionSummary expandIcon={<ExpandMore />}>
                            <Typography>{seguridad.categoria}</Typography>
                        </AccordionSummary>
                        <AccordionDetails xf>
                            {seguridad?.seguridad_coleccions?.map((coleccion, subIndex) => (
                                <div key={subIndex}>
                                    <Typography
                                        onClick={() => handleColeccionChange(coleccion.id)}
                                        sx={{ cursor: 'pointer', marginLeft: 4 }}
                                    >

                                        {coleccion.nombre_coleccion}

                                        <ArrowDropDown />
                                    </Typography>
                                    {expandedColeccion[coleccion.id] && (
                                        coleccion.seguridad_archivos?.map((archivo, sub) => (
                                            <Typography marginLeft={8} marginY={2} sx={{ cursor: 'pointer' }} key={sub}
                                            onClick={() => abrirDoc(archivo.documento)}
                                            >
                                                {archivo.nombre_archivo}
                                            </Typography>
                                        ))
                                    )}
                                </div>
                            ))}
                        </AccordionDetails>
                    </Accordion>
                ))}
            </div>
            {/* {
                bdSeguridad?.map(seguridad => (
                    <>
                        <Typography>
                            {seguridad.categoria}
                        </Typography>

                        {
                            seguridad.coleccion?.map(coleccion => (
                                <>
                                    {coleccion.nombre}
                                </>
                            )
                            )
                        }                                        

                    </>
                )
                )
            } */}
        </>
    )
}

export default SeguridadArbol