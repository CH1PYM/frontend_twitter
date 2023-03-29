import React, { useState, useEffect } from 'react';

export function ImageDisplay() {
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/users/downloadk')
      .then(response => response.blob())
      .then(blob => {
        const objectUrl = URL.createObjectURL(blob);
        setImageSrc(objectUrl);
      });
  }, ['http://localhost:3000/users/downloadk']);

  return (
    <img src={imageSrc} alt="Downloaded from backend" />
  );
}