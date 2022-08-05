import React from 'react'
import Title from '../generals/Title'

const PlaceInfo = ({ place }) => {
  return (
    <>
      <div className="relative w-10/12 m-auto rounded-lg">
        <img
          src={place.imgPort}
          className="opacity-75 w-full h-full object-center object-cover rounded-lg absolute -z-50"
        ></img>
        <div className="flex flex-col-reverse md:flex-row absolute rounded-md inset-x-0 bottom-0 md:bg-gradient-to-r bg-gradient-to-t from-white w-full h-full">
          <div className="my-auto w-full h-2/3 md:w-1/2 md:h-1/2 bg-white rounded-lg">
            <Title title={place.name} />
            <div className="p-2">
              <p>{place.desc}</p>

              <div className="flex">
                <i className="bi bi-geo-alt mr-1 text-lg"></i>
                <p>{place.ubi}</p>
              </div>
            </div>
          </div>
          <div className="flex w-full md:w-1/2 h-full">
            <img
              src={place.imageSrc}
              className="border-2 shadow-lg ml-auto lg:mr-28 m-auto md:my-auto w-40 h-40 md:w-48 md:h-48 lg:w-60 lg:h-60 object-center object-cover rounded-lg"
            ></img>
          </div>
        </div>

        <div className="w-96 h-96"></div>
      </div>
      {/*
       */}
    </>
  )
}

export default PlaceInfo
