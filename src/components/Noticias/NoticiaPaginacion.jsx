import React from 'react'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const NoticiaPaginacion = ({
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
            {/* <IconButton
                color="primary"
                onClick={handlePrevClick}
                disabled={currentPage === 1}
            >
                <NavigateBeforeIcon />
            </IconButton> */}
            <Pagination
                count={totalPages}
                defaultPage={currentPage}
                onChange={handlePageChange}
                color="primary"
                showFirstButton
                showLastButton
            />
            {/* <IconButton
                color="primary"
                onClick={handleNextClick}
                disabled={currentPage === totalPages}
            >
                <NavigateNextIcon />
            </IconButton> */}
        </Stack>
    )
}

export default NoticiaPaginacion