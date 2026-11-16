# p32929.github.io

My personal developer portfolio, live at **https://p32929.github.io/**. It is a single page that shows who I am, my skills and all my projects, with each project linked to its page on OpenStore.

The nice part if you want your own: every piece of content lives in one file, `src/lib/DynamicValues.ts`. Fork it, change that one file, and you have a portfolio, with no backend and free hosting on GitHub Pages.

## Screenshots

### Desktop

![Desktop view](https://github.com/user-attachments/assets/c72b290f-39e5-4dc5-a395-db53ae4c7ff6)

### Tablet

![Tablet view](https://github.com/user-attachments/assets/73cbd733-6e36-4efe-8fb8-93309b58a2df)

### Mobile

![Mobile view](https://github.com/user-attachments/assets/0667a45b-b81b-46a2-846c-51fd8cb58c81)

## Features

1. **One file to edit:** your details, sections, projects and links are all in `src/lib/DynamicValues.ts`.
2. **Easy to restyle:** colours and design come from `src/index.css`.
3. **Light and dark mode,** built with shadcn/ui and Tailwind.
4. **Works on every screen:** desktop, tablet and phone.
5. **Free hosting:** deploys to GitHub Pages with two commands.
6. **Share and support pages** for your READMEs: `/share/?repo=<name>` and `/support/`.

## Make your own portfolio

You need Node.js and npm ([download](https://nodejs.org/en/download/)).

1. Fork this repository.
2. In the fork's settings, rename it to `your-github-username.github.io`.
3. Clone it: `git clone YOUR-REPOSITORY-URL`
4. Put your own data in `src/lib/DynamicValues.ts`.
5. Build it: `npm run predeploy`
6. Publish it: `npm run deploy`
7. In the repository settings, under Pages, set the source to the `master` branch.

Your portfolio is then live at `https://your-github-username.github.io/`. GitHub usually takes 3 to 5 minutes to publish. If it still doesn't show, run steps 5 and 6 again.

## Run it on your computer

1. Clone the repository.
2. Install: `npm install`
3. Start: `npm run dev`
4. Open `http://localhost:3000` in your browser.

## Older versions

1. V1: https://p32929.github.io/portfolio-v1/ (source: https://github.com/p32929/portfolio-v1)
2. V2: https://p32929.github.io/portfolio-v2/ (source: https://github.com/p32929/portfolio-v2)
3. V3, the current one: https://p32929.github.io/ (this repository)

## License

MIT License. Copyright (c) 2024 Fayaz Bin Salam. See [LICENSE](LICENSE) for the full text.

## Contributing

Contributions are very welcome, thank you! Before you start on a pull request, please open an issue and tell me what you would like to add or change. That way we can agree on it first, and your time is not wasted on something that might not fit.

## Share

<a href="https://p32929.github.io/share/?repo=p32929.github.io"><img src="https://p32929.github.io/readme/share.svg" alt="Share this with your friends in just a click" width="420"></a>

## Support

<a href="https://p32929.github.io/support/"><img src="https://p32929.github.io/readme/support.svg" alt="If you like my works and want to support me, feel free to support" width="420"></a>
