import {useRecoilValue} from "recoil";
import {playlistItem} from "../atoms/playlistAtoms";
import Song from "./song";

export default Songs => {
    const playlist = useRecoilValue(playlistItem)
    return (
        <div className="px-6 flex flex-col space-y-1 pb-30 text-white">
            {playlist?.tracks.items.map((track, i) => (
                <Song
                    key={track.track.id}
                    track={track}
                    order={i}
                />
            ))}
        </div>
    )
}