import { ICombinedInformation, IDirectMessageItem, IInitialInformation, ITitledListItem } from "./Models";

class DynamicValues {
    static initialInformation: IInitialInformation = {
        name: "Alishba Javed",
        occupation: "Software Developer",
    }

    static directMessageItems: Array<IDirectMessageItem> = [
        {
            name: "WhatsApp",
            link: "https://api.whatsapp.com/send?phone=8801796306262"
        },
        {
            name: "Messenger",
            link: "https://m.me/p32929"
        },
        {
            name: "Telegram",
            link: "https://t.me/p32929"
        },

    ]

    static about: Array<ITitledListItem> = [
        {
            text: "Information",
            shouldNotSort: true,
            arr: [
                {
                    title: "Name",
                    desc: "Alishba Javed",
                    logo: "https://cdn-icons-png.flaticon.com/128/1077/1077012.png"
                },
                {
                    title: "Work Experience",
                    desc: "Internship at Havenir Solutions",
                    logo: "https://cdn-icons-png.flaticon.com/128/3281/3281289.png"
                },
                {
                    title: "Languages",
                    desc: "English, Hindi, Urdu etc",
                    logo: "https://cdn-icons-png.flaticon.com/128/3898/3898150.png"
                },
                {
                    title: "Nationality",
                    desc: "Pakistani",
                    logo: "https://upload.wikimedia.org/wikipedia/commons/3/32/Flag_of_Pakistan.svg"
                },
                {
                    title: "Resume(wait)",
                    desc: "Click the link icon to view/download",
                    link: "https://docs.google.com/document/d/1vRgTCQ-UvzjGXK7s-TR5VpmjHZ7OmSmOs5G69znPhqA/edit?usp=sharing",
                    logo: "https://cdn-icons-png.flaticon.com/128/909/909212.png"
                }
            ]
        },
        {
            text: "Experiences",
            arr: [
                {
                    title: "Havenir Solutions",
                    desc: "MERN & React-Native Developer",
                    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNHF8WTyUzN8fteZYxBFDcJ-NVSCs7b-chbQ&s"
                },
            ]
        }
    ]

