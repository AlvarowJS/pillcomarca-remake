import React from 'react'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
const DirectorioPagination = ({
    totalPages, currentPage, onChange
}) => {
    const handlePageChange = (event, value) => {
        onChange(value);
    };

    const handlePrevClick = () => {
        onChange(currentPage - 1);
    };

    const handleNextClick = () => {
        onChange(currentPage + 1);
    };
    return (
        <Stack direction="row" spacing={2} alignItems="center" justifyContent="center">
            <Pagination
                siblingCount={0}
                count={totalPages}
                defaultPage={currentPage}
                onChange={handlePageChange}
                color="primary"
                showFirstButton
                showLastButton
            />
        </Stack>
    )
}

export default DirectorioPagination