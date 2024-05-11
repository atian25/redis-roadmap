import fetch from 'node-fetch';

// Function to check connectivity of specified pages
export async function checkConnectivity(urls: string[], interval: number): Promise<void> {
  console.log(`Starting connectivity checks every ${interval} milliseconds`);

  // Function to perform a single round of checks
  const performCheck = async () => {
    for (const url of urls) {
      try {
        const response = await fetch(url);
        if (response.ok) {
          console.log(`SUCCESS: Connected to ${url}`);
        } else {
          console.log(`ERROR: Failed to connect to ${url}`);
        }
      } catch (error) {
        console.error(`EXCEPTION: Failed to connect to ${url}`, error);
      }
    }
  };

  // Schedule checks at specified intervals
  setInterval(performCheck, interval);
}
