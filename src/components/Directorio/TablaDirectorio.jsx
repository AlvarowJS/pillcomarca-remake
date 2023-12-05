import React from 'react'
import DataTable from 'react-data-table-component'
import { Box, Button, Typography } from '@mui/material'
import {bdDirectorio} from '../../api/bdDirectorio.js'


const TablaDirectorio = () => {
    /*
    const directorioData = [
        { id: 1, nombres: 'Yurik Rosales Bravo', numero: '979505074', correo: 'gpyp@munipillcomarca.gob.pe', cargo: 'Gerente', area: 'Planeamiento y Presupuestos' },
        { id: 2, nombres: 'Edwing R. Marrtinez Vasquezo', numero: '969400968', correo: 'gpyp@munipillcomarca.gob.pe', cargo: 'Gerente', area: 'Administración' },
        { id: 3, nombres: 'Santiago Daniel Heres Condezo', numero: '927371996', correo: 'gpyp@munipillcomarca.gob.pe', cargo: 'Sub Gerente', area: 'Logistica' },
        { id: 4, nombres: 'Kelly Milady Alcedo Mejia', numero: '988684400', correo: 'mesapartes@munipillcomarca.gob.pe', cargo: '', area: 'Mesa de Partes' },
        { id: 5, nombres: 'Hebert Javier Remuzgo Robles', numero: '958545849', correo: 'recursoshumanos@munipillcomarca.gob.pe', cargo: 'Sub Gerente', area: 'Recursos Humanos' },        

    ]
    */
   // marko estubo aqui
    const directorioData = bdDirectorio;
    // 
    const columns = [
        {
            minWidth: '300px',
            sortable: true,
            name: 'Nombres',
            selector: row => row.nombres,
            // cell: row => {
            //     return (
            //         <div>
            //             <Typography

            //             >  {row?.nombres}
            //             </Typography>
            //         </div>
            //     )
            // }
        },
        {
            minWidth: '150px',
            sortable: true,
            name: 'Celular',
            selector: row => row.numero,
            // cell: row => {
            //     return (
            //         <Box >
            //             <Typography

            //             >  {row?.numero}
            //             </Typography>
            //         </Box>
            //     )
            // }
        },
        {
            minWidth: '370px',
            sortable: true,
            name: 'Correo Institucional',
            selector: row => row.correo,            
            // cell: row => {
            //     return (
            //         <Box>
            //             <Typography

            //             >  {row?.correo}
            //             </Typography>
            //         </Box>
            //     )
            // }
        },
        {
            minWidth: '150px',
            sortable: true,
            name: 'Cargo',
            selector: row => row.cargo,     
            // cell: row => {
            //     return (
            //         <Box>
            //             <Typography

            //             >  {row?.cargo}
            //             </Typography>
            //         </Box>
            //     )
            // }
        },
        {
            minWidth: '300px',
            sortable: true,
            name: 'Área',
            selector: row => row.area,     
            // cell: row => {
            //     return (
            //         <Box>
            //             <Typography

            //             >  {row?.area}
            //             </Typography>
            //         </Box>
            //     )
            // }
        },
    ]
    return (
        <Box sx={{ marginTop: 2, overflowX: 'auto' }}>

            <DataTable
                noHeader
                pagination
                className='react-dataTable'
                columns={columns}
                data={directorioData}
            />
        </Box>
    )
}

export default TablaDirectorio