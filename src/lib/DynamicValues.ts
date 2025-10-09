import { ICombinedInformation, IDirectMessageItem, IInitialInformation, ITitledListItem } from "./Models";

class DynamicValues {
    static initialInformation: IInitialInformation = {
        "name": "Fayaz Bin Salam",
        "occupation": "Software Engineer"
    }

    static directMessageItems: Array<IDirectMessageItem> = [
        {
            "name": "WhatsApp",
            "link": "https://api.whatsapp.com/send?phone=8801796306262"
        },
        {
            "name": "Messenger",
            "link": "https://m.me/p32929"
        },
        {
            "name": "Telegram",
            "link": "https://t.me/p32929"
        }
    ]

    static about: Array<ITitledListItem> = [
        {
            "text": "Information",
            "shouldNotSort": true,
            "arr": [
                {
                    "title": "Name",
                    "desc": "Fayaz Bin Salam",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953571/p32929-Portfolio/chufrwqzjrtg4wwz4lrd.png"
                },
                {
                    "title": "Work Experience",
                    "desc": "7+ years",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953572/p32929-Portfolio/bepae72wn18shyahhkca.png"
                },
                {
                    "title": "Languages",
                    "desc": "Bengali, English, Hindi, Urdu, Chittagonian etc",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953574/p32929-Portfolio/tswribsgjemmslasuxw7.png"
                },
                {
                    "title": "Nationality",
                    "desc": "Bangladeshi",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953575/p32929-Portfolio/k8pse5mmxiiglanedpog.png"
                },
                {
                    "title": "Resume",
                    "desc": "Click the link icon to view/download",
                    "link": "https://docs.google.com/document/d/1vRgTCQ-UvzjGXK7s-TR5VpmjHZ7OmSmOs5G69znPhqA/edit?usp=sharing",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953577/p32929-Portfolio/cjkffhoebfussfss6dfu.png"
                }
            ]
        },
        {
            "text": "Experiences",
            "arr": [
                {
                    "title": "Herogram FZ LLC",
                    "desc": "Senior Full Stack Developer",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953578/p32929-Portfolio/cs4x2kkz9sduezruugf2.png"
                },
                {
                    "title": "Aqary International Group",
                    "desc": "Golang Developer",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953579/p32929-Portfolio/mvizmswmm0fzgopkttvy.png"
                },
                {
                    "title": "Horizon Group of Companies",
                    "desc": "Front End Developer",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953580/p32929-Portfolio/q379aj6rnbbtxb5qhqw3.png"
                },
                {
                    "title": "6sense Bangladesh",
                    "desc": "Full Stack Developer",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953580/p32929-Portfolio/yawzshufwghewxkyueyy.png"
                },
                {
                    "title": "Rich Information Technology",
                    "desc": "Lead Software Engineer",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953581/p32929-Portfolio/uwv9ehlvufzzm30lxofk.png"
                },
                {
                    "title": "Fiverr",
                    "desc": "Freelance Software Engineer",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953582/p32929-Portfolio/bpx91alvrsjyiy481ews.svg"
                },
                {
                    "title": "Upwork",
                    "desc": "Freelance Software Engineer",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953583/p32929-Portfolio/qekggjek0ctwrwojolwi.svg"
                }
            ]
        }
    ]

