import React from 'react'

const Instructions = () => {
  return (
    <div className="w-full h-96 flex-row lg:flex">
      <div className="m-auto my-12 w-72 h-80 border-2 border-libuGreen rounded-xl relative">
        <div className="text-libuGreen text-4xl font-bold w-14 h-14 rounded-full bg-slate-600 flex absolute -mt-6 -ml-6">
          <p className="m-auto">1.</p>
        </div>
        <div className="mt-12 w-60 h-60 m-auto">
          <div className="">
            <p className="m-auto text-2xl font-bold text-libuPink">
              Instruccion uno
            </p>
          </div>
          <div className="w-full h-5/6 flex">
            <p className="my-auto text-white">descripcion</p>
          </div>
        </div>
      </div>
      <div className="m-auto my-12 w-72 h-80 border-2 border-libuGreen rounded-xl relative">
        <div className="text-libuGreen text-4xl font-bold w-14 h-14 rounded-full bg-slate-600 flex absolute -mt-6 -ml-6">
          <p className="m-auto">2.</p>
        </div>
        <div className="mt-12 w-60 h-60 m-auto">
          <div className="">
            <p className="m-auto text-2xl font-bold text-libuPink">
              Instruccion dos
            </p>
          </div>
          <div className="w-full h-5/6 flex">
            <p className="my-auto text-white">descripcion</p>
          </div>
        </div>
      </div>
      <div className="m-auto my-12 w-72 h-80 border-2 border-libuGreen rounded-xl relative">
        <div className="text-libuGreen text-4xl font-bold w-14 h-14 rounded-full bg-slate-600 flex absolute -mt-6 -ml-6">
          <p className="m-auto">3.</p>
        </div>
        <div className="mt-12 w-60 h-60 m-auto">
          <div className="">
            <p className="m-auto text-2xl font-bold text-libuPink">
              Instruccion tres
            </p>
          </div>
          <div className="w-full h-5/6 flex">
            <p className="my-auto text-white">descripcion</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Instructions
