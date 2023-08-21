import { NewReleases, Newspaper } from '@mui/icons-material'
import { Box, Grid } from '@mui/material'
import React from 'react'
import NoticiaCard from '../../components/Noticias/NoticiaCard'

const Noticias = () => {


  const noticiasData = [
    {
      id: 1,
      titulo: 'OPERATIVO MULTISECTORIAL',
      nota: 'Las labores de fiscalización continúan, esta vez se visito a  los gimnasios que brindan servicios en nuestro distrito con la finalidad de verificar si cuentan con la documentación respectiva.\n Durante la intervención se realizó un control estricto verificando su Licencia de Funcionamiento, Certificado de Defensa Civil, Certificado de Fumigación, pago Apdayc.\nAmigo comerciante si cuentas con un negocio y no lo has regularizado, acércate a la municipalidad y te daremos todas las facilidades.\nLos operativos inopinados continuarán de manera constante y permanente.',
      referencia: 'www.facebook.com',
      fotos: [
        {
          id: 1,
          nombre: 'foto1',
          foto: 'https://scontent.flim8-1.fna.fbcdn.net/v/t39.30808-6/367018644_142735495548540_6805407791701932432_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHx_PKjlU4KzcK1vIUuueHhgfLqHh3SAeGB8uoeHdIB4fZJTVzFmZIfakqOv5IM645JO0zAR3Y22ezAT_a5ZRyq&_nc_ohc=BNoq5iljC1wAX_hSUXX&_nc_ht=scontent.flim8-1.fna&oh=00_AfAZ7JHVk0SS4QdBuzXbWt8NiWGtPaXBXS1wwitFeV6QXg&oe=64E9571C'
        },
        {
          id: 2,
          nombre: 'foto2',
          foto: 'https://scontent.flim8-1.fna.fbcdn.net/v/t39.30808-6/366719929_142735682215188_4420751884512173455_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFBwUhlWF9BbmqiVGz5pEMFo1O0n9Ne8IejU7Sf017wh49MCPhWeY6l-utzU8bZSik6jNqPvh5MX2cFmMpStSBV&_nc_ohc=qpW1NUCmuVcAX8edrKH&_nc_ht=scontent.flim8-1.fna&oh=00_AfBFhYt0QKz31vw8O7vXSFN0CTLttM7B1305Ym-fshs87A&oe=64E7A17B'
        }
      ]
    },
    {
      id: 1,
      titulo: 'OPERATIVO MULTISECTORIAL',
      nota: 'Las labores de fiscalización continúan, esta vez se visito a  los gimnasios que brindan servicios en nuestro distrito con la finalidad de verificar si cuentan con la documentación respectiva.\n Durante la intervención se realizó un control estricto verificando su Licencia de Funcionamiento, Certificado de Defensa Civil, Certificado de Fumigación, pago Apdayc.\nAmigo comerciante si cuentas con un negocio y no lo has regularizado, acércate a la municipalidad y te daremos todas las facilidades.\nLos operativos inopinados continuarán de manera constante y permanente.',
      referencia: 'www.facebook.com',
      fotos: [
        {
          id: 1,
          nombre: 'foto1',
          foto: 'https://scontent.flim8-1.fna.fbcdn.net/v/t39.30808-6/367018644_142735495548540_6805407791701932432_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHx_PKjlU4KzcK1vIUuueHhgfLqHh3SAeGB8uoeHdIB4fZJTVzFmZIfakqOv5IM645JO0zAR3Y22ezAT_a5ZRyq&_nc_ohc=BNoq5iljC1wAX_hSUXX&_nc_ht=scontent.flim8-1.fna&oh=00_AfAZ7JHVk0SS4QdBuzXbWt8NiWGtPaXBXS1wwitFeV6QXg&oe=64E9571C'
        },
        {
          id: 2,
          nombre: 'foto2',
          foto: 'https://scontent.flim8-1.fna.fbcdn.net/v/t39.30808-6/366719929_142735682215188_4420751884512173455_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFBwUhlWF9BbmqiVGz5pEMFo1O0n9Ne8IejU7Sf017wh49MCPhWeY6l-utzU8bZSik6jNqPvh5MX2cFmMpStSBV&_nc_ohc=qpW1NUCmuVcAX8edrKH&_nc_ht=scontent.flim8-1.fna&oh=00_AfBFhYt0QKz31vw8O7vXSFN0CTLttM7B1305Ym-fshs87A&oe=64E7A17B'
        }
      ]
    },
    {
      id: 1,
      titulo: 'OPERATIVO MULTISECTORIAL',
      nota: 'Las labores de fiscalización continúan, esta vez se visito a  los gimnasios que brindan servicios en nuestro distrito con la finalidad de verificar si cuentan con la documentación respectiva.\n Durante la intervención se realizó un control estricto verificando su Licencia de Funcionamiento, Certificado de Defensa Civil, Certificado de Fumigación, pago Apdayc.\nAmigo comerciante si cuentas con un negocio y no lo has regularizado, acércate a la municipalidad y te daremos todas las facilidades.\nLos operativos inopinados continuarán de manera constante y permanente.',
      referencia: 'www.facebook.com',
      fotos: [
        {
          id: 1,
          nombre: 'foto1',
          foto: 'https://scontent.flim8-1.fna.fbcdn.net/v/t39.30808-6/367018644_142735495548540_6805407791701932432_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHx_PKjlU4KzcK1vIUuueHhgfLqHh3SAeGB8uoeHdIB4fZJTVzFmZIfakqOv5IM645JO0zAR3Y22ezAT_a5ZRyq&_nc_ohc=BNoq5iljC1wAX_hSUXX&_nc_ht=scontent.flim8-1.fna&oh=00_AfAZ7JHVk0SS4QdBuzXbWt8NiWGtPaXBXS1wwitFeV6QXg&oe=64E9571C'
        },
        {
          id: 2,
          nombre: 'foto2',
          foto: 'https://scontent.flim8-1.fna.fbcdn.net/v/t39.30808-6/366719929_142735682215188_4420751884512173455_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFBwUhlWF9BbmqiVGz5pEMFo1O0n9Ne8IejU7Sf017wh49MCPhWeY6l-utzU8bZSik6jNqPvh5MX2cFmMpStSBV&_nc_ohc=qpW1NUCmuVcAX8edrKH&_nc_ht=scontent.flim8-1.fna&oh=00_AfBFhYt0QKz31vw8O7vXSFN0CTLttM7B1305Ym-fshs87A&oe=64E7A17B'
        }
      ]
    },
    {
      id: 1,
      titulo: 'OPERATIVO MULTISECTORIAL',
      nota: 'Las labores de fiscalización continúan, esta vez se visito a  los gimnasios que brindan servicios en nuestro distrito con la finalidad de verificar si cuentan con la documentación respectiva.\n Durante la intervención se realizó un control estricto verificando su Licencia de Funcionamiento, Certificado de Defensa Civil, Certificado de Fumigación, pago Apdayc.\nAmigo comerciante si cuentas con un negocio y no lo has regularizado, acércate a la municipalidad y te daremos todas las facilidades.\nLos operativos inopinados continuarán de manera constante y permanente.',
      referencia: 'www.facebook.com',
      fotos: [
        {
          id: 1,
          nombre: 'foto1',
          foto: 'https://scontent.flim8-1.fna.fbcdn.net/v/t39.30808-6/367018644_142735495548540_6805407791701932432_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHx_PKjlU4KzcK1vIUuueHhgfLqHh3SAeGB8uoeHdIB4fZJTVzFmZIfakqOv5IM645JO0zAR3Y22ezAT_a5ZRyq&_nc_ohc=BNoq5iljC1wAX_hSUXX&_nc_ht=scontent.flim8-1.fna&oh=00_AfAZ7JHVk0SS4QdBuzXbWt8NiWGtPaXBXS1wwitFeV6QXg&oe=64E9571C'
        },
        {
          id: 2,
          nombre: 'foto2',
          foto: 'https://scontent.flim8-1.fna.fbcdn.net/v/t39.30808-6/366719929_142735682215188_4420751884512173455_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFBwUhlWF9BbmqiVGz5pEMFo1O0n9Ne8IejU7Sf017wh49MCPhWeY6l-utzU8bZSik6jNqPvh5MX2cFmMpStSBV&_nc_ohc=qpW1NUCmuVcAX8edrKH&_nc_ht=scontent.flim8-1.fna&oh=00_AfBFhYt0QKz31vw8O7vXSFN0CTLttM7B1305Ym-fshs87A&oe=64E7A17B'
        }
      ]
    }
  ]
  return (
    <>
      <Box sx={{
        backgroundColor: '#12B1FA',
        width: '50%',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        // marginBottom: 3,
        marginTop: 12
      }}>
        <h1 style={{ color: 'white', paddingLeft: 10 }}>
          <Newspaper />
          Noticias
        </h1>
      </Box>
      <Grid container spacing={4} marginY={5} paddingX={10}>
        {
          noticiasData?.map(noticia => (
            <NoticiaCard
              key={noticia.id}
              noticia={noticia}
            />
          ))
        }
      </Grid>
    </>
  )
}

export default Noticias