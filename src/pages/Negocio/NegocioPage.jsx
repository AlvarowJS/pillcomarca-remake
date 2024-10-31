import React, { useRef, useEffect, useState } from 'react'
import QRCode from 'qrcode';
import { useLocation, useParams } from 'react-router-dom';
import bdNegocio from '../../api/bdNegocio';
import Negocio from './Negocio';
const URL = '/v1/buscar-negocio/'
const qrText = "http://localhost:5173";
const URLIMAGENES = "http://127.0.0.1:8000/storage/negocio/"

const NegocioPage = ({ negocio }) => {
  const id = useParams()
  const location = useLocation()
  const [data, setData] = useState()
  const canvasRef = useRef(null);
  const QR = `${qrText}${location.pathname}`



  useEffect(() => {
    bdNegocio.get(`${URL}${id.id}`)
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  }, [])

  useEffect(() => {
    if (canvasRef.current) {
      QRCode.toCanvas(canvasRef.current, QR, { width: 200 }, (error) => {
        if (error) console.error(error);
      });
    }
  }, [QR]);



  return (
    <div style={{ textAlign: 'center', marginTop: '100px', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ fontSize: '40px', marginBottom: '70px', color: '#333' }}>{data?.nombrenegocio}</h2>

      <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'flex-start', padding: '0 150px' }}>
        <div style={{ textAlign: 'left', maxWidth: '600px' }}>
          <p style={{ fontSize: '30px', lineHeight: '1.5', color: '#555' }}>
            <strong>Ubicación:</strong> {data?.lugar}
          </p>
          <p style={{ fontSize: '30px', lineHeight: '1.5', color: '#555' }}>
            <strong>Actividad Económica:</strong> {data?.actividad_economica?.nombre}
          </p>
          <p style={{ fontSize: '30px', lineHeight: '1.5', color: '#555' }}>
            <strong>Tipo de Negocio:</strong> {data?.subcategoria?.rubro}
          </p>
          <p style={{ fontSize: '30px', lineHeight: '1.5', color: '#555' }}>
            <strong>Dirección:</strong> {data?.direccion}
          </p>
        </div>

        <div>
          <img
            width={500}
            height={290}
            src={`${URLIMAGENES}${data?.imagen}`}
            alt={data?.nombrenegocio}
            style={{ borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
          />
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '40px', gap: '20px' }}>
        <div style={{ fontSize: '18px', color: '#333' }} dangerouslySetInnerHTML={{ __html: data?.redsocial }} />
        <canvas ref={canvasRef} style={{ border: '1px solid #ccc', borderRadius: '5px' }}></canvas>
      </div>
    </div>
  );
}

export default NegocioPage