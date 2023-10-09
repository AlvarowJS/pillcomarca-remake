import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import bdVisitas from '../../api/bdVisitas'
import { Box, Button, Typography } from '@mui/material'
import Papa from 'papaparse';

const TablaVisitas = () => {
    const [jsonData, setJsonData] = useState([]);

    useEffect(() => {
        // Ruta al archivo CSV en la carpeta 'public'
        const csvFilePath = '/excelvisitas.csv';

        Papa.parse(csvFilePath, {
            download: true,
            header: true, // Indica si la primera fila contiene encabezados
            complete: (result) => {
                console.log(result)
                const renamedData = result.data.map((row) => ({
                    nombres: row['Nombre y apellidos'],
                    fecha: row["Fecha "],
                    dni: row["dni "],
                    tipo: row["persona natural o juridica"],
                    asunto: row["Asunto"],
                    oficina: row["Oficina"],
                    ingreso: row["Hora de ingreso"],
                    salida: row["Hora de salida"],
                }));
                const reversedData = [...renamedData].reverse();

                setJsonData(reversedData);
                console.log(renamedData)
                // setJsonData(result.data);
            },
            error: (error) => {
                console.error('Error al leer el archivo CSV:', error.message);
            },
        });
    }, []);


    const columns = [
        {
            minWidth: '100px',
            sortable: true,
            name: 'Fechas',
            selector: 'fecha',
            sortFunction: (a, b) => {
                // Ordena las fechas de más reciente a más antiguo
                const dateA = new Date(a);
                const dateB = new Date(b);
                return dateB - dateA;
            },
        },
        {
            minWidth: '450px',
            sortable: false,
            name: 'Nombre y Apellidos',
            selector: row => row.nombres,

        },
        {
            minWidth: '170px',
            sortable: false,
            name: 'DNI',
            selector: row => row.dni,

        },
        {
            minWidth: '150px',
            sortable: false,
            name: 'Persona Natural/Juridica',
            selector: row => row.tipo,

        },
        {
            minWidth: '300px',
            sortable: false,
            name: 'Asunto',
            selector: row => row.asunto,
        },
        {
            minWidth: '300px',
            sortable: false,
            name: 'Oficina',
            selector: row => row.oficina,
        },
        {
            minWidth: '100px',
            sortable: false,
            name: 'Hora de Ingreso',
            selector: row => row.ingreso,
        },
        {
            minWidth: '100px',
            sortable: false,
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
                data={jsonData}
            />
        </Box>
    )
}

export default TablaVisitas