import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';

type StatusCheckResult = {
  url: string;
  status: number;
  responseTime: number;
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch('http://localhost:3000/api/status');
  const data: StatusCheckResult[] = await res.json();

  return {
    props: {
      results: data,
    },
  };
};

type Props = {
  results: StatusCheckResult[];
};

const StatusPage = ({ results }: Props) => {
  return (
    <div>
      <Head>
        <title>Status Check Page</title>
        <meta name="description" content="View the connectivity status of specified websites" />
      </Head>
      <main>
        <h1>Connectivity Status</h1>
        <table>
          <thead>
            <tr>
              <th>URL</th>
              <th>Status</th>
              <th>Response Time (ms)</th>
            </tr>
          </thead>
          <tbody>
            {results.map((result, index) => (
              <tr key={index}>
                <td>{result.url}</td>
                <td>{result.status === 200 ? 'Online' : 'Offline'}</td>
                <td>{result.responseTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default StatusPage;