    static skills: Array<ITitledListItem> = [
        {
            "text": "Programming / Markup Languages",
            "arr": [
                {
                    "title": "C",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759969644/p32929-Portfolio/206ed1c3-3784-49ee-8416-1d288129d22e.png"
                },
                {
                    "title": "C++",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759969669/p32929-Portfolio/489c66c3-bef9-4ca3-9952-62767aa0df02.png"
                },
                {
                    "title": "Java",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953587/p32929-Portfolio/hd8ozmjzjfuydoqkqqev.svg"
                },
                {
                    "title": "Python",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953589/p32929-Portfolio/h0roulz5js2bb0jpu64q.svg"
                },
                {
                    "title": "JavaScript",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953590/p32929-Portfolio/o3krjgncumhsdbxwfune.svg"
                },
                {
                    "title": "Rust",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953592/p32929-Portfolio/q1ss4hvqbnrwpmxsdtpb.svg"
                },
                {
                    "title": "HTML",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953596/p32929-Portfolio/whtwspebxmfujivtjuua.svg"
                },
                {
                    "title": "CSS",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759969709/p32929-Portfolio/1dfbec4d-cfa7-451e-986f-4caa30f18d2d.png"
                },
                {
                    "title": "TypeScript",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953598/p32929-Portfolio/eyh3lv06wgas3qjobi6x.svg"
                },
                {
                    "title": "Kotlin",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953600/p32929-Portfolio/v3xdgscvqrwcrdgbbugd.svg"
                },
                {
                    "title": "Dart",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953602/p32929-Portfolio/iuuhudpznu2j7kr7xvxa.svg"
                },
                {
                    "title": "Go",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953603/p32929-Portfolio/bilmmrw0tpxu8j3lmbyw.svg"
                }
            ]
        },
        {
            "text": "Databases",
            "arr": [
                {
                    "title": "MongoDB",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953605/p32929-Portfolio/p9birvohebjyqv2eecvf.png"
                },
                {
                    "title": "SQL",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953606/p32929-Portfolio/epp2pl6vowcfei846tfc.png"
                },
                {
                    "title": "DynamoDB",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953606/p32929-Portfolio/yscrfap7fpqriotk90uf.svg"
                },
                {
                    "title": "PostgreSQL",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953608/p32929-Portfolio/bgf4nbbkwasumtauhlbv.png"
                }
            ]
        },
        {
            "text": "UI Component Libraries",
            "arr": [
                {
                    "title": "Ant Design",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953610/p32929-Portfolio/lkwm8cenfbi1ioy0he8r.svg"
                },
                {
                    "title": "Material-UI",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953612/p32929-Portfolio/nlebn5gagcr3vfzmmh8i.png"
                },
                {
                    "title": "Shadcn",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953612/p32929-Portfolio/qiop0otyzwprk7cweiaz.png"
                },
                {
                    "title": "Tailwind CSS",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953613/p32929-Portfolio/ovoutjmpxhdkgijyaeli.png"
                },
                {
                    "title": "Bootstrap",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953613/p32929-Portfolio/y6xdd2jysfymyjgwzzve.png"
                }
            ]
        },
        {
            "text": "Libraries / Frameworks / Techs",
            "arr": [
                {
                    "title": "Prisma",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953614/p32929-Portfolio/c42xajmv8ylqogwz1sjy.svg"
                },
                {
                    "title": "Android App Development",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953615/p32929-Portfolio/yxtx7gpfmkz9xgk0uy3x.svg"
                },
                {
                    "title": "NodeJS",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953617/p32929-Portfolio/ejwr11crurxntw750zgu.svg"
                },
                {
                    "title": "ExpressJS",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953619/p32929-Portfolio/vgwgdvtikwd8t5cv2yio.png"
                },
                {
                    "title": "ReactJS",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953619/p32929-Portfolio/dbiycpmd04a9s9ys3xcx.svg"
                },
                {
                    "title": "Redux",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953621/p32929-Portfolio/gp6aagxku4wnnpiyota0.png"
                },
                {
                    "title": "React Native",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953622/p32929-Portfolio/rpwcmudpbkr7g1ginbf6.svg"
                },
                {
                    "title": "ElectronJS",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953625/p32929-Portfolio/tq89gdksitxcmczcixvj.svg"
                },
                {
                    "title": "Angular2+",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953626/p32929-Portfolio/mguamqc5bfpgazzb5oqi.svg"
                },
                {
                    "title": "Mongoose",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953629/p32929-Portfolio/el2vqmspjkb74gsfsr9e.png"
                },
                {
                    "title": "NextJS",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953629/p32929-Portfolio/z0zzl2jp64dejhctlpdi.png"
                },
                {
                    "title": "OpenCV",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953630/p32929-Portfolio/gy0hx6sbgc7qhxduw3f7.svg"
                },
                {
                    "title": "Firebase",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953633/p32929-Portfolio/sgcssbhn1rfakaz7n0ic.svg"
                },
                {
                    "title": "Flutter",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953634/p32929-Portfolio/x66men55ipl6cdufxt3y.svg"
                },
                {
                    "title": "Beautiful soup",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953636/p32929-Portfolio/kkvzhzbke81ej63mkhj0.png"
                },
                {
                    "title": "Numpy",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953637/p32929-Portfolio/zl3miemouws8dkpp1uqf.svg"
                },
                {
                    "title": "Tauri",
                    "logo": "https://raw.githubusercontent.com/tauri-apps/tauri/HEAD/app-icon.png"
                },
                {
                    "title": "VueJS",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953640/p32929-Portfolio/bssnbztszbrfk9fwdf2f.png"
                },
                {
                    "title": "Pandas",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953641/p32929-Portfolio/hc2rzdxthrbex1hs8wzx.svg"
                },
                {
                    "title": "Matplotlib",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953643/p32929-Portfolio/cnarwzgxfgbihjtuzvey.png"
                },
                {
                    "title": "Socket.io",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953644/p32929-Portfolio/zwzz8bv4en6ypc0j7glv.svg"
                },
                {
                    "title": "Flask",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953646/p32929-Portfolio/awyubdywgh3vn8bgjk8r.png"
                },
                {
                    "title": "Docker",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953646/p32929-Portfolio/ysh20kbwleolpebnnwxl.png"
                },
                {
                    "title": "Git",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953647/p32929-Portfolio/cgk7kfiebwkrey0lxl4q.svg"
                },
                {
                    "title": "Expo",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953648/p32929-Portfolio/rs5rv5nnedircwjo0ids.svg"
                },
                {
                    "title": "NgInx",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953654/p32929-Portfolio/a3orvq35ramzg43vnso4.svg"
                },
                {
                    "title": "NestJS",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953656/p32929-Portfolio/vi0fgvg9ievvpbicggro.svg"
                }
            ]
        },
        {
            "text": "Others",
            "arr": [
                {
                    "title": "Vim",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953657/p32929-Portfolio/ctrzd4aae94zyb1nh967.png"
                },
                {
                    "title": "Android Studio",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953658/p32929-Portfolio/woszrlkj2ul7olwoeih0.png"
                },
                {
                    "title": "VS Code",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953659/p32929-Portfolio/rsoh5gyyufpefmpoffj9.png"
                },
                {
                    "title": "Jira",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953660/p32929-Portfolio/wxheiytt3iwa5txonrai.png"
                },
                {
                    "title": "AWS",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953660/p32929-Portfolio/lbkxzlnptf7fb98ibygk.png"
                },
                {
                    "title": "DigitalOcean",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953661/p32929-Portfolio/cv4v4eqdd1kqfejpzjve.svg"
                },
                {
                    "title": "Figma",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953663/p32929-Portfolio/gsnn9d1bnhdwrtevhkfo.svg"
                },
                {
                    "title": "Heroku",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953665/p32929-Portfolio/gvqd27jwhbervukt9cp8.svg"
                },
                {
                    "title": "Yarn",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953667/p32929-Portfolio/e1rl4muxyzrrktprzfwm.svg"
                },
                {
                    "title": "npm",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953669/p32929-Portfolio/tqosczlbefj9ys2zknxf.svg"
                },
                {
                    "title": "Tampermonkey",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953672/p32929-Portfolio/ev9nw3qqt4g4dqaolpb8.png"
                },
                {
                    "title": "Greasemonkey",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953673/p32929-Portfolio/jkr89mmmy03y3a4vt2s9.png"
                },
                {
                    "title": "Linux",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953674/p32929-Portfolio/ahkm9tperjozsqnlyyjj.png"
                },
                {
                    "title": "Adobe Photoshop",
                    "logo": "https://www.adobe.com/content/dam/cc/icons/photoshop-mobile.svg"
                }
            ]
        }
    ]

