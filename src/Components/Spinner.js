import React from 'react';
import loading from'./Spinner-1s-65px.gif';

const Spinner =()=> {
  
    return (
      <div className='text-center' >
        <img src={loading} alt="loading" />
      </div>
    )
  
}
export default Spinner