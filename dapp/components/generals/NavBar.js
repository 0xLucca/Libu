import React from 'react'
import logo from '../../libu.svg'
import logoMin from '../../libu-min.svg'
import { Link } from 'react-router-dom'
import Buttons from '../generals/Buttons'
import ConnectWallet from './ConnectWallet'
function NavBar() {
  return (
    <div className=" h-16 flex">
      <div className=" w-14 h-14 my-auto flex">
        <img src={logoMin} className="h-8 m-auto" alt="logo" />
      </div>
      <div className="m-auto w-full flex">
        <div className="m-auto w-6/12 flex">
          <input
            className=" 
            w-full
            mx-auto 
            border-2 
            border-libuDarkPurple
            rounded-md 
            p-1 
          focus:border-libuPurple
            "
            placeholder="buscar"
          ></input>
          <div className="hidden md:block">
            <Buttons text={'Buscar'} />
          </div>
          <div className="block md:hidden">
            <Buttons text={<i className="bi bi-search"></i>} />
          </div>
        </div>
      </div>
      <div className="ml-auto my-auto hidden md:block">
        {/*
        <ul className="flex">
          <li className="px-2">
            <Link
              className="text-libuDarkPurple hover:text-libuPurple active:text-libuPink"
              to={'/home'}
            >
              home
            </Link>
          </li>
          <li className="px-2">
            <Link
              className="text-libuDarkPurple hover:text-libuPurple active:text-libuPink"
              to={'/places'}
            >
              places
            </Link>
          </li>
          <li className="px-2 pr-8">
            <Link
              className="text-libuDarkPurple hover:text-libuPurple active:text-libuPink"
              to={'/products'}
            >
              products
            </Link>
          </li>
          <li className="px-2 pr-8">
            <ConnectWallet />
          </li>
        </ul>
          */}
      </div>
    </div>
  )
}

export default NavBar
