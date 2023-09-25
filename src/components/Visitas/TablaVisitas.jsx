import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import bdVisitas from '../../api/bdVisitas'
import { Box, Button, Typography } from '@mui/material'
const TablaVisitas = () => {
    const columns = [
        {
            minWidth: '100px',
            sortable: true,
            name: 'Fechas',
            selector: row => row.fecha,
       
        },
        {
            minWidth: '450px',
            sortable: true,
            name: 'Nombre y Apellidos',
            selector: row => row.nombre,
    
        },
        {
            minWidth: '170px',
            sortable: true,
            name: 'DNI',
            selector: row => row.dni,            
     
        },
        {
            minWidth: '150px',
            sortable: true,
            name: 'Persona Natural/Juridica',
            selector: row => row.tipo,     

        },
        {
            minWidth: '300px',
            sortable: true,
            name: 'Asunto',
            selector: row => row.asunto,     
        },
        {
            minWidth: '300px',
            sortable: true,
            name: 'Oficina',
            selector: row => row.oficina,     
        },
        {
            minWidth: '100px',
            sortable: true,
            name: 'Hora de Ingreso',
            selector: row => row.ingreso,     
        },
        {
            minWidth: '100px',
            sortable: true,
            name: 'Hora de Salida',
            selector: row => row.salida,     
        },
    ]
    return (
        <Box sx={{ marginTop: 2, overflowX: 'auto' }}>

            <DataTable
                noHeader
                pagination
                className='react-dataTable'
                columns={columns}
                data={bdVisitas}
            />
        </Box>
    )
}

export default TablaVisitas