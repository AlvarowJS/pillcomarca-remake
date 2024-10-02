import { Handshake } from '@mui/icons-material'
import { Box, Button, Container, InputLabel, TextField, Typography } from '@mui/material'
import TableTramites from '../../components/MesaPartes/TableTramites'
import ListaTramites from '../../components/MesaPartes/ListaTramites'
import { useNavigate } from 'react-router-dom'
import tramitesData from '../../api/bdTramites'
import { useState } from 'react'
const MesaPartes = () => {
    const [buscar, setBuscar] = useState()
    const mesaPartes = () => {
        window.open('https://facilita.gob.pe/t/5689', '_blank');
    }
    const fut = () => {
        navigate('/fut');
    }
    const tramitesFiltrados = tramitesData.filter(tramite =>
        tramite.procedimiento.toLowerCase().includes(buscar?.toLowerCase())
    );

    return (
        <>
            <Box sx={{ marginTop: 12 }}>
                <Box sx={{
                    backgroundColor: '#12B1FA',
                    width: '50%',
                    borderTopRightRadius: 10,
                    borderBottomRightRadius: 10,
                    marginBottom: 3
                }}>
                    <h1 style={{ color: 'white', paddingLeft: 10 }}>
                        <Handshake />
                        Mesa de Partes
                    </h1>
                </Box>
            </Box>
            <Box sx={{ marginTop: 2, overflowX: 'auto', paddingX: 5 }}>
                <Typography>
                    En la siguiente página, podrá ver todos los procedimientos que desee realizar. Una vez identificado el procedimiento que desee llevar a cabo, debe contar con todos los documentos que se requieran, así como los requisitos, en un solo archivo para cargarlo en la
                    <a onClick={mesaPartes} style={{
                        color: 'skyblue',
                        cursor: 'pointer'
                    }}> mesa de partes virtual.</a>

                </Typography>
                <Typography>
                    Recuerde que las solicitudes se realizan a través del
                    <a onClick={fut} style={{
                        color: 'skyblue',
                        cursor: 'pointer'
                    }}> FUT </a> y posteriormente deben ser escaneadas y subidas junto con los documentos requeridos correspondientes a su trámite.
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center'}}>
                    <Button sx={{
                        backgroundColor: '#12B1FA',
                        color: 'white',
                        size: 20
                        
                    }}
                        onClick={() => mesaPartes()}
                    >
                        Mesa de Partes
                    </Button>
                </Box>
            </Box>
            <>
                <Container
                    sx={{
                        marginTop: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                        flex: 1
                    }}
                >
                    <InputLabel htmlFor="">Buscar Trámite</InputLabel>
                    <TextField
                        type="text"
                        id="formGroupExampleInput"
                        placeholder="Buscar por nombre"
                        fullWidth
                        variant="outlined"
                        onChange={(e) => setBuscar(e.target.value)}
                    />

                    {
                        tramitesFiltrados.length == 0 ?
                            tramitesData?.map(tramite => (
                                <ListaTramites
                                    key={tramite.id}
                                    tramite={tramite}
                                />
                            )) :
                            tramitesFiltrados?.map(tramite => (
                                <ListaTramites
                                    key={tramite.id}
                                    tramite={tramite}
                                />
                            ))
                    }
                </Container>
                {/* <TableTramites /> */}
            </>
        </>
    )
}

export default MesaPartes