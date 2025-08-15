import { useCallback, useEffect, useState, type ReactElement } from 'react';
import Button from './components/Button';
import { useQuery } from '@tanstack/react-query';
import { listSongs, type Song } from './api/songs';

function TestPlayer() {
  const songsQueryResult = useQuery({
    queryKey: ['songs'],
    queryFn: listSongs,
  });

  const playlist: Song[] = songsQueryResult.data || [];

  const [songIndex, setSongIndex] = useState(-1);
  // const [playerState, setPlayerState] = useState('');
  const [ytPlayer, setYTPlayer] = useState(null);

  function onClickSong(index: number) {
    setSongIndex(index);
  }

  let playerElement: ReactElement = <></>;
  // const iframe: HTMLElement | null = null;
  // let ytPlayer: any;
  if (songIndex !== -1) {
    //
    playerElement = <div id="video-player"></div>;
  }

  const onPlayerStateChange = useCallback((e: any) => {
    console.log('onPlayerStateChange', e);
    const state = e.data;
    /**
    -1 – not iniciated
    0 – Ended
    1 – Playing
    2 – Paused
    3 – Buffering
    5 – Cued

     */
    if (state === 0) {
      console.log('set state',songIndex,  (songIndex + 1) % playlist.length)
      setSongIndex((songIndex + 1) % playlist.length);
    }
  }, [songIndex]);

  useEffect(() => {
    console.log('useEffect executed', songIndex, ytPlayer);
    if (songIndex !== -1) {
      const song = playlist[songIndex];
      console.log('song', song);
      if (!song) {
        return;
      }
      if (ytPlayer) {
        (ytPlayer as any).destroy();
      }
      console.log('create YT Player');
      // TODO: check window.onYouTubeIframeAPIReady
      setYTPlayer(
        new (window as any).YT.Player('video-player', {
          // playerVars: { 'autoplay': 1, 'controls': 0 },
          playerVars: { autoplay: 1 },
          width: '100%',
          height: '100%',
          videoId: song.sid,
          events: {
            onStateChange: onPlayerStateChange,
          },
        }),
      );

      console.log('ytPlayer', ytPlayer);
    }
    // Do not list ytPlayer as dependency, it would
    // trigger useEffect again right after setYTPlayer call
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [songIndex, onPlayerStateChange]);

  return (
    <>
      <div className="flex w-screen justify-center">
        <div className="basis-3xl flex-initial">{playerElement}</div>
        <div className="basis-sm flex-none">
          <div className="flex flex-col">
            {playlist.map((song, index) => {
              return (
                <Button onClick={() => onClickSong(index)} key={index}>
                  {song.title}
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default TestPlayer;
