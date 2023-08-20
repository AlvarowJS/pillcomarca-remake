import React from 'react'
import { Box, Typography, Grid } from '@mui/material'
import { FormatAlignCenter, HistoryEdu } from '@mui/icons-material';
const Historia = () => {
  return (
    <>
      <Box sx={{
        marginTop: 12,
        paddingX: 10
      }}>
        <Box sx={{
          backgroundColor: '#12B1FA',
          width: '50%',
          borderTopRightRadius: 10,
          borderBottomRightRadius: 10,
          marginBottom: 3
        }}>
          <h1 style={{ color: 'white', paddingLeft: 10 }}>
            <HistoryEdu />
            Historia
          </h1>
        </Box>
        <Box>
          <Grid container spacing={4} justifyContent='center'>
            <Grid item xs={12} md={8}>
              <img
                src="/historia2.png"
                alt="portada"
                style={{ borderRadius: 40, width: '100%', height: 300, objectFit: 'cover' }}
              />
            </Grid>
          </Grid>
        </Box>
        <Typography variant='h4' component='h4' sx={{ color: '#12B1FA', fontSize: 20 }}>
          HISTORIA Y CREACIÓN DEL DISTRITO DE PILLCO MARCA
        </Typography>
        <br />
        <Typography>
          Los territorios de Cayhuayna, Marabamba, Andabamba, Vichaycoto y otros lugares que formaban parte del Pillco Mayo, (Janan pillco) hoy conocido como el valle del Huallaga, durante el periodo colonial español se convirtieron en tierras bajo el dominio de los españoles.
        </Typography>
        <br />
        <Typography>
          Estas tierras se repartieron los españoles bajo la denominación de Encomiendas. José Vara llanos en su obra cumbre Historia de Huánuco, señala que el primer encomendero de Huánuco fue Gómez Arias Dávila, en consecuencia, las tierras de Cayhuayna habrían pertenecido a este conquistador español que participó también en la fundación y traslado de la ciudad de Huánuco, por tales méritos le correspondía a Gómez Arias Dávila estas tierras que le fueron otorgados por el rey de España en el año de 1549. Durante la llegada de los españoles estas tierras pertenecieron a don Martín Alfonso de Mercadillo, hermano de madre del conquistador español don Francisco Pizarro.
        </Typography>
        <br />
        <Typography>
          El territorio que actualmente ocupa Cayhuayna, el Janan Pillco del Ichog Pillco Mayo, en épocas precolombinas pertenecieron al grupo étnico nativo los Mazgos y el Rurin Pillco estaban ocupados por los Chupachos.
        </Typography>
        <br />
        <Typography>
          Gómez Arias Dávila habría sido el primer encomendero que ocupó el repartimiento de Chupachos, así pues, Gómez Arias Dávila era el encomendero del valle de Huallaga, según el Titulo otorgado por el Virrey Conde de Nieva por provisión del 1 de setiembre de 1548 que le otorgó la encomienda de los Chupachos que inicialmente perteneció a Martín de Alcántara. Gómez Arias Dávila muere en la ciudad de Huánuco el 30 de Julio de 1562, sus restos según Vara llanos yace en la Iglesia de San Francisco, donde está sepultado.
        </Typography>
        <br />
        <Typography>
          Cayhuayna, al igual que otros territorios de Huánuco, al morir Gómez Arias Dávila, habría pasado por varios dueños, tales como: Ricardo Dávila Martel, Bernardo Quiroz, hasta que el 5 de enero de 1563 le fue conferido por Conde de Nieva como heredero a Juan Arias Dávila, hijo menor que quedó bajo la tutela de su madre doña María Castellón y de Lara, quien gestionó su reconocimiento como sucesor en la encomienda de los Chupachos, tomando posesión el 1 de marzo de 1563.
          En el año 1646, propietario de las tierras de Cayhuayna era uno de los hermanos de Diego de las Casas, quien, en escritura pública otorgada en la ciudad de Lima, con fecha 5 de julio de 1646 vendió a Francisco Fernández de García, convirtiéndose en dueño de las chacras de Cayhuayna, ubicadas en las afueras de la ciudad de Huánuco.
        </Typography>
        <br />
        <Typography>
          De esta fecha hasta el periodo de la república se desconoce los posibles dueños del territorio de Cayhuayna, una investigación especializada y minuciosa podrían determinar en orden cronológico los dueños por la que pasó las tierras de Cayhuayna.
        </Typography>


        <Typography variant='h4' component='h4' sx={{ color: '#12B1FA', fontSize: 20 }}>
          Cayhuayna en el periodo de la República
        </Typography>
        <br />
        <Typography>
          Cayhuayna en los primeros años de la etapa republicana pasó a formar parte de una Hacienda hasta el año de 1974. Cayhuayna pertenecía al terrateniente o hacendado llamado Augusto Figueroa Villamil, el último de los que condujo esta hacienda era la señora Sofía Figueroa.
        </Typography>
        <br />
        <Typography>
          Con la Ley de la Reforma Agraria, en el gobierno del Presidente de la República el General Juan Velasco Alvarado fue afectado Cayhuayna, pasando en consecuencia a formar parte de una empresa asociativa conducido por sus trabajadores bajo la denominación de Cooperativa Agraria de Trabajadores General “Juan Velasco Alvarado” que duró hasta el año de 1989.
        </Typography>
        <br />

        <Typography variant='h4' component='h4' sx={{ color: '#12B1FA', fontSize: 20 }}>
          Cayhuayna a partir del año de 1974.
        </Typography>
        <br />
        <Typography>
          Cayhuayna a partir del año 1974, se convierte en una Cooperativa Agraria de Trabajadores “General Velasco Alvarado”, empresa asociativa conformado por 79 socios.
        </Typography>
        <br />
        <Typography>
          La Cooperativa de Cayhuayna, territorialmente estaba conformado por 4 parcelas denominado lotes: lote 1, Lote 2, Lote 3 y Lote 4.
        </Typography>
        <br />
        <Typography>
          Asimismo, estaban inmerso en esta Cooperativa los predios de Huancachupa y Pitumama con 615 Hectáreas, igualmente conformaban Colpa Alta y Chicchuy. La cooperativa tuvo vigencia por un lapso de 14 años hasta el año de 1989 a partir de este año, las cooperativas acuerdan parcelarse las tierras quedando parcelada dicha Cooperativa.
        </Typography>
        <br />


        <Typography variant='h4' component='h4' sx={{ color: '#12B1FA', fontSize: 20 }}>
          Cayhuayna hasta la actualidad
        </Typography>
        <br />
        <Typography>
          Mediante Resolución Directoral Nº. 0105-89-UNA-XIV-III, de fecha 23 de junio de 1989 aprueban la parcelación las tierras que anteriormente pertenecían a la Cooperativa Agraria de Trabajadores “General Velasco Alvarado” de Cayhuayna, beneficiándose con esta parcelación 113 socios, quienes desde el año de 1989 hasta la actualidad en una zona que viene poblándose cada vez más, corriendo el riesgo incluso de tuburizarse por falta de una planificación urbanística con proyecciones futuristas del 2000 al 2022.
        </Typography>
        <br />
        <Typography>
          El inicio de la Expansión Urbana en Cayhuayna, se remonta al año de 1985, cuando la Directiva de la Cooperativa Agraria de Trabajadores acuerdan transferir en propiedad a una Asociación Pro vivienda una extensión de 74 Hectáreas, 7500 metros cuadrados para fines de expansión urbana. Cayhuayna a partir de esta decisión, debido al fenómeno del crecimiento poblacional y demográfico que afecta a la ciudad de Huánuco, viene poblándose aceleradamente.
        </Typography>
        <br />
        <Typography>
          A partir del año de 1993, en Cayhuayna se instalan una serie de Instituciones Públicas, construyéndose las Infraestructuras de: ENCI, Empresa Nacional de Comercialización de Insumos, empresa del Estado que ocupa una extensión de 0.5 hectáreas. Se construye asimismo la ciudad Universitaria de la Universidad Nacional “Hermilio Valdizán” de Huánuco, se implementa el Huerto Frutícola de esta Universidad, se construye el Pabellón de la Facultad de Medicina Veterinaria y Zootecnia.
        </Typography>
        <br />
        <Typography>
          En Cayhuayna Alta, se construye el nuevo Penal de Huánuco, se instala la Garita de Control de la Policía Nacional, se instala el Cuartel General del Ejército en la Zona Yanag y se proyecta la construcción de otras obras más.
        </Typography>
        <br />
        <Typography>
          Con la finalidad de sensibilizar a los representantes de la población de Cayhuayna y anexos e impulsar la Distritalización, se acuerda convocar al Primer Congreso de Unificación y Centralización de las organizaciones Sociales de base de Cayhuayna, lo cual se llevó a cabo los días 5 y 6 de junio de 1999, en la que se constituye el Comité Central de Distritalización y Desarrollo Integral de Cayhuayna, siendo ratificado por unanimidad como Presidente de este Comité, el Lic. Alejandro Rubina López e integrado por destacados dirigentes sociales de base y profesionales que acompañaron en la gesta histórica de la Distritalización de Cayhuayna y Anexos entre ellos: Aurelio Maíz Ramírez, Prof. Antero Escobar Calderón, Sr. Pedro Castillo Calixto, que dieron inicio al proceso de Distritalización de Cayhuayna en su primera etapa.
        </Typography>
        <br />
        <Typography>
          Luego en la segunda etapa se incorporaron muchos profesionales y dirigentes aproximadamente en un número de cien personas aproximadamente, entre ellos: Prof. Abelino Chávez Dueñas, Walter Castillo Rivera, Dionicia Quispe Morales, Roberto Tucto Trinidad, Severo Tiburcio Soto, Julia Rubio Palermo, Nelly Escobal Trujillo, Nelly Flor Bravo García, Jesús Basilio Tolentino, Roberto Mogollón Ermitaño, Prof. Cleofé Chávez Solórzano, Sofía Acuña Salgado, Elsa Pío Aparicio, Eva Ureta Calderón, Prof. José Luis Huamán Retis, Eusebio Tadeo Falcón y otros más.
        </Typography>
        <br />
        <Typography>
          El Comité Central de Distritalización y Desarrollo Integral de Cayhuayna y Anexos, el 24 de junio de 1999, con motivo de la llegada a la ciudad de Huánuco, en aquel entonces el Congresista de la República y Presidente del Consejo de Ministros Ing. Víctor Joy Way Rojas, en acto público en el frontis de la ciudad Universitaria de Cayhuayna se hizo entrega de un Perfil del Proyecto de Distritalización de Cayhuayna, documento que no prosperó, debido que para crear distritos se debe cumplir con los requisitos señalados en las normas técnicas de demarcación territorial, D.S. N° 044-PCM-90, en consecuencia se tuvo que elaborar un Proyecto y Expediente técnico de Distritalización de Cayhuayna de acuerdo a la mencionada norma. El proyecto de Distritalización de Cayhuayna, se hace entrega oficialmente por mesa de partes del CTAR, con fecha 16 de setiembre de 1999, conteniendo dos volúmenes, el primer proyecto en sí y el segundo conteniendo cuatro mil quinientas firmas de respaldo quinientas firmas adherentes de los ciudadanos de Cayhuayna que respaldaban el deseo de la creación de un nuevo Distrito en la provincia y Departamento de Huánuco. Este Proyecto se presentó ante el CTAR HCO y este dio trámite ante las instancias superiores por conducto regular, principalmente al Concejo de Ministros con fecha 23 de setiembre de 1999 y Concejo de Ministros luego de su revisión, nos devuelve el proyecto con fecha 15 de octubre de 1999 con siete observaciones para su respectiva subsanación.
        </Typography>
        <br />
        <Typography>
          Dichas observaciones se subsanan y nuevamente se devuelve el expediente técnico de Distritalización de Cayhuayna, entregándose nuevamente por mesa de partes del CTAR con fecha 12 de noviembre de 1999, y el CTAR Huánuco cumple nuevamente por segunda vez con dar trámite al enviándolo ante el Consejo de Ministros. En esta instancia superior se produce otra vez una tercera observación, formulándose tres observaciones casi imposibles de subsanar por parte de nosotros, sin embargo, con la Participación del presidente del CTAR Huánuco el Eco. Billy Herrera y el apoyo del Congresista Joy Way Rojas se logra subsanar dichas observaciones. Una vez más por tercera y última vez, el CTAR Huánuco, cumple con enviar al Consejo de Ministros el Proyecto definitivo de Distritalización de Cayhuayna. El proyecto final y definitivo fue elaborado por un equipo técnico de especialistas conformado por 15 profesionales especialmente contratadas por el CTR Huánuco, que cumplieron su trabajo a dedicación exclusiva, logrando terminar el proyecto exactamente en 12 días.
        </Typography>
        <br />
        <Typography>
          El Proyecto final y definitivo elaborado por el CTAR Huánuco, fue tramitado inmediatamente ante el Consejo de Ministros, recibiendo el expediente con fecha 12 de diciembre de 1999. Dicho Proyecto se pone a consideración del pleno del Consejo de Ministros, aprobándose por el Consejo de Ministros con fecha 14 de diciembre. Con fecha l5 de diciembre del mismo año es inmediatamente enviado al Congreso de la Republica con carácter de urgente. El Congreso de la República lamentablemente había concluido sus actividades legislativas de la segunda Legislatura ordinaria de 1999 a las 4 de la mañana del mismo día 15 de diciembre de 1999.
        </Typography>
        <br />
        <Typography>
          El Poder Legislativo de la República, recibe el Expediente Técnico de Demarcación Territorial de Pillco Marca y logra emitir la Resolución Legislativa Nº 007 con fecha 15 de diciembre de 1999, otorgándole facultades a la Comisión Permanente del Congreso para la promulgación de la Ley de Creación del nuevo Distrito de Cayhuayna en un plazo máximo de 60 días, es decir hasta el 28 de febrero del 2000, lo cual lamentablemente no ocurre por diversas circunstancias políticas, postergándose hasta el mes de mayo la promulgación de la Ley que crea el nuevo Distrito de Pillco Marca, en la provincia y Departamento de Huánuco.
        </Typography>
        <br />
        <Typography>
          El Proyecto de Ley Nº. 5525, que proponía la creación del Distrito de Pillco Marca, se debatió y aprobó en la primera Legislatura Ordinaria Congreso de la República, el 27 de abril del 2000 quedando aprobado por unanimidad el Proyecto dictaminado por la Comisión de Demarcación Territorial del Congreso que Presidió la Congresista María Jesús Espinoza. la Ley Creación del Distrito Nº 27258 se promulga el 5 de mayo del 2000, publicándose en el diario oficial el Peruano el 7 de mayo del 2000 publicándose en el diario oficial el Peruano el 07 de mayo del año 2000, creándose de esta manera el nuevo distrito de Pillco Marca.
        </Typography>
        <br />
        <Typography>
          Muchos, no sólo dudaban de la dación de esta Ley, sino que no querían que se creara el Distrito por intereses mezquinos y particulares, incluso quisieron hacer anular la Ley de creación del Distrito, argumentando de que el distrito había sido creado sólo por cuestiones políticas, versión antojadiza y falsa. El Distrito de Pillco Marca, se creó en base a un Proyecto y cumpliendo l D.S. Nº. 044-PCM-90, norma legal para la demarcación territorial en la que se señala los requisitos para la creación del Distritos y Provincias, en consecuencia, el Distrito de Pillco Marca se crea cumpliendo todos los requisitos exigidos por ley de demarcación territorial.
          En todo el proceso de Distritalización, el principal protagonista ha sido el Lic. Alejandro Rubina López, pues es uno de sus principales gestores ya que ocupó el cargo de presidente del Comité de Central Distritalización y Desarrollo Integral de Cayhuayna. Cumpliendo el encargo de la población concluyó con éxito su gestión en forma acertada sin ningún interés, ni condición alguna, el único interés fue dotar de un autonomía política, administrativa y económica a esta parte del territorio huanuqueño para contribuir en su desarrollo integral. El Distrito se creó en un tiempo record, exactamente siete meses de incansable gestión, record nunca antes visto o registrado en la historia de las creaciones de Distrito tanto en el Departamento de Huánuco y en el resto del país, con lo cual quedo demostrado su capacidad de gestión y liderazgo al servicio del pueblo, desde su creación política han pasado tres gestiones municipales 2003-2006 Profesor Alejandro Rubina López, gestión 2007-2010 Mg. Isabel Dávila Cárdenas y la actual gestión 2011-2014 el Lic. Rolando Raúl Meza Alvarado que viene trabajando pueblo y municipio juntos por el desarrollo del distrito de Pillco Marca.
        </Typography>
      </Box>

      {/* <Box sx={{ margin: '60px 100px 20px 100px' }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <img
              src="/muni4.jpg"
              alt="portada"
              style={{ borderRadius: 40, width: '100%', height: 300, objectFit: 'cover' }}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <img
              src="/muni5.jpg"
              alt="portada"
              style={{ borderRadius: 40, width: '100%', height: 300, objectFit: 'cover' }}
            />
          </Grid>
        </Grid>
      </Box> */}


    </>
  )
}

export default Historia