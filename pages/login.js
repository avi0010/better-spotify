import {getProviders, signIn} from "next-auth/react";
import {BsSpotify} from "react-icons/bs";

export default function Login({providers}) {
    return (

        <div className="flex flex-col items-center min-h-screen w-screen text-white justify-center bg-black">
            <BsSpotify className="fill-current text-[#1DB954] w-1/5 h-1/5 p-5"/>
            {Object.values(providers).map((provider) => (
                <button type="button"
                        className="bg-gradient-to-r from-green-200 via-green-300 to-blue-500 p-5 rounded-full"
                        onClick={() => signIn(provider.id, {callbackUrl: "/"})} key={provider.id}>
                    Login with Spotify</button>
            ))}
        </div>
    )
}

export async function getServerSideProps() {
    const providers = await getProviders();
    return {
        props: {
            providers,
        },
    };
}