    static skills: Array<ITitledListItem> = [
        {
            text: "Programming / Markup Languages",
            arr: [
                {
                    title: 'C',
                    logo: 'https://seeklogo.com/images/C/c-logo-672525892C-seeklogo.com.png',
                },
                {
                    title: 'C++',
                    logo: 'https://seeklogo.com/images/C/c-logo-1B1817C041-seeklogo.com.png',
                },
                {
                    title: 'C#',
                    logo: 'https://images.seeklogo.com/logo-png/36/1/c-sharp-c-logo-png_seeklogo-363285.png',
                },
                {
                    title: 'Python',
                    logo: 'https://www.vectorlogo.zone/logos/python/python-icon.svg',
                },
                {
                    title: 'JavaScript',
                    logo: 'https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg',
                },
                {
                    title: 'HTML',
                    logo: 'https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg',
                },
                {
                    title: 'CSS',
                    logo: 'https://seeklogo.com/images/C/css3-logo-F1923C8D0E-seeklogo.com.png',
                },
                {
                    title: 'TypeScript',
                    logo: 'https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg',
                },
                {
                    title: 'Dart',
                    logo: 'https://www.vectorlogo.zone/logos/dartlang/dartlang-icon.svg',
                },
            ]
        },
        {
            text: "Databases",
            arr: [
                {
                    title: 'MongoDB',
                    logo: 'https://cdn.iconscout.com/icon/free/png-128/mongodb-3521676-2945120.png'
                },
                {
                    title: 'SQL',
                    logo: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png',
                },
            ]
        },
        {
            text: "UI Component Libraries",
            arr: [
                {
                    title: 'Material-UI',
                    logo: 'https://mui.com/static/logo.png'
                },
                {
                    title: 'Tailwind CSS',
                    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/512px-Tailwind_CSS_Logo.svg.png?20230715030042'
                },
                {
                    title: 'Bootstrap',
                    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png'
                },
            ]
        },
        {
            text: "Libraries / Frameworks / Techs",
            arr: [
                {
                    title: 'Android App Development',
                    logo: 'https://www.vectorlogo.zone/logos/android/android-icon.svg'
                },
                {
                    title: 'NodeJS',
                    logo: 'https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg'
                },
                {
                    title: 'ExpressJS',
                    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2_RY4COV565Nju7b4ZI5tsPkJQT1imxdFXg&s'
                },
                {
                    title: 'ReactJS',
                    logo: 'https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg'
                },
                {
                    title: 'Redux',
                    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png'
                },
                {
                    title: 'React Native',
                    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'
                },
                {
                    title: 'Mongoose',
                    logo: 'https://avatars.githubusercontent.com/u/7552965?s=200&v=4'
                },
                {
                    title: 'NextJS',
                    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJPpa5L8BQWfwHOIFMaKr5GBWr-Voo7-_OLw&s'
                },
                {
                    title: 'OpenCV',
                    logo: 'https://www.vectorlogo.zone/logos/opencv/opencv-icon.svg'
                },
                {
                    title: 'Firebase',
                    logo: 'https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg'
                },
                {
                    title: 'Flutter',
                    logo: 'https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg'
                },
                {
                    title: 'Numpy',
                    logo: 'https://numpy.org/images/logo.svg'
                },
                {
                    title: 'Pandas',
                    logo: 'https://pandas.pydata.org/static/img/pandas_white.svg'
                },
                {
                    title: 'Matplotlib',
                    logo: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg'
                },
                {
                    title: 'Socket.io',
                    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Socket-io.svg'
                },
                {
                    title: 'Flask',
                    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeDJSaZ_KS_yCrn77Gc9PUC2VRehAqRBZ27g&s'
                },
                {
                    title: 'Docker',
                    logo: 'https://cdn.iconscout.com/icon/free/png-128/docker-226091.png'
                },
                {
                    title: 'Git',
                    logo: 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg'
                },
                {
                    title: 'Expo',
                    logo: 'https://www.vectorlogo.zone/logos/expoio/expoio-icon.svg'
                },
                {
                    title: 'NestJS',
                    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/NestJS.svg'
                },

            ]
        },
        {
            text: "Others",
            arr: [
                {
                    title: 'Android Studio',
                    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Android_Studio_Icon_3.6.svg/512px-Android_Studio_Icon_3.6.svg.png?20210301045217'
                },
                {
                    title: 'VS Code',
                    logo: 'https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_vscode_icon_130084.png'
                },
                {
                    title: 'Jira',
                    logo: 'https://cdn.iconscout.com/icon/free/png-128/jira-3628861-3030001.png'
                },
                {
                    title: 'Figma',
                    logo: 'https://www.vectorlogo.zone/logos/figma/figma-icon.svg'
                },
                {
                    title: 'Yarn',
                    logo: 'https://www.vectorlogo.zone/logos/yarnpkg/yarnpkg-icon.svg'
                },
                {
                    title: 'npm',
                    logo: 'https://www.vectorlogo.zone/logos/npmjs/npmjs-icon.svg'
                },
            ]
        },
    ]