    static projects: Array<ITitledListItem> = [
        {
            "text": "Web Apps",
            "arr": [
                {
                    "title": "Duas",
                    "link": "https://p32929.github.io/duas/",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953716/p32929-Portfolio/uxrwfhg48dvg4fvyulp2.png",
                    "desc": "A collection of duas I try to regularly recite - created using flutter web"
                },
                {
                    "title": "Sha1ToMd5",
                    "link": "https://p32929.github.io/Sha1ToMd5/",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953716/p32929-Portfolio/fkjurkfivkg7sekog3zd.png",
                    "desc": "A simple utility tool to convert Google Play Release APK Sha1 value to MD5 for Facebook login to work. "
                },
                {
                    "title": "dobd.xyz",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759957058/p32929-Portfolio/28c88030-dee9-4b3f-b87a-47dacd6bb559.png",
                    "desc": "Best online downloader for YouTube, Facebook, Instagram, Tiktok and more",
                },
                {
                    "title": "s3cr3tm3",
                    "link": "https://s3cr3tm3.netlify.app/",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953717/p32929-Portfolio/lyvlfnllm5nz2grxpy2j.png",
                    "desc": "Share secret messages secretely"
                },
                {
                    "title": "OrderZesty",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759957385/p32929-Portfolio/88cadd33-42ca-4f3b-9ec0-a3776f9fffac.png",
                    "desc": "Personal chef service delivering fresh signature meals.",
                },
                {
                    "title": "DramaDB",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759956967/p32929-Portfolio/fa8624a5-6b99-42b7-838c-3041b914bdef.png",
                    "desc": "A serverless hobby project that lets you filter Asian drama by country, genre, status, year and popularity",
                },
                {
                    "title": "Sh0Sh0",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953720/p32929-Portfolio/vuvvkxybhvjr2xatae3c.png",
                    "desc": "A beautifully created Absolutely FREE URL shortener for everyone made using React Shadcn Firebase. ",
                    "link": "https://sh0sh0.netlify.app/"
                },
                {
                    "title": "Github Trending",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953721/p32929-Portfolio/bq04mew5dk4xypq93m4f.png",
                    "desc": "A simple webpage that scrapes github LIVE in front of your eyes and gets the list of trending repositories",
                    "link": "https://bit.ly/ghtrr"
                },
                {
                    "title": "BreakingMars",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953722/p32929-Portfolio/bbmiou02w0npfsol8qme.png",
                    "desc": "#1 Leading & Effortless Prospect Perceiving Platform",
                },
                {
                    "title": "Voomnow",
                    "desc": "Next generation audio recorder",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953723/p32929-Portfolio/igbmfmmzeqjuzrc0enru.svg",
                },
                {
                    "title": "Shajao",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953727/p32929-Portfolio/lv6ojs0usbvtvfz2ds7b.webp",
                    "desc": "Framing Happiness",
                },
                {
                    "title": "ChargeOnSite",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953728/p32929-Portfolio/za7co13fblvng1qcqbvs.png",
                    "desc": "Charge OnSite",
                    "link": "https://www.chargeonsite.com/"
                },
                {
                    "title": "MathFinity",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953728/p32929-Portfolio/qxppp8ooaljeezda2ydh.png",
                    "desc": "Simple, infinite & fun math game for everyone",
                    "link": "https://p32929.github.io/mathfinity/"
                },
                {
                    "title": "Quran Flutter",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759956231/p32929-Portfolio/app_icon_pgruwb.png",
                    "desc": "Simple, infinite & fun math game for everyone",
                    "link": "https://p32929.github.io/quran_flutter/"
                },
                {
                    "title": "Ollama Models Explorer",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759956801/p32929-Portfolio/a8efa895-afde-42e0-9a45-aba8398b6d69.png",
                    "desc": "A modern, dark-themed UI for exploring and filtering Ollama AI models",
                    "link": "https://ollama-models-explorer.vercel.app/"
                },
                {
                    "title": "Notes Offline",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759956889/p32929-Portfolio/b140a7e0-76dd-4c49-ab58-f2ff217cd1cf.png",
                    "desc": "A modern, offline-first note-taking application that works entirely in your browser",
                    "link": "https://p32929.github.io/notes/"
                },
                {
                    "title": "ghcdn",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759957441/p32929-Portfolio/4eb265f5-4bef-449d-ad98-14de6d6b1c6e.png",
                    "desc": "A Next.js application that serves GitHub and Gist content as a CDN",
                    "link": "https://ghcdn.vercel.app/"
                },
                {
                    "title": "Instant.site",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759957834/p32929-Portfolio/Screenshot_2025-10-09_at_01-09-42_Instant.site_-_AI-Powered_Website_Generation_Platform_xmsonx.png",
                    "desc": "Transform your ideas into fully functional websites using the power of AI. No coding required, just describe what you want to build.",
                    "link": "https://instant.site/"
                },
                {
                    "title": "AskBrain",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759958532/p32929-Portfolio/cadf4a8d-1fe6-46ce-aa40-804ccaf6d4e4.png",
                    "desc": "Intelligent Chat Companion",
                    "link": "https://askbrain2.com/"
                },
                {
                    "title": "openai-gemini-api-key-rotator",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759959873/p32929-Portfolio/d954bab9-ef3c-4a03-9e01-fd0c780b8bce.png",
                    "desc": "Node.js proxy server for automatic API key rotation across multiple LLM providers (OpenAI, Gemini, Groq, OpenRouter, etc.). Zero external dependencies.",
                    "link": "https://github.com/p32929/openai-gemini-api-key-rotator"
                },
                {
                    "title": "Artul.ai",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759996496/p32929-Portfolio/a1f58de7-2e32-49a3-ab45-1e9ceca86f6b.png",
                    "desc": "Finalcial research using the help of AI",
                    "link": "https://artul.ai/"
                },
                {
                    "title": "node_file_manager_server",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759997260/p32929-Portfolio/4539f4ca-8dd7-4886-9b59-06185792c4cd.png",
                    "desc": "A lightweight, self-hosted file manager with zero external dependencies",
                    "link": "https://github.com/p32929/node_file_manager_server"
                },
                {
                    "title": "CFood",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759997876/p32929-Portfolio/932f7e37-fef3-478c-9073-a1323f5f70aa.png",
                    "desc": "A complete foods frontend for DIY soylent",
                    "link": "https://cfood.vercel.app/"
                },
                {
                    "title": "Link in bio",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759998616/p32929-Portfolio/74ae0b2d-243f-4dda-9ef5-e3c026cb9f17.png",
                    "desc": "An elegant, single-page HTML link-in-bio, perfect for everyone",
                    "link": "https://p32929.github.io/link_in_bio/"
                },
                
            ]
        },
        {
            "text": "iOS Apps",
            "arr": [
                {
                    "title": "Adblock for YT",
                    "link": "https://apps.apple.com/au/app/adblock-for-youtube/id1592568016",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953729/p32929-Portfolio/akip3ptlsv4hve4t8kse.webp",
                    "desc": "Removes ads from YT videos, embedded videos on third party websites and streams."
                },
                {
                    "title": "Al Quran by Quran Touch",
                    "link": "https://apps.apple.com/gb/app/al-quran-by-quran-touch/id585240351",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953730/p32929-Portfolio/vl2xlb59cr4mz1d4ex9j.webp",
                    "desc": "The most comprehensive Muslim App!"
                },
                {
                    "title": "BBrain",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759959509/p32929-Portfolio/c11c7993-84c7-4694-b648-87f6f64987ac.png",
                    "desc": "all-in-one AI-powered chatbot, designed to write, learn, and create for you!",
                    "link": "https://apps.apple.com/ae/app/bbrain/id6448963886"
                },
            ]
        },
        {
            "text": "Android Apps",
            "arr": [
                {
                    "title": "Al Quran by Quran Touch",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953730/p32929-Portfolio/wbqu2kumx4x1gflzyrwk.webp",
                    "desc": "The most comprehensive Muslim App!"
                },
                {
                    "title": "Thamao",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759959657/p32929-Portfolio/96a6581f-d8da-45d6-8f81-fbc174770011.png",
                    "desc": "বাংলাদেশে স্মার্টফোনের চুরি এবার অসম্ভব",
                },
                {
                    "title": "Desplash",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953732/p32929-Portfolio/tjep6ry89lcaugkag7lc.png",
                    "desc": "Automatic Free High Quality Wallpapers powered by Unsplash.com",
                    "link": "https://www.xda-developers.com/desplash-wallpaper-app-unsplash/"
                },
                {
                    "title": "The Great Postman",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953733/p32929-Portfolio/lmrghcs9ldwdh7oopndw.png",
                    "desc": "Powerful, Lightweight REST API client for Android",
                },
                {
                    "title": "Sleepy - Addiction Remover",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953733/p32929-Portfolio/w8t9tdvtahlevnct5fm3.png",
                    "desc": "The one and only EFFECTIVE addiction remover on Google Play store",
                },
                {
                    "title": "Best CGPA Calculator",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953734/p32929-Portfolio/l73jlewnduvk8trhfwhw.png",
                    "desc": "A simple yet effective CGPA Calculator for University students",
                },
                {
                    "title": "Buy Sell BD",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953735/p32929-Portfolio/unnr5vmmsj3vc01m0cis.png",
                    "desc": "A better & more reliable alternative for Bikroy.com - A marketplace app for buying-selling new/used goods",
                },
                {
                    "title": "ExIn",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953736/p32929-Portfolio/gp4g66psyammyl5ll8nf.png",
                    "desc": "A Simple & user friendly income-expense tracker ",
                },
                {
                    "title": "I am free",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953736/p32929-Portfolio/wjfouxqiq7opw9rikcs5.png",
                    "desc": "বেকার মুক্ত বাংলাদেশ গড়ার লক্ষ্যে - I am FREE",
                },
                {
                    "title": "Awesome NCTB",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953737/p32929-Portfolio/jyhb68lrsgxorjkqkwcr.png",
                    "desc": "Download NCTB Books easily and Free",
                },
                {
                    "title": "বৃক্ষ ( Brikkho )",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953737/p32929-Portfolio/lmgjxmedakpambijfiwf.png",
                    "desc": "Learn about trees in your fingertips",
                },
                {
                    "title": "IQQuiz",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953738/p32929-Portfolio/gfn5thxnv1sscpzzi1jb.jpg",
                    "desc": "A simple IQ game",
                },
                {
                    "title": "BirdsLover",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953739/p32929-Portfolio/zllbyinuroofovnwsemr.png",
                    "desc": "Learn about birds in your fingertips",
                },
                {
                    "title": "Animal Lover",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953739/p32929-Portfolio/mphgkw01iqmxbwlysbxr.png",
                    "desc": "Learn about birds in your fingertips",
                },
                {
                    "title": "Jibanananda Recitation (Abritti)",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953740/p32929-Portfolio/kxflwu40pru47b6tumad.jpg",
                    "desc": "50+ poems of Jibanananda Das with audio recitation",
                },
                {
                    "title": "MathLover (Simple, Infinite, Math game)",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953741/p32929-Portfolio/skcqwayohqyw0wqposbx.png",
                    "desc": "MathLover is a simple, infinite mathematical problem solving game for everyone.",
                },
                {
                    "title": "Hospitals BD",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953741/p32929-Portfolio/fdmrcc4stva7xwqaxslh.png",
                    "desc": "Get nearest Hospital Information in Bangladesh in your fingertips",
                },
                {
                    "title": "BirthdayBot",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953742/p32929-Portfolio/m1erhymltnig4op00hov.png",
                    "desc": "Birthday wishing apps, made for individual people...",
                },
                {
                    "title": "BBrain",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759959509/p32929-Portfolio/c11c7993-84c7-4694-b648-87f6f64987ac.png",
                    "desc": "all-in-one AI-powered chatbot, designed to write, learn, and create for you!",
                    "link": "https://play.google.com/store/apps/details?id=com.askbrain2.app"
                },
            ]
        },
        {
            "text": "Desktop Apps",
            "arr": [
                {
                    "title": "PotatoTimer",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953743/p32929-Portfolio/lataemg2hhqzsapj6myo.ico",
                    "desc": "A pomotodo app that forces you to take a break - created using ElectronJS",
                    "link": "https://github.com/p32929/Electron-Pomotodo"
                },
                {
                    "title": "Pomota",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953744/p32929-Portfolio/mmfrjgsasnmxk26gocgr.png",
                    "desc": "A simple user-friendly cross-platform tauri based pomodoro timer app that forces you to take a break",
                    "link": "https://github.com/p32929/pomota"
                },
                {
                    "title": "google calender widget",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953744/p32929-Portfolio/thx3jsstoglsftxemvsi.png",
                    "desc": "An unofficial google calendar desktop widget for Windows, Mac and Linux ",
                    "link": "https://github.com/p32929/google-calender-widget"
                },
                {
                    "title": "MacJuiceMonitor",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953745/p32929-Portfolio/nixhwhleqc36jhpd3wth.png",
                    "desc": "Your essential tool for keeping track of all your Bluetooth-connected devices' battery levels, conveniently located in the macOS menu bar",
                    "link": "https://github.com/p32929/mac-juice-monitor"
                }
            ]
        },
        {
            "text": "Command Line Interfaces ( CLIs )",
            "arr": [
                {
                    "title": "Shortcut Virus Remover",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953746/p32929-Portfolio/aokzrnxlpexmy7qikw4l.png",
                    "desc": "Shortcut virus remover script for Windows",
                    "link": "https://github.com/p32929/Shortcut-Virus-Remover"
                },
                {
                    "title": "Fay",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953747/p32929-Portfolio/gbfittv1n99ud3u4b9hp.png",
                    "desc": "A simple cross platform CLI app written in Rust to automate multiple shell ( bash or cmd ) commands",
                    "link": "https://crates.io/crates/fay"
                },
                {
                    "title": "SIIN",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953747/p32929-Portfolio/itynf13rmr9yawofgigu.png",
                    "desc": "A batch installer that downloads and installs a list of apps, written in Rust ( Kinda like Ninite )",
                    "link": "https://crates.io/crates/siin"
                },
                {
                    "title": "ccheckpoints",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759960038/p32929-Portfolio/4c40c36f-5751-4771-879a-02da5684e69b.png",
                    "desc": "A checkpoint system for Claude Code CLI that automatically tracks your coding sessions. Inspired by Cursor IDE's checkpoint feature",
                    "link": "https://github.com/p32929/ccheckpoints"
                },
                {
                    "title": "CMDN",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759969311/p32929-Portfolio/c2f17ede-54ae-424c-aa38-e8f915bc89c7.png",
                    "desc": "A simple CLI notification tool - just run any command with cmdn command and get notified when it's done!",
                    "link": "https://github.com/p32929/cmdn"
                },
                
            ]
        },
        {
            "text": "Automations",
            "arr": [
                {
                    "title": "Dingtone Bot",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953748/p32929-Portfolio/jynw5l2hujbprz9q4v5e.png",
                    "desc": "A bot made using Python and UIAutomator2 to automate watching ads on certain apps to get credits",
                    "link": "https://drive.google.com/file/d/159D_tco3qkpgh2a3CWz-f0ixPEpeUN8V/view?usp=sharing"
                },
                {
                    "title": "Indeed-Linkedin bot",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953749/p32929-Portfolio/necalptsa0wbyzwzfrwh.png",
                    "desc": "An automation bot created using playwright to automate applying jobs on Indeed and Linkedin",
                    "link": "https://drive.google.com/file/d/10Xc4Y0Z5KXxKhb9StF3bQfivYHHeNZsa/view?usp=sharing"
                }
            ]
        },
        {
            "text": "Libraries / Packages / Crates",
            "arr": [
                {
                    "title": "AndroidEasySQL-Library",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953749/p32929-Portfolio/n8bozwxyx4rprc5ycc3a.svg",
                    "desc": "An Easier & Lazier approach to SQL database for Android",
                    "link": "https://github.com/p32929/AndroidEasySQL-Library"
                },
                {
                    "title": "AndroidAppLockscreen",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953753/p32929-Portfolio/p3v3uqavlmgbibk4gi5d.svg",
                    "desc": "An Easier & Lazier approach to getting runtime permission in Android ",
                    "link": "https://github.com/p32929/AndroidAppLockscreen"
                },
                {
                    "title": "Manufacturer Battery Optimization",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953755/p32929-Portfolio/fnsdi6zs4luri3rn3eyz.svg",
                    "desc": "Simple helper class for Android Battery Optimization ignoring in some devices",
                    "link": "https://gist.github.com/p32929/41e7af650f6a2c11e9306ab600fb9b03"
                },
                {
                    "title": "MyHouse Ads Android",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953757/p32929-Portfolio/e5veb7eiqkalchfv1jz4.svg",
                    "desc": "A library for cross promoting own apps within own apps - for Android",
                    "link": "https://github.com/p32929/MyHouseAdsAndroid"
                },
                {
                    "title": "House Ads 2",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953759/p32929-Portfolio/guc2wl2f1jehecdhkcub.svg",
                    "desc": "A library ( V2 ) for cross promoting own apps within own apps - for Android",
                    "link": "https://github.com/p32929/HouseAds2"
                },
                {
                    "title": "Android App Updater",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953761/p32929-Portfolio/cyijnfqkcjafqmdbx8yh.svg",
                    "desc": "A simple, Lightweight App Updater Library for Android",
                    "link": "https://github.com/p32929/AndroidAppUpdater"
                },
                {
                    "title": "Office About",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953763/p32929-Portfolio/fqf0l1opfn8yywxtw1ie.svg",
                    "desc": "A simple about screen library for Android for a Team of people",
                    "link": "https://github.com/p32929/OfficeAbout"
                },
                {
                    "title": "Json Viewer Android",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953765/p32929-Portfolio/fgofi32tp4elpw3v5ns1.svg",
                    "desc": "A simple JSON Viewer for Android"
                },
                {
                    "title": "Android Receivers Library",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953767/p32929-Portfolio/vyndgqayowmrtjl1a6rk.svg",
                    "desc": "A library for simpler BroadcastReceiver implementations"
                },
                {
                    "title": "Fay",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953768/p32929-Portfolio/mtf6bvd8hhi0unmqa9y4.png",
                    "desc": "A simple cross platform CLI app written in Rust to automate multiple shell ( bash or cmd ) commands",
                    "link": "https://crates.io/crates/fay"
                },
                {
                    "title": "fayfetch",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953769/p32929-Portfolio/ldcqcxsrpq9ezy8t4mwu.png",
                    "desc": "A simple wrapper for Fetch",
                    "link": "https://www.npmjs.com/package/fayfetch"
                },
                {
                    "title": "fjsondb",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953769/p32929-Portfolio/wkomtfhcknwmkusxkywk.png",
                    "desc": "A fast and simple JSON database for NodeJS",
                    "link": "https://www.npmjs.com/package/fjsondb"
                },
                {
                    "title": "str_template",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953770/p32929-Portfolio/hstypwqu8smet00nejpx.png",
                    "desc": "A fast and simple string templating library, written in TypeScript ( Supports both Client side and Server side JavaScript / TypeScript )",
                    "link": "https://www.npmjs.com/package/str-template-ts"
                },
                {
                    "title": "use-megamind",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953770/p32929-Portfolio/k8eik3jt572pm6gwisl2.png",
                    "desc": " A simple react hook for managing asynchronous function calls with ease on the client side ",
                    "link": "https://github.com/p32929/use-megamind"
                },
                {
                    "title": "EasiestDB",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953771/p32929-Portfolio/wz0dtwh1l54flh0jw7wl.png",
                    "desc": "The Easiest and the Laziest approach to Flutter SQL Database.",
                    "link": "https://pub.dev/packages/easiestdb"
                },
                {
                    "title": "Simply Wifi",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953771/p32929-Portfolio/etyle21lx8fn2bx1noaj.png",
                    "desc": "A simplified version of the wifi_iot package",
                    "link": "https://pub.dev/packages/simply_wifi"
                },
                {
                    "title": "audio_duration",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953772/p32929-Portfolio/plbqz7r3fvripuhztsuk.png",
                    "desc": "Just a simple flutter package to get the duration of any audio file ( like: mp3 ) in milliseconds",
                    "link": "https://pub.dev/packages/audio_duration"
                },
                {
                    "title": "go_easy",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759998378/p32929-Portfolio/900f80e1-ef6c-4208-99c3-9cc798f9089e.png",
                    "desc": "A custom Golang / Go compiler that makes unused variables warning instead of error to make running Go easier and faster",
                    "link": "https://github.com/p32929/go_easy"
                },
                
            ]
        },
        {
            "text": "Extensions / Plugins / Addons",
            "arr": [
                {
                    "title": "vscode nvim leave insertmode",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953773/p32929-Portfolio/jh0hcuo6bd9b4hexr3un.png",
                    "desc": "This basic VSCode extension ensures that neovim is in normal mode switching between text editor panels.",
                    "link": "https://marketplace.visualstudio.com/items?itemName=p32929.vscode-nvim-leave-insertmode"
                },
                {
                    "title": "one console log",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953774/p32929-Portfolio/rghqm4bddealamuukvtg.png",
                    "desc": "A modified version of the turbo-console-log that adds only one line of console instead of multiples.",
                    "link": "https://marketplace.visualstudio.com/items?itemName=p32929.one-console-log"
                },
                {
                    "title": "Home",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953774/p32929-Portfolio/zyremw2r9kjgt19upvrw.png",
                    "desc": "A Simple homepage extension created using Shadcn, React, TypeScript, usm-redux etc ",
                    "link": "https://github.com/p32929/Home"
                },
                {
                    "title": "obsidotion",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953776/p32929-Portfolio/x8ci9sbwrt2xqmvgneeo.svg",
                    "desc": "Asimple obsidian plugin that syncs from/to obsidian/notion ",
                    "link": "https://github.com/p32929/obsidotion"
                }
            ]
        }
    ]

