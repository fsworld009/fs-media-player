import { useMemo } from 'react';
import { useSongsList, type Song } from '@/api/songs';
import SongTable from '@/SongTable';
import Button from '@/components/Button';
import type { ACTION } from '@/common/enums';
import { Link } from '@tanstack/react-router';

function Songs() {
  const songsQueryResult = useSongsList();
  const songs: Song[] = useMemo(() => songsQueryResult.data || [], [songsQueryResult]);

  function onAction(songs: Song[], action: ACTION) {
    console.log(songs, action);
  }

  return (
    <>
      <div className="flex justify-start">
        <Link to="/songs/create">
          <Button className="mr-1">Create</Button>
        </Link>
      </div>
      <div className="mt-2">
        <SongTable songs={songs} onAction={onAction}></SongTable>
      </div>
    </>
  );
}

export default Songs;
