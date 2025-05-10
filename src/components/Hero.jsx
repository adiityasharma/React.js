import React from 'react'

function Hero() {
  return (
    <>
      <div className='flex px-22 w-full h-150 mt-4'>
        <div className='w-1/2  h-full'>
          <div className='w-full h-1/2  '>
            <h1 className='text-8xl font-bold'>YOUR FEET DESERVE</h1>
            <h1 className='text-8xl font-bold'>THE BEST</h1>
          </div>
          <div>
          <p className='w-2/3 font-medium mt-5'>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
          <div className='flex w-2/3 gap-8 mt-8'>
            <button className='bg-red-400 text-white py-1 px-4 rounded cursor-pointer'>Shop Now</button>
            <button className='border py-1 px-4 rounded cursor-pointer '>Catagory</button>
          </div>
            <div className='flex gap-4 items-center mt-5'>
              <p>Also Available on</p> 
              <img className='w-8 cursor-pointer' src="./public/amazon_icon.png"/> 
              <img className='w-8 cursor-pointer' src="./public/flipkart_icon.png"/> 
              </div>
            <div>
          </div>
          </div>
        </div>
        <div className='flex items-center w-1/2 h-full'>
          <img className='' src="https://img.freepik.com/free-photo/shoes_1203-8153.jpg?t=st=1746699472~exp=1746703072~hmac=d2e100888a70161e5aa0fc69ae8281288ca769bccc14f4cab9b77287b63ff05d&w=1380" alt="" />
        </div>
      </div>
    </>
  )
}

export default Hero
