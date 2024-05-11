import { useEffect, useState } from 'react';

const StatusPage = () => {
  const [statuses, setStatuses] = useState([]);

  useEffect(() => {
    const fetchStatuses = async () => {
      const response = await fetch('/api/status');
      const data = await response.json();
      setStatuses(data.statuses);
    };

    fetchStatuses();
    const interval = setInterval(fetchStatuses, 60000); // Refresh every 1 minute

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Website Statuses</h1>
      <table>
        <thead>
          <tr>
            <th>Website</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {statuses.map((status, index) => (
            <tr key={index}>
              <td>{status.website}</td>
              <td>{status.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StatusPage;
