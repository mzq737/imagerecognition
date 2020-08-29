import React from 'react';
import Tilt from 'react-tilt'
import faceId from './face-id.png';
import './Logo.css';


const Logo = () => {
  return (
    <div className='ma4 mt0'>
      <Tilt className="Tilt br4 shadow-2" options={{ max : 55 }} style={{ height: 140, width: 140 }} >
        <div className="Tilt-inner pa3">
          <img style={{paddingTop: '1px'}} src={faceId} alt='Face ID Logo'/></div>
      </Tilt>

    </div>
  );
}

export default Logo;