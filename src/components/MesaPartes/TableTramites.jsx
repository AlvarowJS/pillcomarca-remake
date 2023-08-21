import React from 'react'
import DataTable from 'react-data-table-component'
import { Box, Button, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const TableTramites = () => {
    const navigate = useNavigate()

    const mesaPartes = () => {
        window.open('https://facilita.gob.pe/t/5689', '_blank');
    }
    const fut = () => {
        navigate('/fut');
    }
    const tramitesData = [
        {
            id: 1,
            procedimiento: 'Copia certificada de documentos existentes en expediente y en los archivos de la municipalidad por página',
            base: 'Ley 27444 Art. 160, * Ley 27444 Art. 160, inciso 1, Art. 55, inciso 3 (11/04/01)',
            plazo: '3 días',
            requisitos: '1. Solicitud según formato, especificando lo requerido. \n2. Copia simple de D.N.I. \n3. Pago por derecho de Trámite'
        },
        {
            id: 2,
            procedimiento: 'Autenticación de documentos por fedatario',
            base: 'Ley 27444, Ley Procedimiento Administrativo General Art. 127º Inc. 1 y 2',
            plazo: '3 días',
            requisitos: '1. Presentar en ventanilla sus documentos en copia, adjuntando los originales. \n*Nota: los documentos tienen que ser originados por la entidad.'
        },

        {
            id: 3,
            procedimiento: 'Autorización Roturas de Pistas y veredas para Instalación de Agua y desagüe - Trabajo a efectuarse por empresa de luz, agua y teléf.',
            base: 'Ley 27972, Ley Orgánica de Municipalidades, Ley 27444, Procedimiento Administrativo General. - publicada el 26/05/2003.',
            plazo: '5 días',
            requisitos: '1.- Solicitud Dirigido al alcalde (FUT) \n2. Copia del Título de propiedad o Contrato de Alquiler del propietario (inquilinos) \n3.- Tener Autoevalúo al día \n4. Pago por Autorización: \nEn Pavimento Rígido (M2) \nEn Pavimento Flexible (M2) \nEn Tierra (M2) '
        },

        {
            id: 4,
            procedimiento: 'Devolución de documentos en trámite o en archivo',
            base: 'Art. 125 de la ley 27444',
            plazo: '5 días',
            requisitos: '1. Solicitud según formato, especificando lo requerido.\n2. Copia certificada por fedatario municipal de:\na. DNI del Recurrente, de ser persona natural\nb. De ser persona jurídica, copia del documento que acredite como tal y de la vigencia de poder.\n3. Derecho de Trámite Administrativo'
        },

        {
            id: 5,
            procedimiento: 'Inscripción ordinaria de nacimiento',
            base: 'D.S. Nro. 015-98-PCM / Ley 27444 / Ley 29462',
            plazo: '1 día',
            requisitos: '1. Presencia de los padres con D.N.I, orgiginal, o quienes ejercen la tenencia del menor, plenamente identificados.\n2. Certificado de nacimiento expedida por parte del funcionario autorizado del Ministerio de Salud u otra entidad pública o privada.'
        },

        {
            id: 6,
            procedimiento: 'Inscripción de defunción',
            base: 'Ley 27444 / Ley 26298',
            plazo: '1 día',
            requisitos: '1. Copia del DNI, del declarante \n2. Certificado de defunción emitido por  el profesional competente \n3. DNI del occiso'
        },

        {
            id: 7,
            procedimiento: 'Matrimonio',
            base: 'Ley 27972 y otros, Art. 234, 239, 250, 259, 260, 261, 265 del Código Civil . ',
            plazo: '12 días',
            requisitos: 'x Formato Unico de Tramite - FUT \n1. Partida de Nacimiento original y actualizado \n2. Certificado Médico Pre-Nupcial (expedido por un Centro de Salud, Hospital Estatal) y constancia de consejeria preventiva de VIH y ETS \n3. Declaracion Jurada de Certificado domiciliario \n4. Formato matrimonial. \n5. Declaración Jurada de Estado Civil en que se encuentran los cónyuges, legalizado notarialmente.\n6. Copia legalizada de los DNI de los contrayentes.'
        },

        {
            id: 8,
            procedimiento: 'Certificado de no inscripción de matrimonio',
            base: 'Ninguna',
            plazo: '2 días',
            requisitos: '1.	Formato Único de Trámite (FUT). \n2.	Copia simple de su DNI.\n3.	DD.JJ. De soltería.\n4.	Derecho de pago.'
        },

        {
            id: 9,
            procedimiento: 'Certificado Domiciliario',
            base: 'Ley 27444 / Base legal 28862',
            plazo: '3 días',
            requisitos: '1. Formato Único de Trámite (FUT).\n2. Copia de Recibo: luz, agua o Dec. Jurada de no contar con Servicios Básicos.\n3. Copia de DNI.\n4. Derecho de pago.\n5. Croquis simple de la Ubicación del Domicilio.'
        },

        {
            id: 10,
            procedimiento: 'Bases administrativas',
            base: 'D.S. 184-2008-EF, aprueba el reglamento del D.L: 1017, Art 36 del reglamento D.L: 1017',
            plazo: '2 días',
            requisitos: '1. Solicitud dirigido al presidente del comité especial.\nCosto de reproducción por hoja'
        },

        {
            id: 11,
            procedimiento: 'Copia certificada de autovalúo y otros documentos de archivo',
            base: 'D.S. Nro. 133-2013',
            plazo: '1 día',
            requisitos: 'Derecho de Pago por cada Hoja \nExhibición del DNI del propietario y presentación de copia simple del mismo.\nCarta poder simple del representante'
        },

        {
            id: 12,
            procedimiento: 'Solicitud de prescripción de deuda tributaria',
            base: 'Ley 27444, - D.S. Nº 133-2013-EF-TUO CódigTrib. y Modificatorias; Art. 43º',
            plazo: '15 días',
            requisitos: 'Solicitud simple firmada por el solicitante o representante legal \nCopia de DNI del solicitante o documento de representación'
        }
    ]

    const columns = [
        {
            minWidth: '200px',
            sortable: true,
            name: 'Nombre de Procedimiento',
            // selector: row => row.procedimiento,
            cell: row => {
                return (
                    <div>
                        <Typography
                            sx={{
                                fontSize: 15
                            }}>
                            {row?.procedimiento}
                        </Typography>
                    </div>
                )
            }
        },
        {
            minWidth: '150px',
            sortable: true,
            name: 'Base Legal',
            // selector: row => row.base,
            cell: row => {
                return (
                    <div>
                        <Typography
                            sx={{
                                fontSize: 15
                            }}
                        >  {row?.base}
                        </Typography>
                    </div>
                )
            }
        },
        {
            minWidth: '100px',
            sortable: true,
            name: 'Plazo',
            selector: row => row.plazo,

        },
        {
            minWidth: '450px',
            sortable: true,
            name: 'Requisitos',
            // selector: row => row.requisitos,
            cell: row => {
                return (
                    <Box sx={{
                        marginY: 2
                    }}>

                        <pre>
                            <Typography
                                sx={{
                                    fontSize: 15
                                }}
                            >
                                {row?.requisitos}
                            </Typography>

                        </pre>
                    </Box>
                )
            }
        },

    ]
    return (
        <Box sx={{ marginTop: 2, overflowX: 'auto', paddingX: 5 }}>
            <Typography>
                En la siguiente página podrá ver todos los procedimientos que desee realizar. Una vez identificado el procedimiento que quiera llevar a cabo, debe tener todos los documentos que requiere, los requisitos, en un solo archivo para cargarlo en la
                <a onClick={mesaPartes} style={{
                    color: 'skyblue',
                    cursor: 'pointer'
                }}> mesa de partes virtual.</a>

            </Typography>
            <Typography>
                Recuerde que las solicitudes se hacen con el
                <a onClick={fut} style={{
                    color: 'skyblue',
                    cursor: 'pointer'
                }}> FUT </a> Para luego escanearlo y subirlo con lo que se requiere según su trámite.
            </Typography>
            <Button sx={{
                backgroundColor: '#12B1FA',
                color: 'white'
            }}
                onClick={() => mesaPartes()}
            >
                Mesa de Partes
            </Button>
            <DataTable
                noHeader
                pagination
                className='react-dataTable'
                columns={columns}
                data={tramitesData}
            />
        </Box>
    )
}

export default TableTramites