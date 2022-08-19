/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import QRCode from 'qrcode.react';

const QRmodal = ({ QRUrl, showQR }) => {
  const [showThisQR, setshowThisQR] = useState(showQR);
  const [thisQRUrl, setThisQRUrl] = useState(QRUrl);

  useEffect(() => {
    console.log('state desde modal:', showThisQR);
    console.log('url desde modal:', thisQRUrl);
  }, [QRUrl, showQR]);

  return showThisQR ? (
    <div className="w-96 h-96 z-50 absolute">
      <QRCode
        size={'90%'}
        value={thisQRUrl}
        renderAs="svg"
        className="m-auto h-44 md:h-52 rounded z-50"
        bgColor="#FCF7F8"
        fgColor="#363732"
        includeMargin={true}
      />
    </div>
  ) : (
    <></>
  );
};

export default QRmodal;
