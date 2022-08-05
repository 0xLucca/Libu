import React from 'react'

const PlacesCards = ({ objPlace }) => {
  return (
    <div className="h-72 w-50 md:w-64 xl:w-72 rounded-xl border-2 hover:shadow-lg duration-100 m-5">
      <div className="w-full h-2/5 rounded-t-xl flex bg-slate-100 relative">
        <img
          src={objPlace.imgPort}
          className="w-full h-full rounded-t-xl object-center object-cover absolute brightness-50"
        />
        <div className="w-full h-full flex">
          <div className="w-20 h-20 rounded-xl border-2 m-auto z-50">
            <img
              src={objPlace.imageSrc}
              className="w-full h-full rounded-xl object-center object-cover"
            />
          </div>
        </div>
      </div>
      <div className="w-full h-3/5 rounded-b-xl bg-white">
        <div className="w-full h-1/2 flex">
          <div className="p-2 m-auto">
            <div className="flex">
              <p className="text-2xl m-auto">{objPlace.name}</p>
            </div>
            <div className="flex text-gray-400">
              <i className="bi bi-geo-alt mr-1 text-lg bg-white flex m-auto"></i>
              <p className="text-lg m-auto">{objPlace.ubi}</p>
            </div>
          </div>
        </div>
        <div className="w-full h-1/2 text-gray-400">
          <div className="p-2 h-full flex m-auto">
            <p className="text-md m-auto text-center w-10/12 h-4/5 indent-px leading-none break-words overflow-hidden">
              {objPlace.desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlacesCards
