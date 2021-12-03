import {SiHomebridge} from "react-icons/si";
import {IoSearchCircleSharp} from "react-icons/io5";
import {MdLibraryMusic} from "react-icons/md";
import {BsFillBookmarkHeartFill, BsFillPlusCircleFill} from "react-icons/bs";
import {signOut} from "next-auth/react";
import {GoSignOut} from "react-icons/go";

export default SideBar => {
    // const {data: session, status} = useSession();
    // console.log(session);
    return (
        <div
            className="text-gray-500 p-5 text-sm border-r border-gray-900 h-screen overflow-y-scroll rounded-3xl m-3 scrollbar-hide bg-grey-back">
            <div className="space-y-4">
                <button
                    className="flex items-center space-x-3 text-[#892CDC] border-2 border-[#52057B] rounded-3xl p-3 hover:text-[#BC6FF1]">
                    <SiHomebridge className="h-5 w-5 draw"/>
                    <p>Home</p>
                </button>

                <button
                    className="flex items-center space-x-3 text-[#FFE3FE] border-2 border-[#B4AEE8] rounded-3xl p-3 hover:text-[#EDEEF7]">
                    <IoSearchCircleSharp className="h-5 w-5"/>
                    <p>Search</p>
                </button>

                <button
                    className="flex items-center space-x-3 text-[#7ECA9C] border-2 border-[#9EDE73] rounded-3xl p-3 hover:text-[#CCFFBD]">
                    <MdLibraryMusic className="h-5 w-5"/>
                    <p>Library</p>
                </button>

                <hr className="border-t-[0.1px] border-gray-900"/>

                <button
                    className="flex items-center space-x-3 text-[#F43B86] border-2 border-[#FF87CA] rounded-3xl p-3 hover:text-[#FF95C5]">
                    <BsFillBookmarkHeartFill className="h-5 w-5"/>
                    <p>Liked Songs</p>
                </button>

                <button
                    className="flex items-center space-x-3 text-[#344CB7] border-2 border-[#7267CB] rounded-3xl p-3 hover:text-[#577BC1]">
                    <BsFillPlusCircleFill className="h-5 w-5"/>
                    <p>Create</p>
                </button>

                <hr className="border-t-[0.1px] border-gray-900"/>

                <button
                    className="flex items-center space-x-3 text-[#F0134D] border-2 border-[#FF4848] rounded-3xl p-3 hover:text-[#FF0000]"
                    onClick={() => signOut()}>
                    <GoSignOut className="h-5 w-5"/>
                    <p className="">Home</p>
                </button>


            </div>
        </div>
    )
}