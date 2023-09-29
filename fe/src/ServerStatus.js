import React, { useEffect, useState } from 'react';
import RemoteIcon from './RemoteIcon';

function ServerStatus() {
  const [isServerOnline, setIsServerOnline] = useState(false);

  useEffect(() => {
    const checkServerStatus = async () => {
    
        const response = await fetch("http://localhost:3000/hello");
        const data = await response.text();

        setIsServerOnline(data === "Hello World!");
    };

    const intervalId = setInterval(checkServerStatus, 5000);
    checkServerStatus();

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h1>Server Status</h1>
      <RemoteIcon isServerOnline={isServerOnline} />
    </div>
  );
}

export default ServerStatus;