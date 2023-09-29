import React from 'react';

function RemoteIcon({ isServerOnline }) {
  const iconUrlOff = 'https://cdn-icons-png.flaticon.com/128/10255/10255158.png';
  const iconUrlOn = 'https://cdn-icons-png.flaticon.com/128/14/14111.png';

  const iconUrl = isServerOnline ? iconUrlOn : iconUrlOff;

  return (
    <img
      src={iconUrl}
      alt="Remote Icon"
      width="48"
      height="48"
    />
  );
}

export default RemoteIcon;