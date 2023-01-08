import React from 'react'

import welcome from '../../assets/welcome.jpg'

const Welcome = () => {
  return (
    <div className='flex justify-center items-center p bg-[#E0F4F1] my-6 rounded-2xl h-11/12 px-48 xl:w-full lg:w-full'>
        <img src={welcome} alt="welcome" className='object-cover rounded-xl' />
    </div>
  )
}

export default Welcome