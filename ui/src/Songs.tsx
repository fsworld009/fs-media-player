import { useMemo, useState } from 'react';
import { useDeleteSong, useSongsList, type Song } from '@/api/songs';
import SongTable from '@/SongTable';
import Button from '@/components/Button';
import { ACTION } from '@/common/enums';
import { Link, useNavigate } from '@tanstack/react-router';
import DeleteSongModal from './DeleteSongModal';

function Songs() {
  const songsQueryResult = useSongsList();
  const songs: Song[] = useMemo(() => songsQueryResult.data || [], [songsQueryResult]);

  const [open, setOpen] = useState(false);
  const [deleteSong, setDeleteSong] = useState({} as Song);
  const singleDeleteMutation = useDeleteSong(() => {
    songsQueryResult.refetch();
  });

  const nav = useNavigate();

  function onAction(songs: Song[], action: ACTION) {
    if (action === ACTION.EDIT) {
      nav({
        to: '/songs/edit/$id',
        params: { id: songs[0].id },
      });
    }
    if (action === ACTION.DELETE) {
      setDeleteSong(songs[0]);
      setOpen(true);
    }
  }

  function onDeleteConfirm() {
    console.log('confirm');
    setOpen(false);
    singleDeleteMutation.mutate({ id: deleteSong.id });
  }

  function onDeleteCancel() {
    console.log('cancel');
    setOpen(false);
  }

  return (
    <>
      <DeleteSongModal
        open={open}
        onConfirm={onDeleteConfirm}
        onCancel={onDeleteCancel}
      ></DeleteSongModal>
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
