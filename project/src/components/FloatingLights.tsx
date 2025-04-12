import React from 'react';

const FloatingLights = () => {
  return (
    <>
      <div className="floating-light floating-light-sm" style={{ top: '10%', left: '5%', opacity: '0.4' }} />
      <div className="floating-light floating-light-md" style={{ top: '40%', right: '10%', opacity: '0.3' }} />
      <div className="floating-light floating-light-lg" style={{ bottom: '15%', left: '15%', opacity: '0.5' }} />
      <div className="floating-light floating-light-sm" style={{ top: '20%', right: '25%', opacity: '0.4' }} />
      <div className="floating-light floating-light-md" style={{ bottom: '30%', right: '20%', opacity: '0.3' }} />
      <div className="floating-light floating-light-lg" style={{ top: '60%', left: '30%', opacity: '0.2' }} />
      <div className="floating-light floating-light-sm" style={{ bottom: '40%', left: '40%', opacity: '0.4' }} />
      <div className="floating-light floating-light-md" style={{ top: '70%', right: '35%', opacity: '0.3' }} />
    </>
  );
};

export default FloatingLights;