import axios from 'axios';

// Define a type for the connectivity check result
type ConnectivityResult = {
  website: string;
  status: boolean;
};

/**
 * Checks the connectivity for a list of websites.
 * @param websites Array of website URLs to check.
 * @returns Promise with an array of connectivity results.
 */
export async function checkConnectivity(websites: string[]): Promise<ConnectivityResult[]> {
  const results: ConnectivityResult[] = [];

  for (const website of websites) {
    try {
      await axios.get(website);
      results.push({ website, status: true });
    } catch (error) {
      results.push({ website, status: false });
    }
  }

  return results;
}
