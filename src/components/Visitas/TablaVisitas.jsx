import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import bdVisitas from '../../api/bdVisitas'
import { Box, Button, Typography } from '@mui/material'
import Papa from 'papaparse';
import bdMuni from '../../api/bdMuni';

const TablaVisitas = ({
    // visitas, currentPage, setCurrentPage, totalPages, totalRows
}) => {

    // const handlePageChange = page => {
    //     setCurrentPage(page);
    // };

    // const paginationComponentOptions = {
    //     rowsPerPageText: 'Filas por página',
    //     rangeSeparatorText: 'de',
    //     selectAllRowsItem: true,
    //     selectAllRowsItemText: 'Todos',
    //     totalPages: totalPages,
    //     onPageChange: page => handlePageChange(page)
    // };

    const columns = [
        {
            minWidth: '100px',
            sortable: true,
            name: 'Fechas',
            selector: 'fecha',
        },
        {
            minWidth: '450px',
            sortable: false,
            name: 'Nombre y Apellidos',
            selector: row => row?.usuario_publico?.nombre + " " + row?.usuario_publico?.apellidos,

        },
        {
            minWidth: '170px',
            sortable: false,
            name: 'DNI',
            selector: row => row?.usuario_publico?.dni,

        },
        {
            minWidth: '150px',
            sortable: false,
            name: 'Persona Natural/Juridica',
            selector: row => row?.usuario_publico?.persona,

        },
        {
            minWidth: '300px',
            sortable: false,
            name: 'Asunto',
            selector: row => row?.asunto,
        },
        {
            minWidth: '300px',
            sortable: false,
            name: 'Oficina',
            selector: row => row?.depedencia?.nombre_dependencia,
        },
        {
            minWidth: '100px',
            sortable: false,
            name: 'Hora de Ingreso',
            selector: row => row?.hora_ingreso,
        },
        {
            minWidth: '100px',
            sortable: false,
            name: 'Hora de Salida',
            selector: row => row?.hora_salida,
        },
    ]

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [totalRows, setTotalRows] = useState(0);
    const [perPage, setPerPage] = useState(10);

    const fetchUsers = async page => {
        setLoading(true);

        const response = await bdMuni.get(`/v1/registro-visitas?page=${page}&per_page=${perPage}&delay=1`);

        setData(response.data.data);
        setTotalRows(response.data.total);
        setLoading(false);
    };

    const handlePageChange = page => {
        fetchUsers(page);
    };

    const handlePerRowsChange = async (newPerPage, page) => {
        setLoading(true);

        const response = await bdMuni.get(`/v1/registro-visitas?page=${page}&per_page=${newPerPage}&delay=1`);

        setData(response.data.data);
        setPerPage(newPerPage);
        setLoading(false);
    };

    useEffect(() => {
        fetchUsers(1); // fetch page 1 of users

    }, []);

    return (
        <Box sx={{ marginTop: 2, overflowX: 'auto' }}>

            <DataTable
 
                columns={columns}
                data={data}
                progressPending={loading}
                pagination
                paginationServer
                paginationTotalRows={totalRows}
                onChangeRowsPerPage={handlePerRowsChange}
                onChangePage={handlePageChange}
            />
        </Box>
    )
}

export default TablaVisitas