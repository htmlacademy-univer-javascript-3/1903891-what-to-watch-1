import React, {useEffect, useRef} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks/hooks-toolkit';
import {setCurrentTime, setNewStateIsPlaying} from '../../store/player-store/player-store.reducer';

type videoPlayerProps = {
  videoLink: string,
  posterImage: string,
}

function FullVideoPlayer(props: videoPlayerProps) {
  const {videoLink, posterImage} = props;
  const videoRefFullVideo = useRef<HTMLVideoElement | null>(null);
  const isFullVideo = useAppSelector((state) => state.player.isFullScreen);
  const isPlaying = useAppSelector((state) => state.player.isPlaying);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isFullVideo) {
      if (videoRefFullVideo.current?.requestFullscreen) {
        videoRefFullVideo.current?.requestFullscreen();
      }
    }
    // else if (videoRefFullVideo.current?.webkitRequestFullscreen) { /* Safari */
    //   videoRefFullVideo.current?.webkitRequestFullscreen();
    // } else if (videoRefFullVideo.current?.msRequestFullscreen) { /* IE11 */
    //   videoRefFullVideo.current?.msRequestFullscreen();
    // }
  }, [isFullVideo]);

  useEffect(() => {
    isPlaying ? videoRefFullVideo.current?.play() : videoRefFullVideo.current?.pause();
  }, [isPlaying]);


  const handlerTimeUpdate = () => {
    const durationTime = videoRefFullVideo.current?.duration;
    const currentTime = videoRefFullVideo.current?.currentTime;
    if (durationTime && currentTime) {
      const currentToggler = currentTime * 100 / durationTime;
      const timeLeft = durationTime - currentTime;
      dispatch(setCurrentTime({
        currentToggler: currentToggler,
        timeLeft: timeLeft
      }));
    }
  };

  return (

    <video
      ref={videoRefFullVideo}
      className="player__video"
      poster={posterImage}
      onTimeUpdate={handlerTimeUpdate}
      onCanPlay={() => dispatch(setNewStateIsPlaying())}
    >
      <source src={videoLink} type="video/mp4"/>
    </video>
  );
}

export default FullVideoPlayer;
