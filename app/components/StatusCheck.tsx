import React from 'react';
import { ConnectivityCheckResult } from '../types';

interface StatusCheckProps {
  results: ConnectivityCheckResult[];
}

const StatusCheck: React.FC<StatusCheckProps> = ({ results }) => {
  return (
    <div className="status-check">
      <h2>Website Connectivity Status</h2>
      <ul>
        {results.map((result, index) => (
          <li key={index}>
            <span>{result.url}: </span>
            <span className={result.isConnected ? 'text-green-500' : 'text-red-500'}>
              {result.isConnected ? 'Connected' : 'Disconnected'}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StatusCheck;
