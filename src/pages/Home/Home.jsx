import React, { useState } from 'react';
import { Box } from '@mui/material';
import Carrousel from '../../components/Home/Carrousel';
import { Handshake } from '@mui/icons-material';
import Servicios from '../../components/Servicios';


const Home = () => {

    return (
        <>
            <Carrousel />

            <Box >
                <Box sx={{
                    backgroundColor: '#12B1FA',
                    width: '50%',
                    borderTopRightRadius: 10,
                    borderBottomRightRadius: 10,
                    marginBottom: 3
                }}>
                    <h1 style={{ color: 'white', paddingLeft: 10 }}>
                        <Handshake />
                        Servicios
                    </h1>
                </Box>
                <Servicios />

            </Box>
        </>
    )
}

export default Home