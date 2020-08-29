import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({imageUrl, box}) => {
    return (
      <div className='center ma'>
        <div className='absolute mt2'>
          <img id='inputimage' src={imageUrl} alt='' width='500px' height='auto'/>
          <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}>
            <div className='bounding-box-concepts'>
              <div className='bounding-box__concept'>
                <span className="concept__name">{box.face}</span>
                <span className="concept__prediction-val">{box.num}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
 
export default FaceRecognition;