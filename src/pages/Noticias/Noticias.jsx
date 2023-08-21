import { NewReleases, Newspaper } from '@mui/icons-material'
import { Box, Grid } from '@mui/material'
import React from 'react'
import NoticiaCard from '../../components/Noticias/NoticiaCard'

const Noticias = () => {


  const noticiasData = [
    {
      id: 1,
      titulo: 'OPERATIVO MULTISECTORIAL',
      fecha: '21/08/2023',
      nota: 'Las labores de fiscalización continúan, esta vez se visito a  los gimnasios que brindan servicios en nuestro distrito con la finalidad de verificar si cuentan con la documentación respectiva.\n Durante la intervención se realizó un control estricto verificando su Licencia de Funcionamiento, Certificado de Defensa Civil, Certificado de Fumigación, pago Apdayc.\nAmigo comerciante si cuentas con un negocio y no lo has regularizado, acércate a la municipalidad y te daremos todas las facilidades.\nLos operativos inopinados continuarán de manera constante y permanente.',
      referencia: '<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FMunicipalidadDistritaldePillcoMarca%2Fposts%2Fpfbid02SpauSRTnKoFpC1Te3WrRbHA8BqoNjJAU9KyuaQBr6j34dpPumCWwTQgLc4dhmTXSl&show_text=true&width=500" width="500" height="800" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>',
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
      id: 2,
      titulo: 'OPERATIVO DE TRANSPORTE',
      fecha: '19/08/2023',
      nota: 'La Municipalidad distrital de Pillco Marca, Municipalidad Provincial de Huánuco, SUTRAN, Direccion Regional de Transportes y Comunicaciones y la Policía Nacional vienen trabajando de manera articulada con el solo objetivo de liberar las principales calles de nuestro distrito que día a día vienen siendo tomada por conductores que no respetan libre tránsito.\nA través de la gerencia y subgerencia de transportes de ambas municipalidades se llevó a cabo este operativo inopinado donde se exhorto una vez más a los conductores y vecinos a dejar libre las calles.\nAsimismo, se verifico si estas unidades contaban con los documentos en reglas para que pueden brindar el servicio público.\nLOS OPERATIVOS SE VIENEN REALIZANDO DE MANERA CONSTANTE CON LA FINALIDAD DE MANTENER UN DISTRITO ORDENADO.\nIng. Diana Plejo Carrillo, alcaldesa 2023-2026',
      referencia: '<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FMunicipalidadDistritaldePillcoMarca%2Fposts%2Fpfbid02bm7czgwiDrtwLCo2dxoin5HJdtWajUMkri7LzXdhfgGGhzWqYsSTDDpXwi3f8mDEl&show_text=true&width=500" width="500" height="781" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>',
      fotos: [
        {
          id: 1,
          nombre: 'foto1',
          foto: 'https://scontent.flim8-1.fna.fbcdn.net/v/t39.30808-6/367447808_141112669044156_7589909900684357133_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGGCxG1pb7DAjt4g6m-30OC3HUP51_I8YbcdQ_nX8jxhgtXPDHX5gaeucPIU47UwrzlvX_MUBOWjWgK73CzIiV7&_nc_ohc=TMDLphE08UAAX8MHrgq&_nc_ht=scontent.flim8-1.fna&oh=00_AfCzBzGhpruUK6gFQxaNHoYmunPv2FqnpF8mrNXxcWGJ_w&oe=64E7BF4B'
        },
        {
          id: 2,
          nombre: 'foto2',
          foto: 'https://scontent.flim9-1.fna.fbcdn.net/v/t39.30808-6/366728209_141112649044158_4346246342725171280_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEkufL3ZtMI1DV-quBPVtddaGofGLVXiipoah8YtVeKKg_kmgo5ukpMaq-OwQHRkpKndyp-ckec7s3qcG2g208a&_nc_ohc=SX9gZgyzFP4AX9bZ0MJ&_nc_ht=scontent.flim9-1.fna&oh=00_AfAM5o7kGYtekvdllyT40fpw1ZTylgxNF-ag1Onuic8uFQ&oe=64E8D7D3'
        }
      ]
    },
    {
      id: 3,
      titulo: 'DIA DE LA IDENTIDAD HUANUQUEÑA',
      fecha: '18/08/2023',
      nota: 'Con mucha alegría participamos del Gran pasacalle por el Día de la Identidad Huanuqueña, que se celebra cada primer viernes después del aniversario de la ciudad de Huánuco \nCon la finalidad de fortalecer las costumbres y tradiciones de las diferentes provincias. \nNuestro distrito no fue ajeno a ello, ya que nuestra alcaldesa lideró la delegación de trabajadores que participó en esta actividad. \n𝐈𝐧𝐠. 𝐃𝐢𝐚𝐧𝐚 𝐏𝐥𝐞𝐣𝐨, 𝐚𝐥𝐜𝐚𝐥𝐝𝐞𝐬𝐚 𝟐𝟎𝟐𝟑 - 𝟐𝟎𝟐𝟔',
      referencia: '<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FMunicipalidadDistritaldePillcoMarca%2Fposts%2Fpfbid0KJqZWzyBZYexXA9bxnPAHP6FEh7vZ2KjctPZuHKRM4hNJMzGcEmwKYeTpskS1iodl&show_text=true&width=500" width="500" height="800" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>',
      fotos: [
        {
          id: 1,
          nombre: 'foto1',
          foto: 'https://scontent.flim9-1.fna.fbcdn.net/v/t39.30808-6/368624356_141004089055014_5844728387686332758_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGWwCZ_ysS0lYc3VjF9VJthikrVOI-MGKaKStU4j4wYptPy6om5Y3iHgKzxwl2JyXYhoVu5PzMLKdz9muEoxA9_&_nc_ohc=TZp_Gn4mr2cAX9xYE3G&_nc_ht=scontent.flim9-1.fna&oh=00_AfDiQKPA_u-la4Byn4mXMLLcHjcouZ8rWtqfhplUX5S-Gw&oe=64E7F00D'
        },
        {
          id: 2,
          nombre: 'foto2',
          foto: 'https://scontent.flim8-1.fna.fbcdn.net/v/t39.30808-6/368638603_141003845721705_4154361424963554824_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEGyrppn1IgbgEaHk92uio6bBnJ8v6SRkhsGcny_pJGSJHEoBqDlKQTzAAELUqQgg_PVGLuSqSEJGm68hAoRZ_O&_nc_ohc=7wGePD1Ss18AX_24yos&_nc_ht=scontent.flim8-1.fna&oh=00_AfDu62MtNz_m4jvOpHLH2DmHsuOlEn_xjEYQhZsNKpPhIg&oe=64E82D6C'
        }
      ]
    },
    {
      id: 4,
      titulo: 'MANTENIMIENTO DE AREAS VERDES EN NUESTRO DISTRITO',
      fecha: '17/08/2023',
      nota: 'La Gerencia de Medio Ambiente a través de la sub Gerencia de Parques y jardines viene realizando los trabajos de mantenimiento de áreas verdes en la av. Universitaria, de esta manera reafirmamos el compromiso con el cuidado del medio ambiente y el mejoramiento del ornato Público.\ning. Diana Plejo Carrillo, alcaldesa 2023 - 2026.',
      referencia: '<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FMunicipalidadDistritaldePillcoMarca%2Fposts%2Fpfbid02SeYBf1fckf9GQ52qE1hxHFVR3FpNmoFoVLDvGFxjuyvTkaT3CM8vqPsn6HU2yHiil&show_text=true&width=500" width="500" height="781" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>',
      fotos: [
        {
          id: 1,
          nombre: 'foto1',
          foto: 'https://scontent.flim8-1.fna.fbcdn.net/v/t39.30808-6/366290994_140328142455942_1598743165927304570_n.jpg?stp=dst-jpg_s600x600&_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFDn5mBbRzUKEDXxG8suYUy12vFpH1BPC3Xa8WkfUE8LXugmvGcseFdJtwjgYI1XSqAYU5yU74StzrQ8CYSHn2Z&_nc_ohc=lTOclbuXKosAX9ivykw&_nc_ht=scontent.flim8-1.fna&oh=00_AfC_DC9oTUlEsVA72hoX46qcvZxN0A-W7NlXtpds9zfnog&oe=64E9967F'
        },
        {
          id: 2,
          nombre: 'foto2',
          foto: 'https://scontent.flim13-1.fna.fbcdn.net/v/t39.30808-6/366362623_140328729122550_5541173262553522362_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGfYJRoDP5Q4xnXzfoJ8LvcoERmw5Sm04KgRGbDlKbTgitPKMK3zv5Q6YmyxNxcARgtFKb7riqUTyyf_qJ7eBlc&_nc_ohc=t_G34RshtfEAX_hDrCz&_nc_ht=scontent.flim13-1.fna&oh=00_AfCzZ1oiNyKx6DtCTo4WovPERqO35uso3813TQ5IqfmFFA&oe=64E882C3'
        }
      ]
    },
    {
      id: 5,
      titulo: 'TRABAJANDO UNIDOS',
      fecha: '17/08/2023',
      nota: 'Nuestra alcaldesa  ing. Diana Plejo Carrillo y el equipo técnico de la municipalidad sostuvieron una reunión de trabajo con el Rector de la UNHEVAL, Guillermo Bocangel Weydert  con la finalidad de realizar  trabajos articulados para la mejora de nuestro distrito. \n𝐈𝐧𝐠. 𝐃𝐢𝐚𝐧𝐚 𝐏𝐥𝐞𝐣𝐨, 𝐚𝐥𝐜𝐚𝐥𝐝𝐞𝐬𝐚 𝟐𝟎𝟐𝟑 - 𝟐𝟎𝟐𝟔',
      referencia: '<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FMunicipalidadDistritaldePillcoMarca%2Fposts%2Fpfbid03bNU4mbFEKVgmG2FARcbAbDAqdBksp52JPZM46q4pHjEUoqM6atXxXev8K9Wy6Ywl&show_text=true&width=500" width="500" height="761" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>',
      fotos: [
        {
          id: 1,
          nombre: 'foto1',
          foto: 'https://scontent.flim9-1.fna.fbcdn.net/v/t39.30808-6/368515299_140214725800617_6859922989021444570_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFeoFCJBQJ2-sYpgHZBjVZvprGdMH5pSKqmsZ0wfmlIqrkk2KteuL5MqjwnulLJYi_0a0P3j-u9t-nV28T_L8o4&_nc_ohc=Pvjn6opzLR4AX-HzDlx&_nc_ht=scontent.flim9-1.fna&oh=00_AfDQSLJ9_f6VXURBUvEq08vvmropP8LPYwN9FibOoBntHw&oe=64E89C09'
        },
        {
          id: 2,
          nombre: 'foto2',
          foto: 'https://scontent.flim8-1.fna.fbcdn.net/v/t39.30808-6/368363810_140214809133942_4084171900777377972_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGQTfzBJZgHiiSm8xp9PsBF7-Fi2Mo4s-_v4WLYyjiz7xT01ISKa0o4ai1HdGKZdVAw50_lmGm0TKkuaoOegloz&_nc_ohc=6ds-eLGEpl4AX_oJDL-&_nc_ht=scontent.flim8-1.fna&oh=00_AfCdhSD-qGER9IvunI98v5HjYQx8TYlKPZYjm53RoMGyiA&oe=64E855A7'
        }
      ]
    },

    {
      id: 6,
      titulo: '𝐀𝐓𝐄𝐍𝐂𝐈Ó𝐍 𝐕𝐄𝐂𝐈𝐍𝐎𝐒',
      fecha: '16/08/2023',
      nota: 'La ordenanza municipal, N.012-2007 \nProhíbe el comercio informal, Proliferación de paraderos informales de vehículos menores y pesados, lavaderos de carros y paneles publicitarios.\n𝐈𝐧𝐠. 𝐃𝐢𝐚𝐧𝐚 𝐏𝐥𝐞𝐣𝐨, 𝐚𝐥𝐜𝐚𝐥𝐝𝐞𝐬𝐚 𝟐𝟎𝟐𝟑 - 𝟐𝟎𝟐𝟔',
      referencia: '<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FMunicipalidadDistritaldePillcoMarca%2Fposts%2Fpfbid0z9qpn39jpyRotxcuFkpnW4UdgUjL5dU36WKndbvASMvv6mkHNEdYk7QmRdz84eFSl&show_text=true&width=500" width="500" height="674" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>',
      fotos: [
        {
          id: 1,
          nombre: 'foto1',
          foto: 'https://scontent.flim9-1.fna.fbcdn.net/v/t39.30808-6/368170180_139606312528125_8687511131195541512_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHbl9bsbFd8oAgS9sIQ5-YlzY2bQ1gaslfNjZtDWBqyVzA1Xx35ZwsZx8pfEX7nkTU_Ez_YkcTJJifGdxzzR9SW&_nc_ohc=wBCTtLOIoRgAX-Iyv0k&_nc_ht=scontent.flim9-1.fna&oh=00_AfAAExGx8A1miSc-RIElJS6bGOKjvaDMXr1K5hrNLf3JGw&oe=64E8A796'
        },
        {
          id: 2,
          nombre: 'foto2',
          foto: ''
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