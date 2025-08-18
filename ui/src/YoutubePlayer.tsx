import { useCallback, useEffect, useState } from 'react';
import { type Song } from './api/songs';

function YoutubePlayer({ song, onSongEnd }: { song: Song | null; onSongEnd(): void }) {
  const [ytPlayer, setYTPlayer] = useState(null);

  const onPlayerStateChange = useCallback(
    (e: any) => {
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
        console.log('end');
        onSongEnd();
      }
    },
    [onSongEnd],
  );

  useEffect(() => {
    console.log('called');
    if (song) {
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
    }

    // Do not list setYTPlayer and onPlayerStateChange as dependency, it would
    // trigger unlimited re-rendering after setYTPlayer call
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [song]);

  // unmount handle
  useEffect(() => {
    return () => {
      if (ytPlayer) {
        (ytPlayer as any).destroy();
      }
    };
  });
  return <div id="video-player"></div>;
}

export default YoutubePlayer;
