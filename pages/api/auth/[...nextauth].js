import NextAuth from "next-auth"
import SpotifyProvider from "next-auth/providers/spotify"
import spotifyApi, {LOGIN_URL} from "../../../lib/spotify";

async function refreshAccessToken(token) {
    try {
        spotifyApi.setAccessToken(token.accessToken);
        spotifyApi.setRefreshToken(token.refreshToken);
        console.log("working")
        const {body: refreshedToken} = await spotifyApi.refreshAccessToken();
        console.log(refreshedToken);
        console.log("Refreshed Token Is :    " + refreshedToken);
        return {
            ...token,
            accessTokenExpires: Date.now + refreshedToken.expires_in * 1000,
            accessToken: refreshedToken.access_token,
            refreshToken: refreshedToken.refresh_token ?? token.refreshToken,
        }
    } catch (err) {
        console.log("ERRRRRRRRRRRRRRRRRRRRRRRRRRRR" + err);
        return {
            ...token,
            error: "RefreshAccessTokenERROR"
        }
    }
}

export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        SpotifyProvider({
            clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
            clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
            authorization: LOGIN_URL
        }),
        // ...add more providers here
    ],
    secret: process.env.JWT_SECRET,
    pages: {
        signIn: "/login"
    },
    callbacks: {
        async jwt({token, account, user}) {
            //initial signIn
            if (account && user) {
                return {
                    ...token,
                    accessToken: account.access_token,
                    refreshToken: account.refresh_token,
                    username: account.providerAccountId,
                    accessTokenExpires: account.expires_at * 1000
                }
            }
            if (Date.now() < token.accessTokenExpires) {
                console.log("Valid Access Token");
                return token;
            }
            console.log("Received Token Expired Refreshing token");
            return await refreshAccessToken(token);
        },
        async session({session, token}) {
            session.user.accessToken = token.accessToken;
            session.user.refreshToken = token.refreshToken;
            session.user.username = token.username;

            return session;
        }
    }
})