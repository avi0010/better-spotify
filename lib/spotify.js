import SpotifyWebApi from "spotify-web-api-node";

const scopes = ["playlist-modify-public",
    "playlist-read-private",
    "playlist-read-collaborative",
    "playlist-modify-private",
    "user-read-recently-played",
    "user-top-read",
    "user-read-playback-position",
    "streaming",
    "user-library-read",
    "user-follow-read",
    "user-follow-modify",
    "user-read-email",
    "user-read-private",
    "user-read-currently-playing",
    "user-modify-playback-state",
    "user-read-playback-state"].join(",");

const params = {scope: scopes};

const queryParamsString = new URLSearchParams(params);
const LOGIN_URL = `https://accounts.spotify.com/authorize/?${queryParamsString.toString()}`;

const spotifyApi = new SpotifyWebApi({
    clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
    clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
})
export default spotifyApi;
export {LOGIN_URL};