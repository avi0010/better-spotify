import SideBar from "../components/SideBar";
import Centre from "../components/centre";
import Player from "../components/player"

export default function Home() {
  return (
    <div className="bg-[#000000] overflow-hidden h-screen">
      <main className="flex">
        <SideBar />
        <Centre />
      </main>
      <div>
        <Player className="sticky bottom-0"/>
      </div>
    </div>
  );
}
