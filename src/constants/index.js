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
    tlu,
    varacraft,
    sacco,
    philanthrolink,
    kplcClearance,
    disney,
    ntsa,
    ploxy,
    rems,
    karo,
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
        link: "projects",
        title: "Projects",
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
        link: "https://www.linkedin.com/in/khalifa-fumo",
        title: "LinkedIn",
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
        title: "Project Manager/Developer",
        company_name: "Tallinn University Centre for EdTech",
        icon: tlu,
        iconBg: "#fff",
        date: "January 2024 - June 2024",
        points: [
            "Led a team of 6 in developing an AI-enhance EdTech platform to streamline and automate the creation of educational content.",
            "Utilized OpenAI's APIs and interactive H5P templates to create engaging assessments.",
            "Worked in a separate team of 5 to develop a crowdfunding platform, using Next.js with Supabase, providing a seamless way for individuals and organizations to donate to verified charitable projects.",
        ],
    },
    {
        title: "Full-stack Developer/IT intern",
        company_name: "Kenya Power",
        icon: kplc,
        iconBg: "#fff",
        date: "January 2023 - March 2023",
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
        date: "April 2020 - June 2024",
        points: [
            "Developed various web and mobile applications for coursework.",
            "Learnt and applied various software development concepts including data structures, algorithms, and object-oriented programming.",
            "Collaborated with teams including designers and other developers to create high-quality products.",
            "Achieved various awards and including Dean's list award for outstanding performance in 2020, 2021, and 2022.",
            "Graduated with a First-class Honours Bachelor's degree.",
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
        name: "VaraCraft",
        description:
            "An EdTech system developed for teachers to automate content creation for their students.",
        tags: [
            {
                name: "Next.js",
                color: "orange-text-gradient",
            },
            {
                name: "MaterialUI",
                color: "blue-text-gradient",
            },
            {
                name: "OpenAI-API",
                color: "pink-text-gradient",
            },
            {
                name: "H5P",
                color: "green-text-gradient",
            },
        ],
        image: varacraft,
        link: null,
        creds: null,
        source_code_link: null,
    },
    {
        name: "PhilanthroLink",
        description:
            "A crowdfunding platform dedicated to connecting donors with causes they care about.",
        tags: [
            {
                name: "Next.js",
                color: "orange-text-gradient",
            },
            {
                name: "TailwindCSS",
                color: "blue-text-gradient",
            },
            {
                name: "Supabase",
                color: "pink-text-gradient",
            },
            {
                name: "Jest",
                color: "green-text-gradient",
            },
        ],
        image: philanthrolink,
        link: null, // "https://philanthrolink.vercel.app/",
        creds: null,
        source_code_link: "https://github.com/digital-explorers-2/philanthro-link",
    },
    {
        name: "Kadhi Sacco",
        description:
            "An intelligent SACCO Management System designed to provide a seamless platform for financial activities.",
        tags: [
            {
                name: "Next.js",
                color: "orange-text-gradient",
            },
            {
                name: "MaterialUI",
                color: "blue-text-gradient",
            },
            {
                name: "Supabase",
                color: "pink-text-gradient",
            },
            {
                name: "sklearn",
                color: "green-text-gradient",
            },
        ],
        image: sacco,
        link: "https://sacco-steel.vercel.app",
        creds: null,
        source_code_link: "https://github.com/khalifa47/sacco",
    },
    {
        name: "KPLC Clearance",
        description:
            "An employee clearance system designed to facilitate the clearance process for exiting members of staff at Kenya Power.",
        tags: [
            {
                name: "Next.js",
                color: "orange-text-gradient",
            },
            {
                name: "MaterialUI",
                color: "blue-text-gradient",
            },
            {
                name: "MySQL",
                color: "pink-text-gradient",
            },
            {
                name: "Prisma",
                color: "green-text-gradient",
            },
        ],
        image: kplcClearance,
        link: "https://kplc-clearance.vercel.app/",
        creds: "https://drive.google.com/file/d/1T6fJ1-lsvgm8xV3nE2mdsVDXDANOd90D/view?usp=share_link",
        source_code_link: null,
    },
    {
        name: "Disney Plus Clone",
        description:
            "A Disney Plus clone (not exact) that displays the latest movie updates and trailers, powered by the TMDb and YouTube APIs.",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "Redux",
                color: "green-text-gradient",
            },
            {
                name: "styled-comps",
                color: "pink-text-gradient",
            },
            {
                name: "Firebase",
                color: "orange-text-gradient",
            }
        ],
        image: disney,
        link: "https://disney-clone-plus-ae2ae.web.app",
        creds: null,
        source_code_link: "https://github.com/khalifa47/disney-plus-clone",
    },
    {
        name: "REMS",
        description:
            "A real estate management system. From searching for properties to management of properties, this web application has it all!",
        tags: [
            {
                name: "Laravel",
                color: "pink-text-gradient",
            },
            {
                name: "ReactMUI",
                color: "blue-text-gradient",
            },
            {
                name: "MySQL",
                color: "green-text-gradient",
            },
            {
                name: "MPesaAPI",
                color: "orange-text-gradient",
            }
        ],
        image: rems,
        link: null,
        creds: null,
        source_code_link: null,
    },
    {
        name: "Ploxy News",
        description:
            "A news application that displays the latest news updates at a glance with different categories.",
        tags: [
            {
                name: "ReactMUI",
                color: "blue-text-gradient",
            },
            {
                name: "Redux",
                color: "green-text-gradient",
            },
            {
                name: "NewsAPI",
                color: "pink-text-gradient",
            },
            {
                name: "Firebase",
                color: "orange-text-gradient",
            }
        ],
        image: ploxy,
        link: null, // "https://ploxy-ccf01.web.app"
        creds: null,
        source_code_link: "https://github.com/khalifa47/ploxy",
    },
    {
        name: "NTSA Drivers",
        description:
            "An application dealing with the driver's licence management. Dummy data is used to mock the government registry.",
        tags: [
            {
                name: "ReactMUI",
                color: "blue-text-gradient",
            },
            {
                name: "Redux",
                color: "green-text-gradient",
            },
            {
                name: "MpesaAPI",
                color: "pink-text-gradient",
            },
            {
                name: "Firebase",
                color: "orange-text-gradient",
            }
        ],
        image: ntsa,
        link: null, // "https://ntsadrivers.web.app/",
        creds: null, // "https://github.com/khalifa47/ntsa-drivers/blob/master/src/records.json",
        source_code_link: "https://github.com/khalifa47/ntsa-drivers",
    },
    {
        name: "Karo",
        description:
            "An Android application dealing with school fees management.",
        tags: [
            {
                name: "Android",
                color: "green-text-gradient",
            },
            {
                name: "Kotlin",
                color: "blue-text-gradient",
            },
            {
                name: "Compose",
                color: "pink-text-gradient",
            },
            {
                name: "Firebase",
                color: "orange-text-gradient",
            }
        ],
        image: karo,
        link: null,
        creds: null,
        source_code_link: "https://github.com/khalifa47/karo",
    },
];

export { services, technologies, experiences, testimonials, projects };