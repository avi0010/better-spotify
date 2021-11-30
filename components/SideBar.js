import {SiHomebridge} from "react-icons/si";
import {IoSearchCircleSharp} from "react-icons/io5";
import {MdLibraryMusic} from "react-icons/md";
import {BsFillBookmarkHeartFill, BsFillPlusCircleFill} from "react-icons/bs";
import {signOut} from "next-auth/react";
import {GoSignOut} from "react-icons/go";

export default SideBar => {
    return (
        <div className="text-gray-500 p-5 text-sm border-r border-gray-900">
            <div className="space-y-4">
                <button className="flex items-center space-x-3 hover:text-white" onClick={() => signOut()}>
                    <GoSignOut className="h-5 w-5"/>
                    <p>Home</p>
                </button>
                <button className="flex items-center space-x-3 hover:text-white">
                    <SiHomebridge className="h-5 w-5"/>
                    <p>Home</p>
                </button>

                <button className="flex items-center space-x-3 hover:text-white">
                    <IoSearchCircleSharp className="h-5 w-5"/>
                    <p>Search</p>
                </button>

                <button className="flex items-center space-x-3 hover:text-white">
                    <MdLibraryMusic className="h-5 w-5"/>
                    <p>Library</p>
                </button>
                <hr className="border-t-[0.1px] border-gray-900"/>

                <button className="flex items-center space-x-3 hover:text-white">
                    <BsFillPlusCircleFill className="h-5 w-5"/>
                    <p>Create</p>
                </button>

                <button className="flex items-center space-x-3 hover:text-white">
                    <BsFillBookmarkHeartFill className="h-5 w-5"/>
                    <p>Liked Songs</p>
                </button>
                <hr className="border-t-[0.1px] border-gray-900"/>
            </div>
        </div>
    )
}