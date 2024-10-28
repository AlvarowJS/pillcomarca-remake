import React, { useRef, useEffect } from 'react'
import QRCode from 'qrcode';

const NegocioPage = () => {
  const canvasRef = useRef(null);
  const qrText = "http://localhost:3000"; // Texto que quieres codificar en el QR

  useEffect(() => {
    if (canvasRef.current) {
      QRCode.toCanvas(canvasRef.current, qrText, { width: 200 }, (error) => {
        if (error) console.error(error);
      });
    }
  }, [qrText]);



  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2>Negocio Page</h2>
      <canvas ref={canvasRef}></canvas>
      <p>Escanea el código QR para ir a: {qrText}</p>
    </div>
  )
}

export default NegocioPage