function generateQR() {
  const nombre = document.getElementById('nombres').value;
  const apellidos = document.getElementById('apellidos').value;
  const telefono = document.getElementById('telefono').value;

  const contactInfo = `BEGIN:VCARD\nVERSION:3.0\nFN:${nombre}\nAPELLIDOS:${apellidos}\nTEL:${telefono}\nEND:VCARD`;

  const qrDiv = document.getElementById('qrcode');
  qrDiv.innerHTML = ''; // Limpiar cualquier código QR existente
  
  const typeNumber = 4;
  const errorCorrectionLevel = 'L';
  const qr = qrcode(typeNumber, errorCorrectionLevel);
  qr.addData(contactInfo);
  qr.make();
  
  const qrImage = qr.createImgTag(6);
  qrDiv.innerHTML = qrImage;
  
}
