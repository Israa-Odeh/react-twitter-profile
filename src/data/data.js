import avatar from "assets/images/avatar.png";
import reactLogo from "assets/svg/reactLogo.svg";
import tailwindIcon from "assets/images/tailwindIcon.png";
import typescriptIcon from "assets/images/typescriptIcon.png";
import codeCampIcon from "assets/images/codeCampIcon.png";
import authorImage from "assets/images/author.jpg";

export const user = {
  displayName: "Mohammad Dwikat",
  username: "MohammadDwikat",
  avatarUrl: avatar,
};

export const suggestedFollowers = [
  {
    imageUrl: tailwindIcon,
    displayName: "Tailwind CSS",
    username: "tailwindcss",
    isVerified: true,
  },
  {
    imageUrl: typescriptIcon,
    displayName: "TypeScript",
    username: "typescript",
    isVerified: false,
  },
  {
    imageUrl: codeCampIcon,
    displayName: "freeCodeCamp.org",
    username: "freeCodeCamp",
    isVerified: true,
  },
];

export const recommendedFollowers = [
  {
    imageUrl: codeCampIcon,
    displayName: "freeCodeCamp.org",
    username: "freeCodeCamp",
    isVerified: true,
    followedBy: "Node.js and 9 others follow",
    description:
      "We're a community of millions of people who are building new skills and getting new jobs together. A 501(c)(3) public charity. Tweets by @abbeyrenn.",
  },
  {
    imageUrl: typescriptIcon,
    displayName: "TypeScript",
    username: "typescript",
    isVerified: false,
    followedBy: "Node.js and 5 others follow",
    description:
      "TypeScript is a language for application-scale JavaScript development. It's a typed superset of JavaScript that compiles to plain JavaScript.",
  },
  {
    imageUrl: tailwindIcon,
    displayName: "Tailwind CSS",
    username: "tailwindcss",
    isVerified: true,
    followedBy: "Yazeed Obaid and 3 others follow",
    description:
      "The utility-first CSS framework. Rapidly build modern websites, without ever leaving your HTML.",
  },
];

export const trends = [
  {
    category: "Gaming . Trending",
    topic: "#VALORANTChampions🎇",
    tweetCount: 27900,
  },
  {
    topic: "الانستا",
    tweetCount: 1411,
  },
  {
    category: "Gaming . Trending",
    topic: "Mako",
    tweetCount: 14100,
  },
  {
    topic: "#رسالة اليوم",
    tweetCount: 22300,
  },
  {
    topic: "#Messi",
    tweetCount: 77200,
  },
  {
    topic: "#جامعة_طيبة",
    tweetCount: 24600,
  },
  {
    topic: "ايفون",
    tweetCount: 27600,
  },
  {
    category: "Gaming . Trending",
    topic: "fnatic",
    tweetCount: 8748,
  },
  {
    topic: "الاعلام العبري",
    tweetCount: 4598,
  },
  {
    topic: "#InterMiamiCF",
    tweetCount: 68400,
  },
];

export const visitedProfileData = {
  name: "React",
  username: "reactjs",
  profilePicture: reactLogo,
  coverImage: reactLogo,
  bio: "The library for web and native user interfaces",
  followersCount: 708100,
  followingCount: 267,
  postsCount: 2611,
  joinDate: "July 2013",
  externallink: "https://react.dev/",
  linkLabel: "react.dev",
  commonFollowers: [
    {
      name: "Mohamad Kukhun",
      profilePicture:
        "https://farm9.staticflickr.com/8505/8441256181_4e98d8bff5_z_d.jpg",
    },
    {
      name: "Yazan Alsade",
      profilePicture:
        "https://farm3.staticflickr.com/2220/1572613671_7311098b76_z_d.jpg",
    },
    {
      name: "Omar Dere",
      profilePicture:
        "https://farm7.staticflickr.com/6089/6115759179_86316c08ff_z_d.jpg",
    },
    {
      name: "Haytham Ibrahim",
      profilePicture:
        "https://farm4.staticflickr.com/3075/3168662394_7d7103de7d_z_d.jpg",
    },
    {
      name: "Israa Odeh",
      profilePicture:
        "https://farm9.staticflickr.com/8295/8007075227_dc958c1fe6_z_d.jpg",
    },
  ],
  post: {
    isReposted: true,
    repostedBy: "React",
    authorImageUrl: authorImage,
    userDisplayName: "danabramov.nsky.social",
    username: "dan_abramov",
    content: "happy 10th birthday to @reactjs!🎂🌟",
    publishDate: "May 29",
    comments: 46,
    reposts: 675,
    likes: 3701,
    reach: 1100000,
  },
};
