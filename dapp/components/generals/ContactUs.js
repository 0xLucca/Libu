import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Image from 'next/image';

export const ContactUs = ({ address }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_p3mvy0s',
        'template_11r2o3y',
        form.current,
        'HrDv42t23Z1swRRZV'
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form className="flex flex-col" ref={form} onSubmit={sendEmail}>
      <label className="font-sora text-libuWhite">Email de contacto</label>
      <input
        className="my-2 p-1 font-sora text-libuWhite bg-libuWhite3 rounded border border-libuGreen focus:border-libuBlue focus:border-2 focus:ring-0"
        type="email"
        name="event_email"
      />
      <label className="font-sora text-libuWhite">Nombre del evento</label>
      <input
        className="my-2 p-1 font-sora text-libuWhite bg-libuWhite3 rounded border border-libuGreen focus:border-libuBlue focus:border-2 focus:ring-0"
        type="text"
        name="event_name"
      />
      <label className="font-sora text-libuWhite">Precio</label>
      <div className="flex">
        <input
          className="my-2 p-1 w-full font-sora text-libuWhite bg-libuWhite3 rounded border border-libuGreen focus:border-libuBlue focus:border-2 focus:ring-0"
          type="text"
          name="event-price"
        />
        <div className="my-2 ml-2 py-1 px-2 font-sora text-libuWhite bg-libuWhite3 rounded border border-libuGreen">
          <p>POL</p>
        </div>
      </div>
      <label className="hidden font-sora text-libuWhite">Address</label>
      <input
        className="hidden my-2 p-1 font-sora text-libuBlack bg-libuWhite3 rounded border border-libuGreen focus:border-libuBlue focus:border-2 focus:ring-0"
        value={address}
        placeholder={address}
        type="text"
        name="address"
      />
      <label className="font-sora text-libuWhite">Descripcion del evento</label>
      <textarea
        className="my-2 p-1 font-sora text-libuWhite bg-libuWhite3 rounded border border-libuGreen focus:border-libuBlue focus:border-2 focus:ring-0"
        name="event_description"
      />

      <input
        className="my-2 p-2 bg-libuGreen rounded font-sora text-libuBlack font-medium cursor-pointer hover:bg-libuBlue hover:text-libuWhite"
        type="submit"
        value="Enviar"
      />
    </form>
  );
};
