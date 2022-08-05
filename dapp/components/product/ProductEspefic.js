import React, { useEffect, useState } from 'react'
import products from '../../data/productsList.js'

export default function ProductEspecifc() {
  const [product, setProduct] = useState([])
  useEffect(() => {
    setProduct(products)
  }, [])
  /*
  {product.map((p)=>(
    ))}
    */
  return (
    <div className="bg-gray-50 p-3 rounded-lg shadow-sm md:w-10/12 m-3 md:m-auto lg:flex">
      <div className="mb-5 lg:mb-0 w-full">
        <div className="bg-gray-200 w-88 h-88 md:w-111 md:h-111 lg:w-96 lg:h-96 xl:w-126 xl:h-126 rounded-lg m-auto flex">
          <img
            src={products[0].imageSrc}
            className="w-full h-full object-center object-cover rounded-lg"
          />
        </div>
      </div>
      <div className="w-full">
        <div className="bg-white w-88 h-88 md:w-111 md:h-111 lg:w-96 lg:h-96 xl:w-10/12 xl:h-126 rounded-lg m-auto">
          <div className="w-full h-full p-3">
            <div className="h-1/5 flex">
              <div className="my-auto">
                <h1 className="text-3xl">{products[0].name}</h1>
                <h2 className="text-xl">{products[0].place}</h2>
              </div>
            </div>
            <div className="h-2/5 my-auto flex">
              <div className="my-auto w-4/5">
                <p>{products[0].imageAlt}</p>
              </div>
            </div>
            <div className="h-2/5 my-auto flex">
              <div className="my-auto w-full">
                <div className="lg:flex">
                  <div className="flex shadow-md rounded border-libuPurple bg-white border-2 h-10 lg:w-1/2 mx-1 mb-1">
                    <div className=" m-auto text-center text-xs md:text-left font-medium">
                      E 0.05 ETH
                    </div>
                  </div>
                  <div className="flex shadow-md rounded bg-libuGreen text-libuDarkPurple h-10 lg:w-1/2 mx-1 mb-1 hover:bg-teal-300">
                    <div className="w-auto m-auto text-xs font-medium">
                      comprar
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
