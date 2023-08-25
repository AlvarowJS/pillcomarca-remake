import React, { useEffect, useState } from 'react'
import { ArrowBackIos, ArrowBackIosRounded, ArrowLeft, ChevronLeft, ChevronRight, Newspaper } from '@mui/icons-material'
import { Box, Button, Grid, IconButton, Typography } from '@mui/material'
import { Link, useParams } from 'react-router-dom';
const noticiasData = [
    {
        id: 5,
        titulo: 'INVITACIÓN',
        fecha: '25/08/2023',
        nota: 'La municipalidad distrital de Pillco Marca invita a los periodistas, Comunicadores Sociales y población al Lanzamiento más esperado. \n𝐋𝐎𝐒 𝐄𝐒𝐏𝐄𝐑𝐀𝐌𝐎𝐒‼️ \n𝐈𝐧𝐠. 𝐃𝐢𝐚𝐧𝐚 𝐏𝐥𝐞𝐣𝐨, 𝐚𝐥𝐜𝐚𝐥𝐝𝐞𝐬𝐚 𝟐𝟎𝟐𝟑 - 𝟐𝟎𝟐𝟔',
        referencia: '<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FMunicipalidadDistritaldePillcoMarca%2Fposts%2Fpfbid02bzfBdzjGYDu8tW2xqWeRzhk9pAoocyALkreCsLYSUphGnV6L3vCB6RB7LncthY73l&show_text=true&width=500" width="500" height="508" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>',
        fotos: [
            {
                id: 1,
                nombre: 'foto1',
                foto: 'https://scontent.flim8-1.fna.fbcdn.net/v/t39.30808-6/369220869_144021642086592_8962950573354518121_n.jpg?stp=dst-jpg_p180x540&_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHsGtvvLhdwtU-1g9PivrXoRENbYTKlJQpEQ1thMqUlCn4ZXMrwo63oSi-UO_4KwkihIGu3NYtZFtlccU8V4enn&_nc_ohc=Hiq2KllOodYAX_B0w8e&_nc_ht=scontent.flim8-1.fna&oh=00_AfDL4-V8eGhRfWQ-_0jjHt-6Clra7BhJ5_dGkCb8rv1xLg&oe=64EDD83C'
            },
            {
                id: 2,
                nombre: 'foto2',
                foto: ''
            }
        ]
    },
    {
        id: 1,
        titulo: 'GRACIAS A LAS GESTIONES DE NUESTRA ALCALDESA, PILLCO MARCA SERA BENEFICIARIO DEL PLAN DE DIAGNOSTICO DE COFOPRI',
        fecha: '25/08/2023',
        nota: 'De esta manera, el 4 de setiembre del presente año se dará inicio al trabajo de diagnóstico de informalidad  en los 14 sectores  de nuestro distrito que están posesionados informalmente.\nPara luego suscribir el convenio de diagnóstico técnico legal y finalmente el saneamiento. \n𝐈𝐧𝐠. 𝐃𝐢𝐚𝐧𝐚 𝐏𝐥𝐞𝐣𝐨, 𝐚𝐥𝐜𝐚𝐥𝐝𝐞𝐬𝐚 𝟐𝟎𝟐𝟑 - 𝟐𝟎𝟐𝟔',
        referencia: '<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FMunicipalidadDistritaldePillcoMarca%2Fposts%2Fpfbid0abWwgdrtC3CFyGjJiuWzV1xiK4gAYWNv8KtPZ2TrAY9eogYkKb46MUQrJ8ddFKLtl&show_text=true&width=500" width="500" height="800" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>',
        fotos: [
            {
                id: 1,
                nombre: 'foto1',
                foto: 'https://scontent.flim8-1.fna.fbcdn.net/v/t39.30808-6/370185006_145003341988422_3166201075078951058_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFN89vvK7ydRj4Hl6DzflGFBS3Zduzxx9kFLdl27PHH2TxYxtkMhGWkv9FUfquUENbaQPFXdd2qcQAwhlDfxaEi&_nc_ohc=XT0a1MZ37MAAX_esfan&_nc_ht=scontent.flim8-1.fna&oh=00_AfDHAvbs_40T4ZVxwFlzzlGyOf-ZLV2kVQ-JWuimICoLXw&oe=64ED5110'
            },
            {
                id: 2,
                nombre: 'foto2',
                foto: 'https://scontent.flim13-1.fna.fbcdn.net/v/t39.30808-6/370362467_145003378655085_1444938649352275252_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFRvcHSUtOiuexFJWcmqfm25WJGwTrdTILlYkbBOt1MgoTCec1eVh2pPFP2iKM1SftB5jbRClTZ4H_ys1AeDbnl&_nc_ohc=udXQIM54RJYAX90vfcN&_nc_ht=scontent.flim13-1.fna&oh=00_AfBFgxhY763_kcQCJTShdm_lkJfqTT8ouITiWmyFiW9_dw&oe=64ED42F7'
            }
        ]
    },

    {
        id: 2,
        titulo: 'HOMENAJE A NUESTROS ADULTOS MAYORES',
        fecha: '24/08/2023',
        nota: 'Con gran alegría, nuestros adultos mayores recibieron un merecido homenaje realizado por nuestra municipalidad a través del Programa CIAM. \nEn este evento se rindió homenaje, consideración y reconocimiento a las personas de avanzada edad. \nAsimismo, se realizo el Miss y Míster, actividad que le dio realce a este homenaje. \nEn Perú, el Día del Adulto Mayor fue declarado conforme a la Ley 30088. \nEl exlegislador José Urquizo Maggia, fue el autor de esta norma, que fue publicada el 1 de octubre de 2013 en el diario oficial El Peruano. \n𝐈𝐧𝐠. 𝐃𝐢𝐚𝐧𝐚 𝐏𝐥𝐞𝐣𝐨, 𝐚𝐥𝐜𝐚𝐥𝐝𝐞𝐬𝐚 𝟐𝟎𝟐𝟑 - 𝟐𝟎𝟐𝟔',
        referencia: '<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FMunicipalidadDistritaldePillcoMarca%2Fposts%2Fpfbid02DfeRmziqmi5X4VacMJLZimMU1wxx8RDMFREa1XgQ3CURcCdR7VPAcDVoEC4ZVgU1l&show_text=true&width=500" width="500" height="800" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>',
        fotos: [
            {
                id: 1,
                nombre: 'foto1',
                foto: 'https://scontent.flim13-1.fna.fbcdn.net/v/t39.30808-6/369859480_144828738672549_4934928423427087947_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeH7PTQfjxLi3nd7fuMLDg8BramtzyygsbOtqa3PLKCxs02OkVI2ZyPMUSqwKC0gwYVfSY9CM-uVKqctv8FxAflA&_nc_ohc=XI7F8jUojJEAX_ZNvov&_nc_ht=scontent.flim13-1.fna&oh=00_AfAUw2PWJX5LYVyXhDDHKZJt0WfSegiEeOaMOrIwp4D3GQ&oe=64EDA112'
            },
            {
                id: 2,
                nombre: 'foto2',
                foto: 'https://scontent.flim8-1.fna.fbcdn.net/v/t39.30808-6/368776614_144828865339203_6294742357555895278_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHgkFbhJ4rAowsVqk_951tNow4XOQtE49ujDhc5C0Tj22ZNx2cQBJXlZij2GOefhhrXwjas9r5dMaBQuSsxoRyi&_nc_ohc=KBWLdhxaixUAX-PtTzL&_nc_ht=scontent.flim8-1.fna&oh=00_AfCb_vrsf6lIyKHVweoqbyeBk9RjjTrByLUluGc1MyGPcQ&oe=64EE64B9'
            },

            {
                id: 3,
                nombre: 'foto3',
                foto: 'https://scontent.flim8-1.fna.fbcdn.net/v/t39.30808-6/369906868_144828882005868_8029002998805377162_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEyBF-MdkXpu6FPP6lh8pK5yPcU2jZ27rbI9xTaNnbutkvvM9GKUg5Y3gCslLn59S-0mtzL58Ss9mfUpo9swXIJ&_nc_ohc=zYhrKo1ygrYAX-p3iJB&_nc_ht=scontent.flim8-1.fna&oh=00_AfAuCwjEj5BgdlMv-yB4sUF1S8A2Xj2G0LP6rfA76ptCfg&oe=64EDF7D1'
            },

            {
                id: 4,
                nombre: 'foto4',
                foto: 'https://scontent.flim9-1.fna.fbcdn.net/v/t39.30808-6/369899633_144828918672531_2275221618086762310_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEvekdt7s4tbo2FaHDhTsOtWvoztNo0Kala-jO02jQpqZ0Ljoz6Lwe67tnehAtGPUNh0MLPRsBjpkCbW5MeeexD&_nc_ohc=DUa9rc44kEUAX996rOL&_nc_ht=scontent.flim9-1.fna&oh=00_AfCw7Yp4JIKlJHxXgrl4SI0oswc6v0c42moqgfNmFnQr4A&oe=64EDB4DC'
            },

            {
                id: 5,
                nombre: 'foto5',
                foto: 'https://scontent.flim9-1.fna.fbcdn.net/v/t39.30808-6/369906608_144828792005877_8054459590723369158_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGk31d_mfqIFZHR--GnRx1iyjFqDs5Ool7KMWoOzk6iXhXUB2FbmbYNdlHrBP2-ZKXyNl9GNtjny1xxqQtgut7s&_nc_ohc=uojmiihU9wsAX9NCO9S&_nc_ht=scontent.flim9-1.fna&oh=00_AfD2HpvbVsJR92lWdwlOcO-zbXSCk4iMX8VUABStgjigXw&oe=64ED2E19'
            },
        ]
    },

    {
        id: 3,
        titulo: 'EN PILLCO MARCA EVALUAMOS LA CALIDAD DE RUIDO',
        fecha: '24/08/2023',
        nota: 'La Municipalidad de Pillco Marca en cumplimiento de la actividad operativa EVALUACION DE LA CALIDAD DEL RUIDO AMBIENTAL dentro del distrito pillcomarquino, programado en el PLAN ANUAL DE EVALUACIÓN  Y FISCALIZACIÓN AMBIENTAL  (PLANEFA 2023), El área de Gestión Ambiental de la Gerencia de Medio Ambiente realizó dicha actividad mediante el uso del instrumento de evaluación de ruido ( sonómetro) en dos puntos del óvalo de cayhuayna, posterior a ello seran comparados con el estándar de calidad de ruido según Decreto Supremo N°085-2003-PCM,  y de esta manera poder determinar si existe contaminación sonora en nuestro distrito.\nIng. Diana Plejo Carrillo, alcaldesa  2023 - 2026.',
        referencia: '<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FMunicipalidadDistritaldePillcoMarca%2Fposts%2Fpfbid0kBiyk4NADfKRKw498bFTemjY1t7XBRqH8PdeLK7mRefCnvrrrMzJtodpVzazbVagl&show_text=true&width=500" width="500" height="877" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>',
        fotos: [
            {
                id: 1,
                nombre: 'foto1',
                foto: 'https://scontent.flim8-1.fna.fbcdn.net/v/t39.30808-6/367098799_144672672021489_8571510591527112338_n.jpg?stp=dst-jpg_s600x600&_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFRMCrk84RCvRewrI552TzICQ7aRUzFDn0JDtpFTMUOfTBd2h7rlGOPf5J04sk7Vd-geEIJLZ-D4vc_gwpZvmiD&_nc_ohc=sbLCIbJOLWMAX-2Bouq&_nc_ht=scontent.flim8-1.fna&oh=00_AfBVRZ0vP9qx4iSEgEEEQa_2Fs78reOHyFWrvRc7LFIBpw&oe=64EDA92A'
            },
            {
                id: 2,
                nombre: 'foto2',
                foto: 'https://scontent.flim8-1.fna.fbcdn.net/v/t39.30808-6/367477627_144672742021482_1672579601117270856_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEuLa4gfSSMg95XFB6eeECzjdELAJd9h1SN0QsAl32HVJj-JztMP92aqJJ0EkKO1oKRDhs6_MApHFiFluoFzDZR&_nc_ohc=7oijykr8U4AAX8W0J7c&_nc_ht=scontent.flim8-1.fna&oh=00_AfDW8XHT9HWTNwDAsEp0VUkBEdNASz7j2WpMnwLKW3aHbA&oe=64EDB3BA'
            }
        ]
    },

    {
        id: 4,
        titulo: 'GOBERNANDO JUNTAS',
        fecha: '24/08/2023',
        nota: 'Nuestra alcaldesa Ing Diana Plejo Carrillo, viene participando del I Foro Nacional de Alcaldesas "Gobernando Juntas", organizado por el MIMP en la ciudad de Lima.\nDe esta manera nuestra primera autoridad viene fortaleciendo su capacidad de gestión orientada al servicio de la ciudadanía. \nIng. Diana Plejo Carrillo, alcaldesa 2023 - 2026.',
        referencia: '<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FMunicipalidadDistritaldePillcoMarca%2Fposts%2Fpfbid0hEvK35xeFP8pCVsFAzaZ8kRtGUaeyUNstxxcGxwdS1XpdfS4vJA9pKJmbzn5sQ9tl&show_text=true&width=500" width="500" height="781" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>',
        fotos: [
            {
                id: 1,
                nombre: 'foto1',
                foto: 'https://scontent.flim8-1.fna.fbcdn.net/v/t39.30808-6/367495160_144552235366866_1009488299770498059_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeG7F_YSUAH0rDcw_eMdRZOjGjkEyg9jn_UaOQTKD2Of9XEImlX76Ol_EP6XJsIVncc5AMFOD3OLu6_yIoXOzeB7&_nc_ohc=2gnyiRungdYAX_Z7WQM&_nc_ht=scontent.flim8-1.fna&oh=00_AfB0lZlLQdpnAWC9chxPOmNXVNHh1CZbpwJaCknDeeNEuw&oe=64EE496D'
            },
            {
                id: 2,
                nombre: 'foto2',
                foto: 'https://scontent.flim13-1.fna.fbcdn.net/v/t39.30808-6/367482357_144552405366849_2837583995399185651_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFkr4gwSh81BgTHY8rmEN2ntBX3vsjv5T60Ffe-yO_lPmbrtoKIpAHPBq-R2cPAue5puQILQkZ8E4Rg7Sgp1ig_&_nc_ohc=hI9Was6aY0UAX8Xqxv7&_nc_oc=AQnnnpZZGlY4FiOzTOo0Uzu5ssB2sf9TcBSVOF2oABfxy1rwJbDRKddJALCZDAzFVCMnCpsMnxVD_karD_PElrRQ&_nc_ht=scontent.flim13-1.fna&oh=00_AfDuugQlddZgPRoos8oQe4XpFMtok52Do3JI2RaRjFcGSw&oe=64EE4434'
            },

            {
                id: 3,
                nombre: 'foto3',
                foto: 'https://scontent.flim8-1.fna.fbcdn.net/v/t39.30808-6/367465038_144552482033508_568885768669658257_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeG4fFo0fAuiX2SZr1lsJYr_4THg7QgCP7rhMeDtCAI_up5wDIxloSnyb9v1VWB8QMx1oGbql64mGd8YY514ZPqG&_nc_ohc=niGZTdX3KiAAX9llSEH&_nc_ht=scontent.flim8-1.fna&oh=00_AfD97KHWjgKiKTnpBYYSaQWbjmqvSU698cLW3qIHNX-kBQ&oe=64EE35E0'
            }
        ]
    },

    {
        id: 6,
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
        id: 7,
        titulo: 'OPERATIVO DE TRANSPORTE',
        fecha: '19/08/2023',
        nota: 'La Municipalidad distrital de Pillco Marca, Municipalidad Provincial de Huánuco, SUTRAN, Direccion Regional de Transportes y Comunicaciones y la Policía Nacional vienen trabajando de manera articulada con el solo objetivo de liberar las principales calles de nuestro distrito que día a día vienen siendo tomada por conductores que no respetan libre tránsito.\nA través de la gerencia y subgerencia de transportes de ambas municipalidades se llevó a cabo este operativo inopinado donde se exhorto una vez más a los conductores y vecinos a dejar libre las calles.\nAsimismo, se verifico si estas unidades contaban con los documentos en reglas para que pueden brindar el servicio público.\nLOS OPERATIVOS SE VIENEN REALIZANDO DE MANERA CONSTANTE CON LA FINALIDAD DE MANTENER UN DISTRITO ORDENADO.\nIng. Diana Plejo Carrillo, alcaldesa 2023-2026',
        referencia: '<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FMunicipalidadDistritaldePillcoMarca%2Fposts%2Fpfbid02bm7czgwiDrtwLCo2dxoin5HJdtWajUMkri7LzXdhfgGGhzWqYsSTDDpXwi3f8mDEl&show_text=true&width=500" width="500" height="781" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>',
        fotos: [
            {
                id: 1,
                nombre: 'foto1',
                foto: 'https://scontent.flim8-1.fna.fbcdn.net/v/t39.30808-6/367424504_141112102377546_4073281996837097032_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGgh30DFoFgpmz0aRAcXy2xLqjAG5ylOc0uqMAbnKU5zZ6kxWiPAcV99aOv0O7orZV7V3_8TC5zM7yGvfNzKboZ&_nc_ohc=Vbce7WIkYYcAX_C6zZY&_nc_ht=scontent.flim8-1.fna&oh=00_AfCAT2TpWt4GZ3GNHZeRPJOoOVRGbk4akKRzUYXjYirWIw&oe=64EDBA7C'
            },
            {
                id: 2,
                nombre: 'foto2',
                foto: 'https://scontent.flim9-1.fna.fbcdn.net/v/t39.30808-6/366728209_141112649044158_4346246342725171280_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEkufL3ZtMI1DV-quBPVtddaGofGLVXiipoah8YtVeKKg_kmgo5ukpMaq-OwQHRkpKndyp-ckec7s3qcG2g208a&_nc_ohc=sxTW6jubPEkAX_RGGbr&_nc_ht=scontent.flim9-1.fna&oh=00_AfAuvJbZD4BASMlPNbr-lXbhLZVF_U55NIZ8HtV6tDMxUQ&oe=64ECCC53'
            }
        ]
    },
    {
        id: 8,
        titulo: 'DIA DE LA IDENTIDAD HUANUQUEÑA',
        fecha: '18/08/2023',
        nota: 'Con mucha alegría participamos del Gran pasacalle por el Día de la Identidad Huanuqueña, que se celebra cada primer viernes después del aniversario de la ciudad de Huánuco \nCon la finalidad de fortalecer las costumbres y tradiciones de las diferentes provincias. \nNuestro distrito no fue ajeno a ello, ya que nuestra alcaldesa lideró la delegación de trabajadores que participó en esta actividad. \n𝐈𝐧𝐠. 𝐃𝐢𝐚𝐧𝐚 𝐏𝐥𝐞𝐣𝐨, 𝐚𝐥𝐜𝐚𝐥𝐝𝐞𝐬𝐚 𝟐𝟎𝟐𝟑 - 𝟐𝟎𝟐𝟔',
        referencia: '<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FMunicipalidadDistritaldePillcoMarca%2Fposts%2Fpfbid0KJqZWzyBZYexXA9bxnPAHP6FEh7vZ2KjctPZuHKRM4hNJMzGcEmwKYeTpskS1iodl&show_text=true&width=500" width="500" height="800" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>',
        fotos: [
            {
                id: 1,
                nombre: 'foto1',
                foto: 'https://scontent.flim9-1.fna.fbcdn.net/v/t39.30808-6/368624356_141004089055014_5844728387686332758_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGWwCZ_ysS0lYc3VjF9VJthikrVOI-MGKaKStU4j4wYptPy6om5Y3iHgKzxwl2JyXYhoVu5PzMLKdz9muEoxA9_&_nc_ohc=_fe42V-xmgUAX8Gi15X&_nc_ht=scontent.flim9-1.fna&oh=00_AfD-lo6Ohj2EB5DR41wRH5kRe8SlIqnQrN1P8Gl5f67sYA&oe=64EDDECD'
            },
            {
                id: 2,
                nombre: 'foto2',
                foto: 'https://scontent.flim9-1.fna.fbcdn.net/v/t39.30808-6/368673896_141004859054937_7483691492247856069_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGcD6-tEHWJqxacXm4ZWJzcW4qEUXMkEyNbioRRcyQTI1XEIWSRQ-effaRQEZXuFRv66G_x5DnbhXju56P1yRk5&_nc_ohc=vUNw5-rNX1IAX8brdV2&_nc_ht=scontent.flim9-1.fna&oh=00_AfASUBBafYgbFkVoVoW8Fy_Hi8PRUmoIaZUcvcfyk1svRQ&oe=64EE2924'
            }
        ]
    },
    {
        id: 9,
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
        id: 10,
        titulo: 'TRABAJANDO UNIDOS',
        fecha: '17/08/2023',
        nota: 'Nuestra alcaldesa  ing. Diana Plejo Carrillo y el equipo técnico de la municipalidad sostuvieron una reunión de trabajo con el Rector de la UNHEVAL, Guillermo Bocangel Weydert  con la finalidad de realizar  trabajos articulados para la mejora de nuestro distrito. \n𝐈𝐧𝐠. 𝐃𝐢𝐚𝐧𝐚 𝐏𝐥𝐞𝐣𝐨, 𝐚𝐥𝐜𝐚𝐥𝐝𝐞𝐬𝐚 𝟐𝟎𝟐𝟑 - 𝟐𝟎𝟐𝟔',
        referencia: '<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FMunicipalidadDistritaldePillcoMarca%2Fposts%2Fpfbid03bNU4mbFEKVgmG2FARcbAbDAqdBksp52JPZM46q4pHjEUoqM6atXxXev8K9Wy6Ywl&show_text=true&width=500" width="500" height="761" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>',
        fotos: [
            {
                id: 1,
                nombre: 'foto1',
                foto: 'https://scontent.flim9-1.fna.fbcdn.net/v/t39.30808-6/368515299_140214725800617_6859922989021444570_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFeoFCJBQJ2-sYpgHZBjVZvprGdMH5pSKqmsZ0wfmlIqrkk2KteuL5MqjwnulLJYi_0a0P3j-u9t-nV28T_L8o4&_nc_ohc=lGWLtVLyIGsAX9RX1d3&_nc_ht=scontent.flim9-1.fna&oh=00_AfBKuMTcERAjUU6byPLkZG45AWOxVBJ1aXdTV3vMRccFAg&oe=64EE8AC9'
            },
            {
                id: 2,
                nombre: 'foto2',
                foto: 'https://scontent.flim9-1.fna.fbcdn.net/v/t39.30808-6/368456378_140214855800604_233848490836944540_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHqC7wk7Bf3GNeAXxJx8nxYW0ZR30jerFxbRlHfSN6sXPiLg9MQ5vUildkibS3L7LxO_9aGf-Ni14Y5I1yY1PDC&_nc_ohc=Lkwrro5DBuYAX-77uyy&_nc_ht=scontent.flim9-1.fna&oh=00_AfDBcrwCU2fW60QokZ81FKgNEw7mLoNohFmp3ziRd7-tcA&oe=64ED03C6'
            }
        ]
    },

    {
        id: 11,
        titulo: '𝐀𝐓𝐄𝐍𝐂𝐈Ó𝐍 𝐕𝐄𝐂𝐈𝐍𝐎𝐒',
        fecha: '16/08/2023',
        nota: 'La ordenanza municipal, N.012-2007 \nProhíbe el comercio informal, Proliferación de paraderos informales de vehículos menores y pesados, lavaderos de carros y paneles publicitarios.\n𝐈𝐧𝐠. 𝐃𝐢𝐚𝐧𝐚 𝐏𝐥𝐞𝐣𝐨, 𝐚𝐥𝐜𝐚𝐥𝐝𝐞𝐬𝐚 𝟐𝟎𝟐𝟑 - 𝟐𝟎𝟐𝟔',
        referencia: '<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FMunicipalidadDistritaldePillcoMarca%2Fposts%2Fpfbid0z9qpn39jpyRotxcuFkpnW4UdgUjL5dU36WKndbvASMvv6mkHNEdYk7QmRdz84eFSl&show_text=true&width=500" width="500" height="674" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>',
        fotos: [
            {
                id: 1,
                nombre: 'foto1',
                foto: 'https://scontent.flim9-1.fna.fbcdn.net/v/t39.30808-6/368170180_139606312528125_8687511131195541512_n.jpg?stp=dst-jpg_p526x296&_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHbl9bsbFd8oAgS9sIQ5-YlzY2bQ1gaslfNjZtDWBqyVzA1Xx35ZwsZx8pfEX7nkTU_Ez_YkcTJJifGdxzzR9SW&_nc_ohc=qki4zJf8Y-UAX9jkJ4T&_nc_ht=scontent.flim9-1.fna&oh=00_AfCLZrqmguZVTSgM-tY23_J70Cj4lRxPDev5VvdTLvv0Rw&oe=64EE9656'
            },
            {
                id: 2,
                nombre: 'foto2',
                foto: ''
            }
        ]
    }


]
const NoticiaNota = () => {
    const id = useParams();
    const noticiaFiltrada = noticiasData.find(noticia => noticia.id == id?.id);

    const [currentImage, setCurrentImage] = useState(0);
    const [modalOpen, setModalOpen] = useState(false);
    const handlePrevImage = () => {
        setCurrentImage((prev) => (prev === 0 ? noticiasData[0].fotos.length - 1 : prev - 1));
    };

    const handleNextImage = () => {
        setCurrentImage((prev) => (prev === noticiasData[0].fotos.length - 1 ? 0 : prev + 1));
    };

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };


    const noticiasAll = () => {
        navigate('/noticias')
    }

    return (
        <>
            <Link to='/noticias'>

                <Button sx={{
                    alignItems: 'center',
                    justifyItems: 'center',
                    // backgroundColor: '#12B1FA',
                    // color: 'white',
                    marginTop: 12,
                    // marginBottom:2,
                    // textAlign: 'center'
                }}
                // onClick={noticiasAll}
                >
                    <ArrowBackIosRounded />
                    Volver
                </Button>
            </Link>
            <Box sx={{
                backgroundColor: '#12B1FA',
                width: '50%',
                borderTopRightRadius: 10,
                borderBottomRightRadius: 10,
                // marginBottom: 3,
            }}>
                <h1 style={{ color: 'white', paddingLeft: 10 }}>
                    <Newspaper />
                    Noticias
                </h1>
            </Box>

            <Grid container>
                <Grid item xs={12} sm={12} md={12} lg={6} padding={2}>
                    <Typography sx={{
                        color: '#12B1FA',
                        fontWeight: 'bold',
                        fontSize: 30
                    }}>
                        {noticiaFiltrada.titulo}
                    </Typography>

                    {/* Imagenes */}
                    <Grid container>
                        <Grid item md={1} xs={2}>
                            <IconButton onClick={handlePrevImage} sx={{ backgroundColor: '#28274D', color: 'white', top: '45%', left: { xs: '15%', sm: '40%', md: '30%', lg: '10%', xl: '80%' } }}>
                                <ChevronLeft sx={{ fontSize: 20 }} />
                            </IconButton>
                        </Grid>
                        <Grid item md={10} xs={8}>
                            <Box
                                marginY={3}
                                sx={{
                                    backgroundImage: `url(${noticiaFiltrada.fotos[currentImage]?.foto})`,
                                    position: 'relative',

                                }}

                            >
                                <div
                                    style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        // backgroundColor: 'rgba(255, 255, 255, 0.5)', // Cambia el color de fondo del desenfoque
                                        backdropFilter: 'blur(10px)', // Ajusta el valor del desenfoque según sea necesario
                                    }}
                                ></div>
                                <img
                                    onClick={openModal}
                                    src={noticiaFiltrada.fotos[currentImage]?.foto}

                                    style={{
                                        position: 'relative',
                                        width: '100%',
                                        height: '450px',
                                        borderRadius: '50px',
                                        objectFit: 'contain',
                                    }}
                                />

                            </Box>

                        </Grid>
                        <Grid item md={1} xs={2}>
                            <IconButton onClick={handleNextImage} sx={{ backgroundColor: '#28274D', color: 'white', top: '45%', left: 10 }}>
                                <ChevronRight sx={{ fontSize: 20 }} />
                            </IconButton>
                        </Grid>

                    </Grid>
                    <Typography sx={{
                        color: 'black',
                        // fontWeight: 'bold',
                        fontSize: 15,
                        whiteSpace: 'pre-line'
                    }}>
                        {noticiaFiltrada.nota}
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={6}>
                    <Box sx={{
                        width: '100%',
                        overflowX: 'auto'
                    }}>
                        {/* <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FMunicipalidadDistritaldePillcoMarca%2Fposts%2Fpfbid02SpauSRTnKoFpC1Te3WrRbHA8BqoNjJAU9KyuaQBr6j34dpPumCWwTQgLc4dhmTXSl&show_text=true&width=500" width="500" height="800"></iframe> */}
                        <div dangerouslySetInnerHTML={{ __html: noticiaFiltrada.referencia }} />

                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default NoticiaNota