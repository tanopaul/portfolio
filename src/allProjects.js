import krispanko from './assets/krispanko.png';
import collin from './assets/collinshakes.png';
import doug from './assets/doughelberg.png';
import jon from './assets/jon.png';
import matt from './assets/matthew.png';
import eman from './assets/eman.png';
import kim from './assets/kimberly.png';


const all_projects = [
    {
        id: 1,
        class: 'flatify',
        title: 'Flatify',
        team: [
            {
                name: "Kris Panko",
                image: krispanko
            }, 
            {
                name: "Collin Shakes",
                image: collin
            }, 
            {
                name: "Douglas Hellberg",
                image: doug
            }
        ],
        languages: ['React.js', 'CSS'],
        background: 'hsla(206, 84%, 86%, 1)',
        browser: 'browser-black.png',
        image1: 'flatify.png',
        videos: ['spotify-select.mp4', 'spotify-search.mp4', 'spotify-pages.mp4'],
        overview: "Immerse yourself in a Spotify-inspired experience crafted with the dynamic capabilities of React.js and polished with pure CSS. This app not only allows users to seamlessly explore the latest music releases from Spotify's API but also provides the functionality to store their favorites and conduct targeted song searches. When a track is favorited, a persistent heart icon accompanies it throughout the app until it's removed from the user's favorites. Additionally, the application leverages React Router DOM to create distinct routes leading to different pages, enhancing the overall navigation experience. Moreover, it integrates 'react-h5-audio-player' to deliver a tailored player interface that mirrors the distinctive look and feel of Spotify's music player.",
        github: "https://github.com/kris-panko/flatify"
    },
    {
        id: 2,
        class: 'pokedex',
        title: 'FitFlav',
        team: [],
        languages: ['Flask', 'SQLAlchemy', 'React.js', 'CSS'],
        background: 'hsla(172, 45%, 75%, 1)',
        browser: 'browser-blue.png',
        image1: 'FitFlavImg.png',
        videos: ['FitFlav-Login.mp4', 'FitFlavCalories.mp4', 'FitFlavCommunity.mp4'],
        overview: "Elevate your culinary experience with FitFlav, a platform that empowers users to craft, save, and customize their cherished recipes. Here, you have the ability to fine-tune the calorie count for each creation and generously share your culinary masterpieces with the community. The application offers a seamless process for users to establish their secure profiles, ensuring that passwords are meticulously hashed before storage in the database. FitFlav is intelligently integrated with a food ingredients API, providing precise calorie information for every recipe inputted. Effortlessly adjust the total calorie count while simultaneously fine-tuning the proportions of individual ingredients. Additionally, users can explore and incorporate recipes from the vibrant Community page, expanding the horizons of their culinary repertoire.",
        github: "https://github.com/tanopaul/phase-5-final-project"
    },
    {
        id: 3,
        class: 'game',
        title: 'Adventures of Mattanoman',
        team: [
            {
                name: "Eman Gurung",
                image: eman
            }, 
            {
                name: "Matthew Stewart",
                image: matt
            }
        ],
        languages: ['Python', 'SQL'],
        background: 'hsla(22, 62%, 76%, 1)',
        browser: 'browser-black.png',
        image1: 'game.png',
        videos: ['game-start.mp4', 'game-shop.mp4', 'game-battle.mp4'],
        overview: "Embark on an enchanting journey through the realm of Eldoria with this Python and SQL-powered Command Line Interface (CLI) game. Within this captivating adventure, players can traverse diverse regions of the map, embarking on quests to discover gold, engage in thrilling monster battles, acquire weaponry, solve intricate puzzles, and ultimately face off against the malevolent dragon, Zuko. The game's meticulously designed SQL tables facilitate intricate many-to-many relationships among monsters, locations, items, and users. Furthermore, strategically placed while loops ensure continuous user engagement by prompting specific responses. To enhance immersion, the game incorporates 'pygame' for tailored sound effects that punctuate pivotal actions throughout the gameplay experience.",
        github: "https://github.com/Matt827/Phase-3-group-4-project"
    },
    {
        id: 4,
        class: 'flask',
        title: 'FitConnect',
        team: [
            {
                name: "Kimberly Love",
                image: kim
            }, 
            {
                name: "Jon Lea",
                image: jon
            }, 
            {
                name: "Collin Shakes",
                image: collin
            }
        ],
        languages: ['Flask', 'SQLAlchemy', 'React.js', 'CSS'],
        background: 'hsla(284, 61%, 74%, 1)',
        browser: 'browser-blue.png',
        image1: 'fitconnectpicture1.png',
        videos: ['fitconnect2.mp4', 'fitconnect3.mp4', 'fitconnect1.mp4'],
        overview: "Embark on a fitness-centered social media journey with this robust full-stack application, skillfully crafted using React.js, CSS, Flask, and SQLAlchemy. Upon entry, users are greeted with a login/signup interface, offering the choice to either access existing accounts or establish new ones. Account creation triggers the secure storage of a password hash in the database. Subsequently, the user's unique ID is encoded as a session cookie, allowing them to stay logged on to the main page despite leaving the website. Here, users can peruse an array of posted workouts, extending the opportunity to engage through comments. They're also empowered to contribute their own workouts for fellow users to review and discuss. The authorship of comments grants users the flexibility to edit or remove their contributions.",
        github: "https://github.com/Kmlove/FitConnect-Phase-4-Project"
    }
];

export {all_projects}
