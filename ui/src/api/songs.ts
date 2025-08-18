import { useQuery } from '@tanstack/react-query';

// TODO: How to pass server URL?
const SERVER_URL = 'http://localhost:3000';

export interface Song {
  id: string;
  sid: string;
  title: string;
}

export async function listSongs() {
  // TODO: error handling
  const response = await fetch(`${SERVER_URL}/songs`);
  return (await response.json()) as Song[];
}

export function useSongsList() {
  return useQuery({
    queryKey: ['songs'],
    queryFn: listSongs,
  });
}
