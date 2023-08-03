import React from 'react';
import logo from '../Image/logo.png';

const company = () => {
  return (
    <div className='w-screen pb-16'>
       <div className='px-32 pt-12 flex justify-center items-center'>
          <div className='text-center'>
            <h2 className='pb-16 font-semibold text-2xl'>10,000+ companies are winning with Job Portal</h2>
            <div><img src={logo} alt="logos"/></div>
          </div>
       </div>
    </div>
  )
}

export default company