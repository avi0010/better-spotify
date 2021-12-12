import {useSession} from "next-auth/react";
import {IoIosArrowDropdownCircle} from "react-icons/io";
import {shuffle} from 'lodash';
import {useEffect, useState} from "react";
import {useRecoilState, useRecoilValue} from "recoil";
import {playlistIdState, playlistItem} from "../atoms/playlistAtoms";
import useSpotify from "../hooks/useSpotify";
import Songs from "./songs";

const colors = [
    "from-red-400",
    "from-yellow-400",
    "from-green-400",
    "from-blue-400",
    "from-indigo-400",
    "from-purple-400",
    "from-pink-400"
]

export default Centre => {
    const {data: session} = useSession();
    const spotifyApi = useSpotify();
    const [color, setColor] = useState(null);
    const playlistId = useRecoilValue(playlistIdState);
    const [playlist, setPlaylist] = useRecoilState(playlistItem);

    useEffect(() => {
        setColor(shuffle(colors).pop());
    }, [playlistId]);

    useEffect(() => {
        if (spotifyApi.getAccessToken()) {
            spotifyApi
                .getPlaylist(playlistId)
                .then((data) => {
                    setPlaylist(data.body);
                    console.log(data.body);
                })
                .catch((err) => console.log(err));
        }
    }, [spotifyApi, playlistId, session])
    return (
        <div className="flex-grow text-[#FFFFFF] h-screen overflow-y-scroll scrollbar-hide">
            <header className="absolute top-10 right-10 bg-[#000000] rounded-full">
                <div
                    className="flex items-center space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-full p-1 pr-5">
                    <img src={session?.user.image} alt="" className="rounded-full w-10 h-10"/>
                    <h2 className="text-white">{session?.user.name}</h2>
                    <IoIosArrowDropdownCircle className="h-5 w-5"/>
                </div>
            </header>
            <div
                className={`flex items-end space-x-7 bg-gradient-to-b to-black ${color} h-80 padding-8 rounded-3xl m-3`}>
                <img
                    src={playlist?.images?.[0]?.url}
                    alt={"Hero Image"}
                    className="h-44 w-44 shadow-2xl rounded-3xl p-2"/>
                <div>
                    <p className="text-sm">Playlist</p>
                    <h2 className="text-3xl md:text-5xl xl:text-7xl font-bold ">{playlist?.name}</h2>
                </div>
            </div>
            <Songs />
        </div>
    )
}
