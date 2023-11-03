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

import {sliderBanner1, sliderBanner2, sliderBanner3, sliderBanner4,
    sliderBanner5} from "../assets/images/slider-banners/index.js";

import { Movie1,Movie2, Movie3, Movie4, Movie5, Movie6 } from "../assets/images/movies/index.js";

import { series1, series2, series3, series4, series5, series6 } from "../assets/images/series/index.js";

import { Cartoon1, Cartoon2, Cartoon3, Cartoon4, Cartoon5, Cartoon6 } from "../assets/images/cartoons/index.js";
import {Weekly1, Weekly2, Weekly3, Weekly4, Weekly5} from "../assets/images/weekly-tops/index.js";


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

export const listSliderSearch = [
    {
        id: 1,
        imgURL: sliderBanner1
    },
    {
        id: 2,
        imgURL: sliderBanner2
    },
    {
        id: 3,
        imgURL: sliderBanner3
    },
    {
        id: 4,
        imgURL: sliderBanner4
    },
    {
        id: 5,
        imgURL: sliderBanner5
    },
    {
        id: 6,
        imgURL: sliderBanner1
    },
    {
        id: 7,
        imgURL: sliderBanner2
    },
    {
        id: 8,
        imgURL: sliderBanner3
    },
    {
        id: 9,
        imgURL: sliderBanner4
    },
    {
        id: 10,
        imgURL: sliderBanner5
    },
    {
        id: 11,
        imgURL: sliderBanner1
    },
    {
        id: 12,
        imgURL: sliderBanner2
    },
    {
        id: 13,
        imgURL: sliderBanner3
    },
    {
        id: 14,
        imgURL: sliderBanner4
    },
    {
        id: 15,
        imgURL: sliderBanner5
    },

]

export const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 1024 },
        items: 5,
        slidesToSlide: 2,
    },
    desktop: {
        breakpoint: { max: 1024, min: 800 },
        items: 4,
    },
    tablet: {
        breakpoint: { max: 800, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 5,
    },
};

export const responsiveVideo = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 1024 },
        items: 3,
        slidesToSlide: 2,
    },
    desktop: {
        breakpoint: { max: 1024, min: 800 },
        items: 4,
    },
    tablet: {
        breakpoint: { max: 800, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 5,
    },
};

export const movieData = [
    {
        id: 1,
        imageUrl: Movie1,
        name: "ME BEFORE YOU",
        price: "$19.99",
        description: "Some text about the product..",
    },
    {
        id: 2,
        imageUrl: Movie2,
        name: "FANTASTIC BEASTS",
        price: "$19.99",
        description: "Some text about the product..",
    },
    {
        id: 3,
        imageUrl: Movie3,
        name: "THOR LOVE AND THUNDER",
        price: "$19.99",
        description: "Some text about the product..",
    },
    {
        id: 4,
        imageUrl: Movie4,
        name: "VABAMEES",
        price: "$19.99",
        description: "Some text about the product..",
    },
    {
        id: 5,
        imageUrl: Movie5,
        name: "AVATAR",
        price: "$19.99",
        description: "Some text about the product..",
    },
    {
        id: 6,
        imageUrl: Movie6,
        name: "ROBIN HOOD",
        price: "$19.99",
        description: "Some text about the product..",
    },
    {
        id: 7,
        imageUrl: Movie1,
        name: "ME BEFORE YOU",
        price: "$19.99",
        description: "Some text about the product..",
    },
    {
        id: 8,
        imageUrl: Movie2,
        name: "FANTASTIC BEASTS",
        price: "$19.99",
        description: "Some text about the product..",
    },
    {
        id: 9,
        imageUrl: Movie3,
        name: "THOR LOVE AND THUNDER",
        price: "$19.99",
        description: "Some text about the product..",
    },
    {
        id: 10,
        imageUrl: Movie4,
        name: "VABAMEES",
        price: "$19.99",
        description: "Some text about the product..",
    }
];

export const seriesData = [
    {
        id: 1,
        imageUrl: series1,
        name: "GINNY & GEORGIA",
        price: "$19.99",
        description: "Some text about the product..",
    },
    {
        id: 2,
        imageUrl: series2,
        name: "YOU",
        price: "$19.99",
        description: "Some text about the product..",
    },
    {
        id: 3,
        imageUrl: series3,
        name: "WEDNESDAY",
        price: "$19.99",
        description: "Some text about the product..",
    },
    {
        id: 4,
        imageUrl: series4,
        name: "STRANGER THINGS",
        price: "$19.99",
        description: "Some text about the product..",
    },
    {
        id: 5,
        imageUrl: series5,
        name: "BATCHED",
        price: "$19.99",
        description: "Some text about the product..",
    },
    {
        id: 6,
        imageUrl: series6,
        name: "DAWN OF THE SEVEN",
        price: "$19.99",
        description: "Some text about the product..",
    },
    {
        id: 7,
        imageUrl: series1,
        name: "GINNY & GEORGIA",
        price: "$19.99",
        description: "Some text about the product..",
    },
    {
        id: 8,
        imageUrl: series2,
        name: "YOU",
        price: "$19.99",
        description: "Some text about the product..",
    },
    {
        id: 9,
        imageUrl: series3,
        name: "WEDNESDAY",
        price: "$19.99",
        description: "Some text about the product..",
    },
    {
        id: 10,
        imageUrl: series4,
        name: "STRANGER THINGS",
        price: "$19.99",
        description: "Some text about the product..",
    }
];

