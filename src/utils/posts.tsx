import { RetweetPost } from "../Components/RetweetPost";

export const posts = [
  {
    profileName: "React",
    profileUser: "@reactjs",
    profileImg: (
      <img src="1.png" alt="Foto de Profile" width={60} height={60} />
    ),
    title:
      "A small detail, but one that folks using server-side rendering might appreciate. React 18 adds an onRecoverableError callback to hydrateRoot so you can get notified about hydration mismatches in production. Helps find regressions!",
    likes: 208,
    retweets: 35,
    post: <RetweetPost />,
    comments: 5,
  },
];
