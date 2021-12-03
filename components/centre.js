import {useSession} from "next-auth/react";
import {IoIosArrowDropdownCircle} from "react-icons/io";

export default Centre => {
    const {data: session} = useSession();
    return (
        <div className="flex-grow text-white">
            <header className="absolute top-5 right-10">
                <div
                    className="flex items-center space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-full p-1 pr-5">
                    <img src={session?.user.image} alt="" className="rounded-full w-10 h-10"/>
                    <h2>{session?.user.name}</h2>
                    <IoIosArrowDropdownCircle className="h-5 w-5"/>
                </div>
            </header>
            <section className="flex items-end h-80 m-3 rounded-3xl bg-green-100 bg-red-100">
                <h1>Hello World</h1>
            </section>
        </div>
    )
}