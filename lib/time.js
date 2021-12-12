export default function milltoMinutesAndSeconds(mil){
  const minutes = Math.floor(mil/60000);
  const seconds = ((mil % 60000)/1000).toFixed(0);
  return seconds == 60
  ? minutes + 1 + ":00"
    :minutes + ":" + (seconds < 10 ? "0" : "") +
    seconds;
}