    static contacts: Array<ITitledListItem> = [
        {
            "text": "Contact me",
            "arr": [
                {
                    "title": "WhatsApp ( Recommended )",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953782/p32929-Portfolio/d1uucq66hmbgcynycfdl.png",
                    "link": "https://api.whatsapp.com/send?phone=8801796306262",
                    "desc": "+8801796306262"
                },
                {
                    "title": "Email",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953785/p32929-Portfolio/ouu3fh4clard9ntdzyuc.png",
                    "desc": "p32929.ceo@gmail.com",
                    "link": "mailto:p32929.ceo@gmail.com"
                },
                {
                    "title": "Telegram",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953787/p32929-Portfolio/uku6v0wodyoet9wnualx.png",
                    "desc": "@p32929",
                    "link": "https://t.me/p32929"
                }
            ]
        },
        {
            "text": "Others",
            "arr": [
                {
                    "title": "Anywhere on the internet",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953789/p32929-Portfolio/bw2xewshxu1o4br8xu7l.png",
                    "desc": "@p32929"
                },
                {
                    "title": "GitHub",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953790/p32929-Portfolio/fjttxwybmxyt6s5iymj9.png",
                    "link": "https://github.com/p32929/"
                },
                {
                    "title": "LinkedIn",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953790/p32929-Portfolio/w6kp4drxtdusgbfxkzcd.png",
                    "link": "https://www.linkedin.com/in/p32929/"
                },
                {
                    "title": "Facebook",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953791/p32929-Portfolio/xqogmxrh3iqlbsfh62os.png",
                    "link": "https://www.facebook.com/p32929"
                },
                {
                    "title": "Twitter",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953792/p32929-Portfolio/efkatysmuj0ovuvpqmis.png",
                    "link": "https://twitter.com/p32929"
                },
                {
                    "title": "Instagram",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953792/p32929-Portfolio/qclabdghgroeajegykyh.png",
                    "link": "https://www.instagram.com/p32929/"
                },
                {
                    "title": "Fiverr",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953793/p32929-Portfolio/kjsge0khbq1ebn0c2vl9.svg",
                    "link": "https://www.fiverr.com/users/fayazbinsalam/"
                },
                {
                    "title": "Upwork",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953795/p32929-Portfolio/iam4vr6b2xbhlslb6llj.svg",
                    "link": "https://www.upwork.com/freelancers/~017dbf657b99b0c1c1"
                },
                {
                    "title": "Medium",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953796/p32929-Portfolio/bpo7hebyq2da7ondysml.png",
                    "link": "https://medium.com/@p32929_77176"
                },
                {
                    "title": "xda",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953797/p32929-Portfolio/cd5sq3orqzh0bf42oc6x.svg",
                    "link": "https://forum.xda-developers.com/m/p32929.5346826/"
                },
                {
                    "title": "Product Hunt",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953799/p32929-Portfolio/rvjrn2ksxilxl803h0te.png",
                    "link": "https://www.producthunt.com/@p32929"
                },
                {
                    "title": "UVA Online Judge",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953799/p32929-Portfolio/gvivxscmvwfz6rannsvu.png",
                    "link": "https://uhunt.onlinejudge.org/id/590978"
                },
                {
                    "title": "URI Online Judge",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953800/p32929-Portfolio/mebrp9cdbrxwocudyand.png",
                    "link": "https://www.beecrowd.com.br/judge/en/profile/76542"
                },
                {
                    "title": "Buy Me a Coffee",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953801/p32929-Portfolio/tp2enqz5y9k7xvyacdtt.png",
                    "link": "https://www.buymeacoffee.com/p32929"
                },
                {
                    "title": "Skype",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953801/p32929-Portfolio/y3hxyezaol0ui8lvdduc.png",
                    "desc": "p32929",
                    "link": "skype:p32929?chat"
                }
            ]
        },
        {
            "text": "Thank you for visiting my portfolio",
            "arr": [
                {
                    "title": "Click on the link button",
                    "desc": "To create your own portfolio. It will only take around 3 minutes",
                    "logo": "https://res.cloudinary.com/p32929/image/upload/v1759953803/p32929-Portfolio/xbaf4itpedklp1t67kdo.png",
                    "link": "https://github.com/p32929/p32929.github.io/"
                }
            ]
        }
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
