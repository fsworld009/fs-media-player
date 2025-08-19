import { useMutation, useQuery } from '@tanstack/react-query';

// TODO: How to pass server URL?
const SERVER_URL = 'http://localhost:3000';

// TODO: error handling
export interface Song {
  id: string;
  sid: string;
  title: string;
  comment: string;
}

export type SongRequestBody = Omit<Song, 'id'>;

export async function listSongs() {
  const response = await fetch(`${SERVER_URL}/songs`);
  return (await response.json()) as Song[];
}

export function useSongsList() {
  // TODO: error handling
  return useQuery({
    queryKey: ['songs'],
    queryFn: listSongs,
  });
}

export async function createSong(song: SongRequestBody) {
  const response = await fetch(`${SERVER_URL}/songs`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(song),
  });
  return (await response.json()) as Song;
}

export function useCreateSong(onSuccess: () => void) {
  return useMutation({
    mutationFn: createSong,
    onError: (error, variables, context) => {
      // An error happened!
      console.log('error', error, variables, context);
      // TODO: error handling
    },
    onSuccess: (data) => {
      // Boom baby!
      onSuccess();
    },
  });
}
