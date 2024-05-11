import React, { useEffect, useState } from 'react';
import { checkConnectivity } from './utils/checkConnectivity';

const StatusPage = () => {
  const [connectivityResults, setConnectivityResults] = useState([]);

  useEffect(() => {
    const fetchConnectivityResults = async () => {
      const results = await checkConnectivity();
      setConnectivityResults(results);
    };

    fetchConnectivityResults();
  }, []);

  return (
    <div>
      <h1>Website Connectivity Status</h1>
      <ul>
        {connectivityResults.map((result, index) => (
          <li key={index}>
            {result.website}: {result.status ? 'Online' : 'Offline'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StatusPage;
