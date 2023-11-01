import {
    searchItem1,
    searchItem2,
    searchItem3,
    searchItem4,
    searchItem5,
    searchBanner1,
    searchBanner2,
    searchBanner3} from "../assets/images/searchs";
import {
    iconMyMovies,
    iconVideoPlayer,
    iconCinema,
    iconMovies,
    iconDownload,
    iconWatchMovie,
    iconHeart,
    iconBookMark, iconInstagram, iconTwitter, iconFacebook, iconSend
} from "../assets/images/icons"

export const navLinks = [
    { href: "home", label: "Home" },
    { href: "movies", label: "Movies" },
    { href: "series", label: "Series" },
    { href: "top", label: "Top" },
];


export const listImgSearchCategory = [
    {
        id: 1,
        imgURL: searchItem1
    },
    {
        id: 2,
        imgURL: searchItem2
    },
    {
        id: 3,
        imgURL: searchItem3
    },
    {
        id: 4,
        imgURL: searchItem4
    },
    {
        id: 5,
        imgURL: searchItem5
    }
];

export const actors = [
    {
        id: 1,
        name: 'Leonardo DiCaprio'
    },
    {
        id: 2,
        name: 'Johnny Depp'
    },
    {
        id: 3,
        name: 'Jared Leto'
    },
    {
        id: 4,
        name: 'Robert Downey Jr'
    },
    {
        id: 5,
        name: 'Brad Pitt'
    },
    {
        id: 6,
        name: 'Tome Cruise'
    }
]

export const listBannerCategory = [
    {
        id: 1,
        imgURL: searchBanner1
    },
    {
        id: 2,
        imgURL: searchBanner2
    },
    {
        id: 3,
        imgURL: searchBanner3
    }
];

export const listLinks = [
    {
        id:1,
        imgURL:iconMyMovies,
        title: 'Movies',
        links: '/movies'
    },
    {
        id:2,
        imgURL:iconVideoPlayer,
        title: 'Series',
        links: '/series'
    },
    {
        id:3,
        imgURL:iconCinema,
        title: 'Cartoons',
        links: '/cartoons'
    },
    {
        id:4,
        imgURL:iconMovies,
        title: 'Top',
        links: '/tops'
    },
    {
        id:5,
        imgURL:iconDownload,
        title: 'Download',
        links: '/downloads'
    },
    {
        id:6,
        imgURL:iconWatchMovie,
        title: 'Mew',
        links: '/news'
    },
    {
        id:7,
        imgURL:iconHeart,
        title: 'Like',
        links: '/likes'
    },
    {
        id:8,
        imgURL:iconBookMark,
        title: 'Looked',
        links: '/looked'
    }
]

export const listSocials = [
    {
        id: 1,
        imgURL: iconInstagram,
        link: 'Instagram'
    },
    {
        id: 2,
        imgURL: iconTwitter,
        link: 'Twitter'
    },
    {
        id: 3,
        imgURL: iconFacebook,
        link: 'Facebook'
    },
    {
        id: 4,
        imgURL: iconSend,
        link: 'Send'
    }
]

export const listLinkFooters = [
    {
        id: 1,
        title: 'Home',
        link: 'home'
    },
    {
        id: 2,
        title: 'Jobs',
        link: 'Info'
    },
    {
        id: 3,
        title: 'Info',
        link: 'info'
    },
    {
        id: 4,
        title: 'Support',
        link: 'support'
    },
    {
        id: 5,
        title: 'Contact us',
        link: 'contact'
    },
    {
        id: 6,
        title: 'FAQ',
        link: 'faq'
    },
    {
        id: 7,
        title: 'Account',
        link: 'account'
    },
    {
        id: 8,
        title: 'Helper Center',
        link: 'help'
    }

]
