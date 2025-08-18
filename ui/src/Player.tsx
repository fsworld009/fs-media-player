import { useCallback, useMemo, useState } from 'react';
import SongList from './SongList';
import { useSongsList, type Song } from './api/songs';
import YoutubePlayer from './YoutubePlayer';

function Player() {
  const songsQueryResult = useSongsList();
  const songs: Song[] = useMemo(() => songsQueryResult.data || [], [songsQueryResult]);
  const [song, setSong] = useState<Song | null>(null);

  const onSongEnd = useCallback(() => {
    // This needs to be a backend call once we have pagination in songlist
    const index = songs.indexOf(song as Song);
    setSong(songs[(index + 1) % songs.length]);
  }, [song, songs]);

  return (
    <div className="flex w-screen justify-center">
      <div className="flex-none w-[1280px] h-[720px]">
        <YoutubePlayer song={song} onSongEnd={onSongEnd}></YoutubePlayer>
      </div>
      <div>
        <SongList songs={songs} onSelectSong={setSong}></SongList>
      </div>
    </div>
  );
}

export default Player;
