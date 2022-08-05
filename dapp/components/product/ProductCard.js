import React from 'react'

function ProductCard({ products }) {
  return (
    <div className="m-2 w-40 md:w-52">
      <div
        className="
        w-40
        h-60
        md:w-52
        md:h-80
        rounded-md 
        shadow-md 
        overflow-hidden 
        duration-200 
        hover:drop-shadow-xl
        "
      >
        <div className="w-full h-full relative">
          <img
            src={products.imageSrc}
            className="w-full h-full object-center object-cover"
          />
          <div className="absolute rounded-md inset-x-0 bottom-0 bg-gradient-to-t from-white w-full h-1/2"></div>
          <div className="absolute inset-x-0 bottom-0">
            <div className="rounded bg-white m-1 p-1">
              <h3 className="font-medium text-card-title">{products.name}</h3>
              <p className="break-all hidden md:block text-card-text leading-3 my-auto h-6 overflow-auto">
                {products.desc}
              </p>
            </div>
            <div className="flex">
              <div className="flex shadow-md rounded border-libuPurple bg-white border-2 h-10 w-3/4 md:w-1/2 mx-1 mb-1">
                <div className="w-1/5 md:w-1/5 m-auto text-right">E</div>
                <div className="w-4/5 md:w-3/5 m-auto text-center text-xs md:text-left font-medium">
                  {products.price} ETH
                </div>
              </div>
              <button className="flex shadow-md rounded bg-libuGreen text-libuDarkPurple h-10 w-1/4 md:w-1/2 mx-1 mb-1 hover:bg-teal-300">
                <div className="hidden md:block w-auto m-auto text-xs font-medium">
                  comprar
                </div>
                <div className="md:hidden w-auto m-auto font-medium">+</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
