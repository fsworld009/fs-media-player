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

export type CreateSongRequestBody = Omit<Song, 'id'>;

export type UpdateSongRequestBody = Omit<Song, 'id' | 'sid'>;

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

export async function getSong(id: string) {
  const response = await fetch(`${SERVER_URL}/songs/${id}`);
  return (await response.json()) as Song;
}

export function useGetSong(id: string, shouldQuery: boolean) {
  // TODO: error handling
  return useQuery({
    queryKey: ['song'],
    queryFn: () => getSong(id),
    enabled: shouldQuery,
  });
}

export async function createSong(song: CreateSongRequestBody) {
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
      onSuccess();
    },
  });
}

export async function updateSong(id: string, song: UpdateSongRequestBody) {
  const response = await fetch(`${SERVER_URL}/songs/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(song),
  });
  return (await response.json()) as Song;
}

export function useUpdateSong(onSuccess: () => void) {
  return useMutation({
    mutationFn: ({ id, body }: { id: string; body: UpdateSongRequestBody }) => updateSong(id, body),
    onError: (error, variables, context) => {
      // An error happened!
      console.log('error', error, variables, context);
      // TODO: error handling
    },
    onSuccess: (data) => {
      onSuccess();
    },
  });
}

export function deleteSong(id: string) {
  return fetch(`${SERVER_URL}/songs/${id}`, {
    method: 'DELETE',
  });
}

export function useDeleteSong(onSuccess: () => void) {
  return useMutation({
    mutationFn: ({ id }: { id: string }) => deleteSong(id),
    onError: (error, variables, context) => {
      // An error happened!
      console.log('error', error, variables, context);
      // TODO: error handling
    },
    onSuccess: (data) => {
      onSuccess();
    },
  });
}