    static projects: Array<ITitledListItem> = [
        {
            text: "Web Apps",
            arr: [
                {
                    title: "Duas",
                    link: "https://p32929.github.io/duas/",
                    logo: "https://p32929.github.io/duas/favicon.png",
                    desc: "A collection of duas I try to regularly recite - created using flutter web",
                },
                {
                    title: "Sha1ToMd5",
                    link: "https://p32929.github.io/Sha1ToMd5/",
                    logo: "https://github.com/user-attachments/assets/6d63227d-1b72-4c22-9923-b2a4c96d4b68",
                    desc: "A simple utility tool to convert Google Play Release APK Sha1 value to MD5 for Facebook login to work. ",
                },
                {
                    title: "dobd.xyz",
                    link: "https://admui.vercel.app",
                    logo: "https://admui.vercel.app/android-chrome-512x512.png",
                    desc: "Best online downloader for YouTube, Facebook, Instagram, Tiktok and more",
                },
                {
                    title: "s3cr3tm3",
                    link: "https://s3cr3tm3.netlify.app/",
                    logo: "https://user-images.githubusercontent.com/6418354/173877444-59dbdd3d-1b5d-4b92-ad53-30fada9362d2.png",
                    desc: "Share secret messages secretely",
                },
                {
                    title: 'OrderZesty',
                    logo: 'https://orderzesty.com/wp-content/uploads/2021/10/Zesty-icon@3x-300x300.png',
                    desc: 'Personal chef service delivering fresh signature meals.',
                    link: 'https://orderzesty.com/',
                },
                {
                    title: 'DramaDB',
                    logo: 'https://dramadb.vercel.app/apple-icon.png',
                    desc: 'A serverless hobby project that lets you filter Asian drama by country, genre, status, year and popularity',
                    link: 'https://dramadb.vercel.app/'
                },
                {
                    title: 'Sh0Sh0',
                    logo: 'https://github.com/3r4y/react-portfolio-template/assets/6418354/a159e1d8-fabc-4f58-9391-0c3be4d14d7e',
                    desc: 'A beautifully created Absolutely FREE URL shortener for everyone made using React Shadcn Firebase. ',
                    link: 'https://sh0sh0.netlify.app/',
                },
                {
                    title: 'Github Trending',
                    logo: 'https://github.com/user-attachments/assets/d93d3ea0-769b-42f1-8107-403bb9760ccd',
                    desc: 'A simple webpage that scrapes github LIVE in front of your eyes and gets the list of trending repositories',
                    link: 'http://tiny.cc/ghtre',
                },
                // {
                //     title: "TheRealWorldFree",
                //     logo: "https://framerusercontent.com/images/Tttp7tCHSlFL4GgIF783y9wn7vQ.webp",
                //     desc: "Enjoy the real world for free :)",
                //     link: "https://trwfree.vercel.app/"
                // },
                {
                    title: "BreakingMars",
                    logo: "https://github.com/p32929/portfolio-v2/assets/6418354/8b6c5a1c-fc31-44a8-822e-73814ff57ac3",
                    desc: '#1 Leading & Effortless Prospect Perceiving Platform',
                    link: "https://web.archive.org/web/20220413085335/https://www.breakingmars.com/"
                },
                {
                    title: "Voomnow",
                    desc: "Next generation audio recorder",
                    logo: "https://user-images.githubusercontent.com/6418354/173876916-e27cb77f-49f1-4190-be54-4c1ddaa2973d.svg",
                    link: "https://web.archive.org/web/20220326215025/https://www.voomnow.com/"
                },
                {
                    title: 'Shajao',
                    logo: 'https://sdn.signalhire.co/storage/company/1dfc/9704/f9d3/ff49/cdce/31bb/c4d7/0628.webp',
                    desc: 'Framing Happiness',
                    link: "https://web.archive.org/web/20191222090655/https://shajao.com/"
                },
                {
                    title: 'ChargeOnSite',
                    logo: 'https://static.wixstatic.com/media/182a81_c4e4ee2bac6d4389a866239475519bdf~mv2.png/v1/fill/w_192%2Ch_192%2Clg_1%2Cusm_0.66_1.00_0.01/182a81_c4e4ee2bac6d4389a866239475519bdf~mv2.png',
                    desc: 'Charge OnSite',
                    link: "https://www.chargeonsite.com/",
                },
                {
                    title: 'MathFinity',
                    logo: 'https://p32929.github.io/mathfinity/icons/Icon-192.png',
                    desc: 'Simple, infinite & fun math game for everyone',
                    link: "https://p32929.github.io/mathfinity/",
                },
            ]
        },
        {
            text: "Android Apps",
            arr: [
                {
                    title: "Al Quran by Quran Touch",
                    link: "https://www.apkmonk.com/app/com.qurantouch.qurantouchhd.app/",
                    logo: "https://is3-ssl.mzstatic.com/image/thumb/Purple112/v4/9d/7e/ed/9d7eedd6-e567-5251-bed6-dce7e868bb57/AppIcon-0-1x_U007emarketing-0-10-0-85-220.png/246x0w.webp",
                    desc: "The most comprehensive Muslim App!"
                },
                {
                    title: 'Thamao',
                    logo: 'https://cdn.apkmonk.com/logos/com.thamao_150x150.png',
                    desc: 'বাংলাদেশে স্মার্টফোনের চুরি এবার অসম্ভব',
                    link: 'https://www.apkmonk.com/app/com.thamao/',
                },
                {
                    title: 'Desplash',
                    logo: 'https://lh3.googleusercontent.com/ILrto9KguXlr-clbhYKUonpnHszgNp_N5Qvc8_u9QaM71oaqNKcYql2sV3sqZ7nqzsc=s180',
                    desc: 'Automatic Free High Quality Wallpapers powered by Unsplash.com',
                    link: 'https://www.xda-developers.com/desplash-wallpaper-app-unsplash/',
                },
                {
                    title: 'The Great Postman',
                    logo: 'https://lh3.googleusercontent.com/ni-lk3b2nTMZyC7r1wYBW6cm9eYqGAN-t6fXV-kD0lSyw1lO3kenC1We71fZjSryvFII=s180',
                    desc: 'Powerful, Lightweight REST API client for Android',
                    link: 'https://apkcombo.com/es/rest-api-client-the-great-postman/p32929.greatpostman/'
                },
                {
                    title: 'Sleepy - Addiction Remover',
                    logo: 'https://user-images.githubusercontent.com/6418354/192146268-29e1bac2-e477-4010-ae03-96adecbf07e6.png',
                    desc: 'The one and only EFFECTIVE addiction remover on Google Play store',
                    link: 'https://apkcombo.com/es/sleepy-phone-addiction-controller/p32929.lazyphone/'
                },
                {
                    title: 'Best CGPA Calculator',
                    logo: 'https://user-images.githubusercontent.com/6418354/192146303-6e04c9ac-ffb2-4931-bb10-ef54ff7af382.png',
                    desc: 'A simple yet effective CGPA Calculator for University students',
                    link: 'https://apkcombo.com/es/cgpa-calculator-for-update-see-the-description/p32929.cgpa_calculator/',

                },
                {
                    title: 'Buy Sell BD',
                    logo: 'https://image.winudf.com/v2/image1/cDMyOTI5LmJ1eXNlbGxiZF9pY29uXzE1NTkyOTQ5NjVfMDYz/icon.png?w=170&fakeurl=1',
                    desc: 'A better & more reliable alternative for Bikroy.com - A marketplace app for buying-selling new/used goods',
                    link: 'https://apkcombo.com/es/buy-sell-bd-buy-sell-everything-easily-in-bd/p32929.buysellbd/'
                },
                {
                    title: 'ExIn',
                    logo: 'https://lh3.googleusercontent.com/X8mRJd7JajvDXoW7NaluKt2IvC3osH6czkTPoWeSYJ96U2LWLKT4xiFgvNouwf-UvEk=s180',
                    desc: 'A Simple & user friendly income-expense tracker ',
                    link: "https://apkcombo.com/es/exin-discontinued/p32929.exin/",
                },
                {
                    title: 'I am free',
                    logo: 'https://image.winudf.com/v2/image1/cDMyOTI5LmltZnJlZV9pY29uXzE1NzY4ODAwNzVfMDU3/icon.png?w=170&fakeurl=1',
                    desc: 'বেকার মুক্ত বাংলাদেশ গড়ার লক্ষ্যে - I am FREE',
                    link: 'https://apkcombo.com/es/i-am-free/p32929.imfree/'
                },
                {
                    title: 'Awesome NCTB',
                    logo: 'https://image.winudf.com/v2/image1/b3JnLnJpY2hpdC5uY3RiX2ljb25fMTU3NjU3MjcwNF8wMjI/icon.png?fakeurl=1',
                    desc: 'Download NCTB Books easily and Free',
                    link: 'https://apkcombo.com/es/awesome-nctb/org.richit.nctb/'
                },
                {
                    title: 'বৃক্ষ ( Brikkho )',
                    logo: 'https://image.winudf.com/v2/image1/b3JnLnJpY2hpdC5icmlra2hvX2ljb25fMTU3MDEyMTU0Ml8wODA/icon.png?fakeurl=1',
                    desc: 'Learn about trees in your fingertips',
                    link: 'https://apkcombo.com/es/%E0%A6%AC%E0%A7%83%E0%A6%95%E0%A7%8D%E0%A6%B7-brikkho/org.richit.brikkho/'
                },
                {
                    title: 'IQQuiz',
                    logo: 'https://image.winudf.com/v2/image1/b3JnLnJpY2hpdC5pcXF1aXphcHBfaWNvbl8xNTcxMDE0NzcxXzA2Mg/icon.png?fakeurl=1',
                    desc: 'A simple IQ game',
                    link: 'https://apkcombo.com/es/iqquiz/org.richit.iqquizapp/'
                },
                {
                    title: 'BirdsLover',
                    logo: 'https://image.winudf.com/v2/image1/b3JnLnJpY2hpdC5iaXJkc2xvdmVyX2ljb25fMTU3MjAwNDIxNl8wOTE/icon.png?fakeurl=1',
                    desc: 'Learn about birds in your fingertips',
                    link: 'https://apkcombo.com/es/birdslover/org.richit.birdslover/'
                },
                {
                    title: 'Animal Lover',
                    logo: 'https://image.winudf.com/v2/image1/b3JnLnJpY2hpdC5hbmltYWxfaWNvbl8xNTc3MjkyMzIzXzAyMw/icon.png?fakeurl=1',
                    desc: 'Learn about birds in your fingertips',
                    link: 'https://apkcombo.com/es/animal-lover/org.richit.animal/'
                },
                {
                    title: 'Jibanananda Recitation (Abritti)',
                    logo: 'https://image.winudf.com/v2/image1/b3JnLnJpY2hpdC5qaWJvbmFuZG9rb2JpdGFzb21vZ3JvX2ljb25fMTU3MDEwNDExNF8wNDc/icon.png?fakeurl=1',
                    desc: '50+ poems of Jibanananda Das with audio recitation',
                    link: 'https://apkcombo.com/es/jibanananda-recitation-abritti/org.richit.jibonandokobitasomogro/'
                },
                {
                    title: 'MathLover (Simple, Infinite, Math game)',
                    logo: 'https://lh3.googleusercontent.com/GaisH_-MeK2c_ct4kp5qbqxbJPE-q4isTdZswR4CocgB8sLNCFk4beXdlmaaFuveKUwd',
                    desc: 'MathLover is a simple, infinite mathematical problem solving game for everyone.',
                    link: 'https://apkcombo.com/es/mathlover-simple-infinite-math-game/org.richit.mathblitz/',
                },
                {
                    title: 'Hospitals BD',
                    logo: 'https://lh3.googleusercontent.com/MMfY8vG1YfAFh1w6iHEp8NXCwl-NSCUDmfPkUAWmqhSGfO3JR7vBvw_XZzV8JxrDag',
                    desc: 'Get nearest Hospital Information in Bangladesh in your fingertips',
                    link: 'https://apkcombo.com/es/hospitals-bd/org.richit.contacthospitals/'
                },
                {
                    title: 'BirthdayBot',
                    logo: `https://cdn.iconscout.com/icon/premium/png-256-thumb/gift-2990371-2484427.png`,
                    desc: 'Birthday wishing apps, made for individual people...',
                    link: 'https://github.com/p32929/my_android_apps/releases/tag/all'
                },
            ]
        },
        {
            text: "Desktop Apps",
            arr: [
                {
                    title: 'PotatoTimer',
                    logo: 'https://raw.githubusercontent.com/p32929/PotatoTimer/master/resources/icon.ico',
                    desc: 'A pomotodo app that forces you to take a break - created using ElectronJS',
                    link: 'https://github.com/p32929/Electron-Pomotodo'
                },
                {
                    title: 'Pomota',
                    logo: 'https://github.com/p32929/pomota/blob/master/src-tauri/icons/128x128.png?raw=true',
                    desc: 'A simple user-friendly cross-platform tauri based pomodoro timer app that forces you to take a break',
                    link: 'https://github.com/p32929/pomota',
                },
                {
                    title: 'google calender widget',
                    logo: 'https://duckduckgo.com/i/e2d8001c.png',
                    desc: 'An unofficial google calendar desktop widget for Windows, Mac and Linux ',
                    link: 'https://github.com/p32929/google-calender-widget',
                },
                {
                    title: 'MacJuiceMonitor',
                    logo: 'https://github.com/user-attachments/assets/21b4d0ac-1734-4d42-9da4-e873628a022a',
                    desc: 'Your essential tool for keeping track of all your Bluetooth-connected devices\' battery levels, conveniently located in the macOS menu bar',
                    link: 'https://github.com/p32929/mac-juice-monitor',
                },

            ]
        },
        {
            text: "Command Line Interfaces ( CLIs )",
            arr: [
                {
                    title: 'Shortcut Virus Remover',
                    logo: 'https://cdn-icons-png.flaticon.com/128/3223/3223766.png',
                    desc: 'Shortcut virus remover script for Windows',
                    link: 'https://github.com/p32929/Shortcut-Virus-Remover',

                },
                {
                    title: 'Fay',
                    logo: 'https://crates.io/assets/cargo.png',
                    desc: 'A simple cross platform CLI app written in Rust to automate multiple shell ( bash or cmd ) commands',
                    link: 'https://crates.io/crates/fay'
                },
                {
                    title: 'SIIN',
                    logo: 'https://crates.io/assets/cargo.png',
                    desc: 'A batch installer that downloads and installs a list of apps, written in Rust ( Kinda like Ninite )',
                    link: 'https://crates.io/crates/siin'
                },

            ]
        },
        {
            text: "Automations",
            arr: [
                {
                    title: 'Dingtone Bot',
                    logo: 'https://github.com/p32929/portfolio-v2/assets/6418354/f24e64e7-ef7a-4d2d-a7d9-55f4797043cf',
                    desc: 'A bot made using Python and UIAutomator2 to automate watching ads on certain apps to get credits',
                    link: 'https://drive.google.com/file/d/159D_tco3qkpgh2a3CWz-f0ixPEpeUN8V/view?usp=sharing'
                },
                {
                    title: 'Indeed-Linkedin bot',
                    logo: 'https://github.com/p32929/portfolio-v2/assets/6418354/f24e64e7-ef7a-4d2d-a7d9-55f4797043cf',
                    desc: 'An automation bot created using playwright to automate applying jobs on Indeed and Linkedin',
                    link: 'https://drive.google.com/file/d/10Xc4Y0Z5KXxKhb9StF3bQfivYHHeNZsa/view?usp=sharing',
                }
            ]
        },
    ]

