import NextAuth from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    SpotifyProvider({
      clientId: process.env.SPOTIFY_CLIENT_ID!,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET!,
      authorization:
        "https://accounts.spotify.com/authorize?scope=user-read-email,user-read-private,user-read-playback-state,user-modify-playback-state,user-read-currently-playing",
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (
          credentials?.email === "email@email.com" &&
          credentials?.password === "123456"
        ) {
          return {
            id: "1",
            name: "Test User",
            email: "email@email.com",
          };
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token;
        token.refreshToken = account.refresh_token;
        token.provider = account.provider; // <-- ESTA LÍNEA ES CLAVE
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken;
      session.refreshToken = token.refreshToken;
      session.provider = token.provider as string | undefined; // <-- Aquí ya lo recibes bien
      return session;
    },
  },
});

export { handler as GET, handler as POST };
