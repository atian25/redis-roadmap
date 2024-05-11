export type Feature = {
  id: string;
  title: string;
  score: string;
  created_at: string;
};

export type ConnectivityCheckResult = {
  url: string;
  isConnected: boolean;
};