    static contacts: Array<ITitledListItem> = [
        {
            text: "Contact me",
            arr: [
                {
                    title: 'WhatsApp ( Recommended )',
                    logo: 'https://user-images.githubusercontent.com/6418354/155842184-b064bf36-de8e-4317-8f8e-cb7755eed995.png',
                    link: 'https://api.whatsapp.com/send?phone=923209174561',
                    desc: "+923209174561"
                },
                {
                    title: 'Email',
                    logo: 'https://cdn3d.iconscout.com/3d/premium/thumb/email-address-4437044-3684811.png',
                    desc: 'alishbajaved205@gmail.com',
                },
            ]
        },
        {
            text: "Others",
            arr: [
                {
                    title: 'GitHub',
                    logo: 'https://cdn-icons-png.flaticon.com/128/1051/1051275.png',
                    link: 'https://github.com/a-jay262/'
                },
                {
                    title: 'LinkedIn',
                    logo: 'https://user-images.githubusercontent.com/6418354/155841027-8698cb12-7ddd-4604-a4ea-c618ddbc1cd8.png',
                    link: 'https://www.linkedin.com/in/alishba-javed-011085265/'
                },
                {
                    title: 'Facebook',
                    logo: 'https://user-images.githubusercontent.com/6418354/155840898-9e2327aa-a280-45e3-8266-8268242abda4.png',
                    link: 'https://www.facebook.com/profile.php?id=100080466110561'
                },
                {
                    title: 'Instagram',
                    logo: 'https://user-images.githubusercontent.com/6418354/155841023-0b842621-56a3-42ec-81f1-3944034b09c7.png',
                    link: 'https://www.instagram.com/imaleey._/'
                },
            ]
        },
    ]
}

// 
// Dont change anything below this line
// 
export const combinedInformation: ICombinedInformation = {
    initialInformation: DynamicValues.initialInformation,
    directMessageItems: DynamicValues.directMessageItems,
    routes: [
        {
            name: "About",
            items: DynamicValues.about,
        },
        {
            name: "Skills",
            items: DynamicValues.skills,
        },
        {
            name: "Projects",
            items: DynamicValues.projects,
        },
        {
            name: "Contact",
            items: DynamicValues.contacts,
        },
    ]
}