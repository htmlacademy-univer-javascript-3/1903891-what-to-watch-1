import {useEffect, useRef} from 'react';

type previewVideoPlayerProps = {
  videoLink: string,
  posterImage: string,
  isSound: boolean
}

function PreviewVideoPlayer(props: previewVideoPlayerProps) {
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
          <video ref={videoRef} className="player__video" poster={posterImage}>
            <source src={videoLink} type="video/mp4"/>
          </video>
        )
        : (
          <video ref={videoRef} className="player__video" poster={posterImage} muted>
            <source src={videoLink} type="video/mp4"/>
          </video>
        )}
    </div>
  );
}

export default PreviewVideoPlayer;
