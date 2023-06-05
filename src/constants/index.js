import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    mui,
    reactjs,
    compose,
    tailwind,
    git,
    figma,
    kplc,
    strath,
    carrent,
    jobit,
    tripguide,
    nextjs,
    azure,
    firebase,
    prisma,
    python
} from "../assets";

export const navLinks = [
    {
        link: "about",
        title: "About",
    },
    {
        link: "work",
        title: "Work",
    },
    {
        link: "contact",
        title: "Contact",
    },
    {
        link: "https://github.com/khalifa47",
        title: "GitHub",
    },
    {
        link: "https://www.linkedin.com/in/khalifa-fumo-4199781ba/",
        title: "LinkedIn",
    },
    {
        link: "https://drive.google.com/file/d/1Y9euqs9OMPXQOk3VXwiX5BjGwVOvhhrU/view?usp=sharing",
        title: "Resume",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "Backend/API Developer",
        icon: backend,
    },
    {
        title: "Mobile Developer",
        icon: mobile,
    },
    {
        title: "Azure Developer",
        icon: creator,
    },
];

const technologies = [
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React.js",
        icon: reactjs,
    },
    {
        name: "Next.js",
        icon: nextjs,
    },
    {
        name: "Material UI",
        icon: mui,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Prisma",
        icon: prisma,
    },
    {
        name: "Android Compose",
        icon: compose,
    },
    {
        name: "Azure",
        icon: azure,
    },
    {
        name: "Firebase",
        icon: firebase,
    },
    {
        name: "Python",
        icon: python,
    },
    {
        name: "Git",
        icon: git,
    },
    {
        name: "Figma",
        icon: figma,
    },
];

const experiences = [
    {
        title: "Full-stack Developer/IT intern",
        company_name: "Kenya Power",
        icon: kplc,
        iconBg: "#fff",
        date: "January 2023 - April 2023",
        points: [
            "Developed a full-stack web employee clearance system using Next 13 with TypeScript and a MySQL database.",
            "Led a team and participated in reviews, receiving constructive feedback from end-users.",
            "Implemented best practices of software development including responsive design and cross-browser compatibility.",
            "Conducted ICT support work and trainings within various ICT departments.",
        ],
    },
    {
        title: "Computer Science Student",
        company_name: "Strathmore University",
        icon: strath,
        iconBg: "#E6DEDD",
        date: "April 2020 - July 2024",
        points: [
            "Developed various web and mobile applications for coursework.",
            "Learnt and applied various software development concepts including data structures, algorithms, and object-oriented programming.",
            "Collaborated with teams including designers and other developers to create high-quality products.",
            "Achieved various awards and including Dean's list 2020 and 2021.",
        ],
    }
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Car Rent",
        description:
            "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/",
    },
    {
        name: "Job IT",
        description:
            "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/",
    },
    {
        name: "Trip Guide",
        description:
            "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
    },
];

export { services, technologies, experiences, testimonials, projects };