import React from 'react'

const Footer = () => {
  return (
    <div className="w-full h-72 md:h-64 bg-libuDarkPurple flex">
      <div className="w-11/12 m-auto">
        <div className="">
          <p className="text-libuGreen font-black text-3xl">LIBU</p>
        </div>
        <div className="md:flex">
          <div className="w-5/12 md:m-auto flex">
            <div className="my-auto ">
              <ul className="text-libuGreen ml-6">
                <li>Trabaja con LIBU</li>
                <li>Preguntas frecuentes</li>
                <li>Locales con LIBU</li>
                <li>Manual de uso</li>
              </ul>
            </div>
          </div>
          <div className="w-5/12 md:m-auto mt-4 flex">
            <div className="my-auto text-libuGreen">
              <p className="text-xl">Contacto</p>
              <div className="text-xl w-28 flex">
                <i className="m-auto bi bi-twitter"></i>
                <i className="m-auto bi bi-discord"></i>
                <i className="m-auto bi bi-envelope-fill"></i>
              </div>
            </div>
          </div>
          {/*
          <div className="w-5/12 m-auto bg-slate-600">
            <div className="bg-slate-900 text-libuGreen">
              <p className="text-xl">Contacto</p>
              <div className="text-xl w-28 flex">
                <i className="m-auto bi bi-twitter"></i>
                <i className="m-auto bi bi-discord"></i>
                <i className="m-auto bi bi-envelope-fill"></i>
              </div>
            </div>
          </div>
        */}
        </div>
      </div>
      {/*
       */}
    </div>
  )
}

export default Footer
