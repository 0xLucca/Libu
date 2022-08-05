import React from 'react'

const HeroTitle = () => {
  return (
    <div className="md:flex m-auto">
      <div className="h-18 overflow-hidden">
        <ul className="text-libuGreen text-7xl font-bold font-inter leading-normal 3s animate-wiggle">
          <li className="mr-6">Compra</li>
          <li className="md:ml-14">Vende</li>
        </ul>
      </div>
      <p className=" text-libuGreen text-7xl font-bold font-inter">
        entradas con cripto
      </p>
    </div>
  )
}

export default HeroTitle
