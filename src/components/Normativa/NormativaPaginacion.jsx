import React from 'react'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const NormativaPaginacion = ({
    totalPages, currentPage, handlePageChange,setCurrentPage
}) => {

    // const handlePageChange = (event, value) => {        
    //     setCurrentPage(value)      
    // };
    
    return (
        <Stack direction="row" spacing={2} alignItems="center" justifyContent="center">
            
            <Pagination
                siblingCount={0}
                count={totalPages}
                page={currentPage}
                onChange={handlePageChange}
                color="primary"
                showFirstButton
                showLastButton
            />

        </Stack>
    )
}

export default NormativaPaginacion