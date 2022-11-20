import {useEffect, useRef} from 'react';
import FullVideoPlayer from '../full-video-player/full-video-player';

type videoPlayerProps = {
  videoLink: string,
  posterImage: string,
  isSound: boolean,
}

function VideoPlayer(props: videoPlayerProps) {
  const {videoLink, posterImage, isSound} = props;
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const delay: NodeJS.Timeout = setTimeout(
      () => videoRef.current?.play(),
      1000);

    return () => clearTimeout(delay);
  });

  return (
    <div>
      {isSound ?
        (
          <FullVideoPlayer videoLink={videoLink} posterImage={posterImage}/>
        )
        : (
          <video ref={videoRef} className="player__video" poster={posterImage} muted>
            <source src={videoLink} type="video/mp4"/>
          </video>
        )}
    </div>
  );
}

export default VideoPlayer;
