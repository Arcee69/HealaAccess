import React from 'react'
import Copy from '../components/Copy'

const Success = () => {
  return (
    <div className=" h-screen flex flex-col items-center text-[#2c2c2c] font-euclid m-5">
    
      <>
        <h1 className="text-3xl font-semibold text-center my-5">
          Successful
        </h1>
        <div className="max-w-[95%] lg:max-w-screen-sm p-5 rounded-md border py-10  border-[#c6c6c6] space-y-5 m-2">      
          <div className="md:flex flex-col gap-2 items-center justify-center">
            <img src='https://i.gifer.com/7efs.gif' className='w-[50%] h-[50%] mx-auto -mt-10' />
            <strong className='text-center'>Click or Copy the Link to Get Started </strong>
            <Copy text="https://onelink.to/wqu28p" name="meeting link" className="flex items-center justify-center text-center mx-auto" />
          </div>
       
        </div>
      </>
    
  </div>
  )
}

export default Success