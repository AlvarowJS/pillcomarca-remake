import { Handshake } from '@mui/icons-material'
import { Box } from '@mui/material'
import TableTramites from '../../components/MesaPartes/TableTramites'

const MesaPartes = () => {
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
            <TableTramites />
        </>
    )
}

export default MesaPartes