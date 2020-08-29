import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className='f3'>
        {'This App can detect faces in your pictures'}
      </p>
      <div className='center'>
        <div className='form pa4 br4 shadow-2'>
          <input className='f4 pa2 w-70' type='text' onChange={onInputChange}/>
          <button 
            style={{margin: '7px'}} 
            className='br-pill w-20 grow f4 link ph3 pv2 div white b--solid bg-light-purple'
            onClick={onButtonSubmit}
          >Detect</button>
        </div>
      </div>
    </div>
  );
}

export default ImageLinkForm;