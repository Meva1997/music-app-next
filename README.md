# Music App Next

Web application developed with Next.js to explore music, manage comments, and user profiles. Features a responsive design, smooth animations with Framer Motion, and reusable components.

## Demo

For a complete experience Log In With your Spotify Account!!!

Credentials:

Email: email@email.com  
Password: 123456

[View live demo on Vercel](https://music-app-next-rust.vercel.app/login)

## Features

- Explore songs and artists.
- View your **Top Artists** and **Top Tracks** from Spotify in your profile.
- Comment system.
- User profiles.
- Responsive design.
- Animations with Framer Motion.
- Reusable components in React/Next.js.
- **Dynamic selection** between Top Artists and Top Tracks with a reusable toggle button group.
- **Loading skeletons** for better user experience.
- **Spotify integration**: fetches and validates your top items via custom hooks.

## Design Planning

Below you can see the first sketch made in Miro, which served as the basis for the visual and functional architecture of the application:

![Initial app sketch](/public/sketch.png)

## Project Structure

```
components/      # Reusable React components
hooks/           # Custom React hooks for logic and API calls
pages/           # Next.js pages (routes)
ui/              # UI elements, skeletons, spinners, etc.
public/          # Static assets such as images and icons
types/           # TypeScript types and interfaces
app/             # Main Next.js app directory (routing, global CSS, etc.)
```

- **components/**: All your reusable visual components, such as profile cards, footers, and toggle buttons.
- **hooks/**: Custom React hooks like `useSpotifyProfile` and `useSpotifyUserTopItems` to fetch and manage data.
- **pages/**: Next.js pages for routing, e.g., `/profile`, `/login`.
- **ui/**: Contains skeleton loaders, spinners, and other UI helpers for loading states or transitions.
- **public/**: Static files (images, sketch, icons) used in the app.
- **types/**: TypeScript definitions for props, API responses, etc.
- **app/**: Application-level config, global styles, and Next.js routing logic.

## Installation & Usage

```bash
git clone https://github.com/Meva1997/music-app-next.git
cd music-app-next
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app in development mode.

## Technologies

- Next.js
- React
- TypeScript
- Framer Motion
- React Icons
- Spotify Web API
- Tailwind CSS

## Author

[Meva1997](https://github.com/Meva1997)
