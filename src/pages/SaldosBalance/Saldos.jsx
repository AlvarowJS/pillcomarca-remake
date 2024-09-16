import React, { useEffect, useState } from 'react'
import bdMuni from '../../api/bdMuni'
import Saldo from '../../components/SaldosBalance/Saldo'
import { Box, Container } from '@mui/material'
import { DocumentScanner } from '@mui/icons-material'
import NormativaPaginacion from '../../components/Normativa/NormativaPaginacion'

const URL = '/v1/documentonormativa'

const Saldos = () => {

    const [saldos, setSaldos] = useState()
    const [total, setTotal] = useState()
    const [currentPage, setCurrentPage] = useState(1);
    const handlePageChange = (event, value) => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setCurrentPage(value);
    };
    useEffect(() => {
        bdMuni.get(`${URL}?year=&nombre=&tipodedocumento_id=40&page=${currentPage ?? ''}`)
            .then(res => {
                setSaldos(res.data.data)
                setTotal(res.data.links.pagination.last_page)
            })
            .catch(
                err => console.log(err)
            )
    }, [])
    useEffect(() => {
        bdMuni.get(`${URL}?year=&nombre=&tipodedocumento_id=40&page=${currentPage ?? ''}`
        )
            .then(res => {
                setSaldos(res.data.data)
                setTotal(res.data.links.pagination.last_page)

            })
            .catch(err => console.log(err))
    }, [currentPage])

    return (
        <>
            <Box marginTop={12}>
                <Box sx={{
                    backgroundColor: '#12B1FA',
                    width: '50%',
                    borderTopRightRadius: 10,
                    borderBottomRightRadius: 10,
                    marginBottom: 3
                }}>
                    <h1 style={{ color: 'white', paddingLeft: 10 }}>
                        <DocumentScanner />
                        SALDOS DE BALANCE
                    </h1>
                </Box>

            </Box>
            <Container
                sx={{
                    marginTop: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                    flex: 1
                }}
            >

                {
                    saldos?.length == 0 ? (
                        <></>
                    ) : (
                        saldos?.map(saldo => (
                            <Saldo
                                key={saldo.id}
                                saldo={saldo}
                            />
                        ))
                    )

                }

                <NormativaPaginacion
                    totalPages={total}
                    currentPage={currentPage}
                    handlePageChange={handlePageChange}
                    setCurrentPage={setCurrentPage}
                />
            </Container>
        </>
    )
}

export default Saldos