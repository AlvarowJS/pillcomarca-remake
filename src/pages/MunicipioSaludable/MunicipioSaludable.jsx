import { Healing, HealingSharp, HearingRounded } from '@mui/icons-material'
import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CardSalud from '../../components/MunicipioSaludable/CardSalud'
import bdSaludable from '../../api/bdSaludable'

const MunicipioSaludable = () => {
    
    
    return (
        <>
            <Box sx={{
                backgroundColor: '#12B1FA',
                width: { sx: '50%', xs: '80%' },
                borderTopRightRadius: 10,
                borderBottomRightRadius: 10,
                // marginBottom: 3,
                marginTop: 12
            }}>
                <h1 style={{ color: 'white', paddingLeft: 10 }}>
                    <HearingRounded />
                    Municipio Saludable
                </h1>
            </Box>

            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                gap: 2,
                marginTop: 2,
                flexWrap: 'wrap',
                marginX: 2

            }}>

                {
                    bdSaludable?.map((item) => (
                        <CardSalud
                            item={item}
                        />
                    ))
                }

            </Box>

        </>
    )
}

export default MunicipioSaludable