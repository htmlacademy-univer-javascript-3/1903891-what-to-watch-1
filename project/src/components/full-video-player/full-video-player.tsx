import React, {useEffect, useRef} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks/hooks-toolkit';
import {setCurrentTime, setNewStateIsPlaying} from '../../store/player-store/player-store.reducer';
import {CombinedElement, requestFullScreen} from '../../services/fullscreen-api';

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
      requestFullScreen(videoRefFullVideo.current as unknown as CombinedElement);
    }
  }, [isFullVideo]);

  useEffect(() => {
    // if(videoRefFullVideo.current?.readyState){
    //   (isPlaying && videoRefFullVideo.current?.readyState === 4) ? videoRefFullVideo.current?.play() : videoRefFullVideo.current?.pause();
    // }
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
      onCanPlayThrough={() => dispatch(setNewStateIsPlaying(true))}
    >
      <source src={videoLink} type="video/mp4"/>
    </video>
  );
}

export default FullVideoPlayer;
