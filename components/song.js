import { atom, useRecoilState } from "recoil";
import useSpotify from "../hooks/useSpotify";
import milltoMinutesAndSeconds from "../lib/time";
import {isPlayingState, currentTrackIdState} from "../atoms/songAtom"

function Song({order, track}){
    const spotifyApi = useSpotify();
    const [currentTrackId, setCurrentTrackId] = useRecoilState(currentTrackIdState);
    const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);

    const playSong = () => {
        setCurrentTrackId(track.track.id);
        setIsPlaying(true);
        spotifyApi.play({
            uris :  [track.track.uri],
        });
    };

    return (
        <div
          className="grid grid-col-2 text-gray-500 py-2 px-5 hover:bg-gray-900 rounded-lg cursor-pointer"
          onClick={playSong}
        >
            <div className="flex items-center space-x-5">
                <p>{order + 1}</p>
                <img
                    className="h-10 w-10"
                    src={track.track.album.images[0].url}
                    alt=""
                />
                <div>
                    <p
                      className="w-36 lg:w-64 truncate text-white">
                      {track.track.name}
                    </p>
                    <p className="w-40 ">
                      {track.track.artists[0].name}
                    </p>
                </div>

                <div className="flex items-center justify-between ml-auto md:ml-0">
                    <p className="w-40 hidden md:inline-block">{track.track.album.name}</p>
                  <p className="">
                    {milltoMinutesAndSeconds(track.track.duration_ms)}</p>
                </div>
            </div>
        </div>
    )
}

export default Song;
