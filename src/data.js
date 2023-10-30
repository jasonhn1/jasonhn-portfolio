import Delta from "./delta.png";
import Film from "./film.png";
import Safe from "./safe.png";
import GDPT from "./member.png";
import Cert from "./cert.png";

export const projects = [{
    title: "Delta Construction & Landscape",
    description: [
        "Created & Designed Dad's Construction Website",
        "Mobile Responsiveness and Intutive UI",
        "Lazy Load function to efficiently load images of projects",
    ],
    languages: ["jQuery","Bootstrap", "HTML", "CSS", "JavaScript"],
    link: "https://jasonhn1.github.io/index.html",
    img: Delta,
    featured: false,
    codeLink: "https://github.com/jasonhn1/jasonhn1.github.io",
    longDescription: "I poured my hear and passion for front end web development to finally give back to my dad."
},
{
    title: "Certitude",
    description: [
        "Allows students to verify university credentials for future employers",
        "Implemented Figma Design given by cusomters",
        "Completed UCI School Project through bi-weekly sprints",
    ],
    languages: ["Vue.js", "Node.js", "Agile", "MariaDB"],
    link: "https://cert-desktop-4rlzzd2cj-timyc.vercel.app/",
    img: Cert,
    featured: false,
    codeLink: "https://github.com/timyc/cert-desktop",
    longDescription: "As a team of 4 we completed and demo-(ed) our app for our senior project."
},
{
    title: "Safe Accounts",
    description: [
        "Home page for friend's Password Manager",
        "Integrated motion graphics and smooth page scrolling transitions",
    ],
    languages: ["ReactJS", "HTML/CSS", "Framer Motion"],
    link: "https://jasonhn1.github.io/safe/",
    img: Safe,
    featured: false,
    codeLink: "https://github.com/jasonhn1/safe",
    longDescription: "This project took me 20 hour straight to code because my friend dared me too. lol"
},{
    title: "Film Flix",
    description: [
        "E-Commerence site used to browse, purchase and search for movies",
        "My favorite UCI School Project",
        "Backend consists of IDM, Movie, Billing and Gateway mircoservices",
    ],
    languages: ["SpringBoot", "Java", "React", "JWT"],
    link: "https://github.com/jasonhn1/FilmFlixs",
    img: Film,
    featured: false,
    codeLink: "https://github.com/jasonhn1/FilmFlixs",
    longDescription: "This is the second version of my personal portfolio website. "
}


,{
    title: "GDPT Member Manager",
    description: [
        "Memember Manager Web App for local Temple",
        "Created Database schemas + Implemented user authentication",
    ],
    languages: ["Angular.js", "Bootstrap", "Node.js", "Express.js"],
    link: "https://github.com/jasonhn1/GDPT-Manager",
    img: GDPT,
    featured: false,
    codeLink: "https://github.com/jasonhn1/GDPT-Manager",
    longDescription: "This is the second version of my personal portfolio website. " +
        "The previous version of this website was done working off of" +
        " a bootstrap template, with major customizations done down the line." +
        " It was a great learning experience for me, but after some time " +
        "I felt unsatisfied with it. I decided to do a complete overhaul " +
        "of the site, both visually and behind the scenes.\n I started by listing " +
        'every issue I had with version 1. These included being too "bootstrappy", ' +
        "lacking a single cohesive color scheme, irrelevant pages, bloat, and parts " +
        " breaking on mobile. From there, I started learning React following a course " +
        "on LinkedIn Learning. Using what I learned, I started building and rebuilding" +
        " the website. I iterated through many different layouts, color schemes, and " +
        "component tree structures until I arrived at this one. I used libraries such" +
        " as react-reveal react-particles-js, and more to achieve many of the effects. " +
        "Overall, this has been a great learning experience for me, and I will continue" +
        " to update it. ",
}
];