export const cartoonData = [
    {
        id: 1,
        imageUrl: Cartoon1,
        name: "HOME",
        price: "$19.99",
        description: "Some text about the product..",
    },
    {
        id: 2,
        imageUrl: Cartoon2,
        name: "ZOOTOPIE",
        price: "$19.99",
        description: "Some text about the product..",
    },
    {
        id: 3,
        imageUrl: Cartoon3,
        name: "TANGLED",
        price: "$19.99",
        description: "Some text about the product..",
    },
    {
        id: 4,
        imageUrl: Cartoon4,
        name: "BRAVE",
        price: "$19.99",
        description: "Some text about the product..",
    },
    {
        id: 5,
        imageUrl: Cartoon5,
        name: "SING2",
        price: "$19.99",
        description: "Some text about the product..",
    },
    {
        id: 6,
        imageUrl: Cartoon6,
        name: "LUCA",
        price: "$19.99",
        description: "Some text about the product..",
    },
    {
        id: 7,
        imageUrl: Cartoon1,
        name: "HOME",
        price: "$19.99",
        description: "Some text about the product..",
    },
    {
        id: 8,
        imageUrl: Cartoon2,
        name: "ZOOTOPIE",
        price: "$19.99",
        description: "Some text about the product..",
    },
    {
        id: 9,
        imageUrl: Cartoon3,
        name: "TANGLED",
        price: "$19.99",
        description: "Some text about the product..",
    },
    {
        id: 10,
        imageUrl: Cartoon4,
        name: "BRAVE",
        price: "$19.99",
        description: "Some text about the product..",
    }
];

export const outstandingData = [
    {
        id: 1,
        imageUrl: Weekly1,
        name: "THE LITTLE MERMAID",
        price: "$19.99",
        description: "Some text about the product..",
        order: 1
    },
    {
        id: 2,
        imageUrl: Weekly2,
        name: "THOR LOVE AND THUNDER",
        price: "$19.99",
        description: "Some text about the product..",
        order: 2
    },
    {
        id: 3,
        imageUrl: Weekly3,
        name: "AVATAR",
        price: "$19.99",
        description: "Some text about the product..",
        order: 3
    },
    {
        id: 4,
        imageUrl: Weekly4,
        name: "FINNICK",
        price: "$19.99",
        description: "Some text about the product..",
        order: 4
    },
    {
        id: 5,
        imageUrl: Weekly5,
        name: "YOU",
        price: "$19.99",
        description: "Some text about the product..",
        order: 5
    },
    {
        id: 6,
        imageUrl: Weekly1,
        name: "THE LITTLE MERMAID",
        price: "$19.99",
        description: "Some text about the product..",
        order: 6
    },
    {
        id: 7,
        imageUrl: Weekly2,
        name: "THOR LOVE AND THUNDER",
        price: "$19.99",
        description: "Some text about the product..",
        order: 7
    },
    {
        id: 8,
        imageUrl: Weekly3,
        name: "AVATAR",
        price: "$19.99",
        description: "Some text about the product..",
        order: 8
    },
    {
        id: 9,
        imageUrl: Weekly4,
        name: "FINNICK",
        price: "$19.99",
        description: "Some text about the product..",
        order: 9
    },
    {
        id: 10,
        imageUrl: Weekly5,
        name: "YOU",
        price: "$19.99",
        description: "Some text about the product..",
        order: 10
    }
];

export const ContinueWatchingData = [
    {
        id: 1,
        imageUrl: "https://www.youtube.com/watch?v=xOsLIiBStEs&t=4s",
        name: "Soul 2020",
        price: "$19.99",
        description: "Some text about the product..",
    },
    {
        id: 2,
        imageUrl: "https://www.youtube.com/watch?v=iszwuX1AK6A&t=10s",
        name: "The Wolf of wall street 2013",
        price: "$19.99",
        description: "Some text about the product..",
    },
    {
        id: 3,
        imageUrl: "https://www.youtube.com/watch?v=76AuB3eZxS4" ,
        name: "Elite 2018, season2",
        price: "$19.99",
        description: "Some text about the product..",
    },
    {
        id: 4,
        imageUrl: "https://www.youtube.com/watch?v=cajLoaFl2Zo&t=42s",
        name: "Euphoria 2019",
        price: "$19.99",
        description: "Some text about the product..",
    },
    {
        id: 5,
        imageUrl: "https://www.youtube.com/watch?v=2EnP2tVC00Q",
        name: "Lật mặt 6",
        price: "$19.99",
        description: "Some text about the product..",
    },
    {
        id: 6,
        imageUrl: "https://www.youtube.com/watch?v=H8vDoSghadk",
        name: "Blue beetle",
        price: "$19.99",
        description: "Some text about the product..",
    },
    {
        id: 7,
        imageUrl: "https://www.youtube.com/watch?v=SS4xaLNVqfc",
        name: "Hidden Strike",
        price: "$19.99",
        description: "Some text about the product..",
    },
    {
        id: 8,
        imageUrl: "https://www.youtube.com/watch?v=lAoBjciGva4",
        name: "The little mermaid",
        price: "$19.99",
        description: "Some text about the product..",
    }
];