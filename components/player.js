import { useSession } from "next-auth/react";
import { useRecoilState } from "recoil";
import useSpotify from "../hooks/useSpotify";
import { currentTrackIdState, isPlayingState} from "../atoms/songAtom";
import { useState } from "react";
import useSongInfo from "../hooks/useSongInfo";

export default Player => {
  const SpotifyApi = useSpotify();
  const {data: session, status} = useSession();
  const [currentTrack,  setCurrentTrack] = useRecoilState(currentTrackIdState);
  const [currentPlaying, setIsCurrentPlaying] = useRecoilState(isPlayingState);
  const [volume, setVolume] = useState(50);
  const songInfo = useSongInfo();

  return (
    <div>
      <div>
        <img src={songInfo?.album.images?.[0]?.url}/>
      </div>
    </div>
  )
}
