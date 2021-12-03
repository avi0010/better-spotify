import SideBar from "../components/SideBar";
import Centre from "../components/centre";

export default function Home() {
  return (
      <div className="bg-[#000000] overflow-hidden h-screen">
          <main className="flex">
              <SideBar/>
              <Centre/>
          </main>
      </div>
  )
}
