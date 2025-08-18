import { type Song } from './api/songs';
import Button from './components/Button';

function PlayerSongList({
  songs,
  onSelectSong,
}: {
  songs: Song[];
  onSelectSong: (song: Song) => void;
}) {
  return (
    <div className="overflow-auto">
      <div className="flex flex-col">
        {songs.map((song, index) => {
          return (
            <Button onClick={() => onSelectSong(song)} key={index}>
              {song.title}
            </Button>
          );
        })}
      </div>
    </div>
  );
}

export default PlayerSongList;
