import {v4 as uuidv4, v4} from 'uuid'

export const navbar = [
    {
        id: v4(),
        title: "Homepage",
        url : "/"
    },
    {
        id: v4(),
        title: "Projects",
        url: "/projects"
    },
    {
        id: v4(),
        title: "Contact Me",
        url: "/contact-me"
    }
]